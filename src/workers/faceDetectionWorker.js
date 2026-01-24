// Face Detection Web Worker
// Runs off-main-thread for non-blocking face detection

let model = null;
let isModelLoading = false;
let tfRef = null;
let sharedCanvas = null;
let sharedCtx = null;

const loadModel = async () => {
  if (model) return;
  if (isModelLoading) {
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (model) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 50);
    });
  }

  isModelLoading = true;
  try {
    tfRef = await import('@tensorflow/tfjs');
    const blazeface = await import('@tensorflow-models/blazeface');

    await tfRef.setBackend('cpu');
    await tfRef.ready();

    model = await blazeface.load();
    isModelLoading = false;
  } catch (error) {
    isModelLoading = false;
    model = null;
  }
};

const detectFaces = async (imageData) => {
  try {
    await loadModel();
    
    if (!model || !tfRef) {
      return { faces: [], error: 'Model failed to load', success: false };
    }

    // Convert ImageData to canvas and predict
    if (!sharedCanvas || sharedCanvas.width !== imageData.width || sharedCanvas.height !== imageData.height) {
      sharedCanvas = new OffscreenCanvas(imageData.width, imageData.height);
      sharedCtx = sharedCanvas.getContext('2d');
    }

    sharedCtx.putImageData(imageData, 0, 0);

    tfRef.engine().startScope();
    const predictions = await model.estimateFaces(sharedCanvas, false);
    tfRef.engine().endScope();

    // Transform predictions to bounding boxes
    const faces = predictions.map((prediction) => {
      const start = prediction.start;
      const end = prediction.end;
      
      return {
        x: start[0],
        y: start[1],
        width: end[0] - start[0],
        height: end[1] - start[1],
      };
    });

    return {
      faces,
      success: true,
      faceCount: faces.length,
    };
  } catch (error) {
    return {
      faces: [],
      error: error.message,
      success: false,
    };
  }
};

// Listen for messages from main thread
self.onmessage = async (event) => {
  const { type, imageData, id } = event.data;

  if (type === 'detect') {
    const result = await detectFaces(imageData);
    self.postMessage({ id, type: 'detect-result', ...result });
  } else if (type === 'load-model') {
    await loadModel();
    self.postMessage({ id, type: 'model-loaded', success: !!model });
  }
};
