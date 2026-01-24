import { useEffect, useState, useCallback } from 'react';

let sharedWorker = null;
let sharedReady = false;
let requestId = 0;
const pendingRequests = new Map();
const readyListeners = new Set();

const notifyReady = (ready) => {
  readyListeners.forEach((listener) => listener(ready));
};

const initWorker = () => {
  if (sharedWorker) return;

  try {
    sharedWorker = new Worker(
      new URL('../workers/faceDetectionWorker.js', import.meta.url),
      { type: 'module' }
    );

    sharedWorker.onmessage = (event) => {
      const { id, type, ...data } = event.data;

      if (type === 'detect-result' && pendingRequests.has(id)) {
        const { resolve } = pendingRequests.get(id);
        resolve(data);
        pendingRequests.delete(id);
      } else if (type === 'model-loaded') {
        sharedReady = true;
        notifyReady(true);
      }
    };

    // Lazy model load
    const id = ++requestId;
    sharedWorker.postMessage({ type: 'load-model', id });
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn('Web Worker not supported, face detection disabled:', error);
    }
    sharedWorker = null;
    sharedReady = false;
    notifyReady(false);
  }
};

const useFaceDetection = () => {
  const [isReady, setIsReady] = useState(sharedReady);

  useEffect(() => {
    initWorker();
    const listener = (ready) => setIsReady(ready);
    readyListeners.add(listener);
    return () => {
      readyListeners.delete(listener);
    };
  }, []);

  const detect = useCallback((imageData) => {
    if (!sharedWorker) {
      return Promise.resolve({ faces: [], success: false, error: 'Worker not initialized' });
    }

    return new Promise((resolve) => {
      const id = ++requestId;
      pendingRequests.set(id, { resolve });

      try {
        sharedWorker.postMessage({ type: 'detect', imageData, id });
      } catch (error) {
        resolve({ faces: [], success: false, error: error.message });
        pendingRequests.delete(id);
      }
    });
  }, []);

  return {
    detect,
    isReady,
  };
};

export default useFaceDetection;
