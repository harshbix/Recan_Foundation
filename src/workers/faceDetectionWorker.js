// Face Detection Web Worker
// Runs off-main-thread for non-blocking face detection

let model = null;
let isModelLoading = false;

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
    const tf = await import('@tensorflow/tfjs');
    const blazeface = await import('@tensorflow-models/blazeface');

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
    
    if (!model) {
      return { faces: [], error: 'Model failed to load', success: false };
    }

    // Convert ImageData to canvas and predict
    const canvas = new OffscreenCanvas(imageData.width, imageData.height);
    const ctx = canvas.getContext('2d');
    ctx.putImageData(imageData, 0, 0);

    const predictions = await model.estimateFaces(canvas, false);

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
