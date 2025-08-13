import Head from 'next/head';

export const blogPost = {
  id: 9,
  title: 'Machine Learning for Web Developers: Getting Started with TensorFlow.js in 2025',
  slug: 'machine-learning-web-developers-tensorflow-js-2025-guide',
  excerpt: 'Learn how to integrate machine learning directly into web applications using TensorFlow.js. Includes practical examples, model training, and deployment strategies.',
  author: 'Renie Namocot',
  publishDate: '2025-08-01',
  lastModified: '2025-08-01',
  category: 'ai-development',
  tags: ['Machine Learning', 'TensorFlow.js', 'AI', 'Web Development', 'JavaScript', 'Browser ML'],
  featured: false,
  readTime: '18 min read',
  image: '/blog_placeholder.jpg',
  featuredImageUrl: '/blog_placeholder.jpg'
};

export default function MachineLearningTensorFlowJS() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogPost.title,
    "description": blogPost.excerpt,
    "image": blogPost.featuredImageUrl,
    "author": {
      "@type": "Person",
      "name": blogPost.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Renie Namocot - Full Stack Developer",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "datePublished": blogPost.publishDate,
    "dateModified": blogPost.lastModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://yoursite.com/blogs/${blogPost.slug}`
    }
  };

  return (
    <>
      <Head>
        <title>{blogPost.title} | Renie Namocot</title>
        <meta name="description" content={blogPost.excerpt} />
        <meta name="keywords" content={blogPost.tags.join(', ')} />
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content={blogPost.excerpt} />
        <meta property="og:image" content={blogPost.featuredImageUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={blogPost.author} />
        <meta property="article:published_time" content={blogPost.publishDate} />
        <meta property="article:modified_time" content={blogPost.lastModified} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogPost.title} />
        <meta name="twitter:description" content={blogPost.excerpt} />
        <meta name="twitter:image" content={blogPost.featuredImageUrl} />
        <link rel="canonical" href={`https://yoursite.com/blogs/${blogPost.slug}`} />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {blogPost.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600 mb-4">
            <span>By {blogPost.author}</span>
            <span>•</span>
            <time dateTime={blogPost.publishDate}>
              {new Date(blogPost.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{blogPost.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {blogPost.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <img 
            src={blogPost.featuredImageUrl} 
            alt={blogPost.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </header>

        <div className="prose prose-lg max-w-none">
          <h2>Introduction to TensorFlow.js</h2>
          <p>TensorFlow.js brings machine learning directly to web browsers and Node.js applications. In 2025, it's easier than ever to integrate ML models into web applications, enabling real-time predictions and intelligent user interactions without server round trips.</p>
          
          <h3>Why TensorFlow.js in 2025?</h3>
          <ul>
            <li><strong>Privacy:</strong> Data stays on the client device</li>
            <li><strong>Performance:</strong> Reduced server load and faster responses</li>
            <li><strong>Offline capability:</strong> Models work without internet</li>
            <li><strong>Real-time processing:</strong> Instant predictions and feedback</li>
          </ul>
          
          <h3>Getting Started</h3>
          <h4>Installation</h4>
          <p>Install TensorFlow.js in your project:</p>
          <pre><code>{`npm install @tensorflow/tfjs
# or for browser
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>`}</code></pre>
          
          <h4>Basic Setup</h4>
          <pre><code>{`import * as tf from '@tensorflow/tfjs';

// Check if WebGL is available (recommended for performance)
await tf.ready();
console.log('Backend:', tf.getBackend());

// Create a simple model
const model = tf.sequential({
  layers: [
    tf.layers.dense({ inputShape: [1], units: 1 })
  ]
});

model.compile({
  optimizer: 'sgd',
  loss: 'meanSquaredError'
});`}</code></pre>
          
          <h3>Practical Example: Image Classification</h3>
          <h4>Loading a Pre-trained Model</h4>
          <p>Use MobileNet for image classification:</p>
          <pre><code>{`import * as tf from '@tensorflow/tfjs';

// Load pre-trained MobileNet model
const model = await tf.loadLayersModel('https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification/4');

async function classifyImage(imageElement) {
  // Preprocess the image
  const tensor = tf.browser.fromPixels(imageElement)
    .resizeNearestNeighbor([224, 224])
    .toFloat()
    .div(255.0)
    .expandDims();
  
  // Make prediction
  const predictions = await model.predict(tensor).data();
  
  // Get top prediction
  const topPrediction = Array.from(predictions)
    .map((p, i) => ({ probability: p, className: IMAGENET_CLASSES[i] }))
    .sort((a, b) => b.probability - a.probability)[0];
    
  return topPrediction;
}`}</code></pre>
          
          <h4>React Component for Image Classification</h4>
          <pre><code>{`import { useState, useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

function ImageClassifier() {
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    async function loadModel() {
      setLoading(true);
      try {
        const loadedModel = await tf.loadLayersModel('/models/mobilenet/model.json');
        setModel(loadedModel);
      } catch (error) {
        console.error('Failed to load model:', error);
      }
      setLoading(false);
    }
    loadModel();
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file || !model) return;

    const imageUrl = URL.createObjectURL(file);
    const img = imageRef.current;
    img.src = imageUrl;
    
    img.onload = async () => {
      setLoading(true);
      try {
        const tensor = tf.browser.fromPixels(img)
          .resizeNearestNeighbor([224, 224])
          .toFloat()
          .div(255.0)
          .expandDims();
        
        const predictions = await model.predict(tensor).data();
        const result = getTopPrediction(predictions);
        setPrediction(result);
      } catch (error) {
        console.error('Prediction failed:', error);
      }
      setLoading(false);
    };
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Image Classifier</h2>
      
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={fileInputRef}
        className="mb-4"
      />
      
      <img
        ref={imageRef}
        alt="Preview"
        className="max-w-full h-48 object-contain mx-auto mb-4"
        style={{ display: 'none' }}
      />
      
      {loading && <div className="text-center">Processing...</div>}
      
      {prediction && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold">Prediction:</h3>
          <p>{prediction.className}</p>
          <p>Confidence: {(prediction.probability * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}`}</code></pre>
          
          <h3>Training Custom Models</h3>
          <h4>Linear Regression Example</h4>
          <p>Train a simple model to predict house prices:</p>
          <pre><code>{`async function trainHousePriceModel() {
  // Sample data: [square_feet, bedrooms, bathrooms] -> price
  const trainingData = [
    [[1200, 2, 1], 300000],
    [[1500, 3, 2], 400000],
    [[2000, 4, 3], 550000],
    // ... more data
  ];

  // Prepare tensors
  const xs = tf.tensor2d(trainingData.map(d => d[0]));
  const ys = tf.tensor2d(trainingData.map(d => [d[1]]));

  // Create model
  const model = tf.sequential({
    layers: [
      tf.layers.dense({ inputShape: [3], units: 10, activation: 'relu' }),
      tf.layers.dense({ units: 10, activation: 'relu' }),
      tf.layers.dense({ units: 1 })
    ]
  });

  model.compile({
    optimizer: tf.train.adam(0.01),
    loss: 'meanSquaredError',
    metrics: ['mae']
  });

  // Train the model
  await model.fit(xs, ys, {
    epochs: 100,
    validationSplit: 0.2,
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        console.log(\`Epoch \${epoch}: loss = \${logs.loss}\`);
      }
    }
  });

  return model;
}`}</code></pre>
          
          <h3>Model Deployment and Optimization</h3>
          <h4>Model Quantization</h4>
          <p>Reduce model size for web deployment:</p>
          <pre><code>{`// Convert and quantize model
const quantizedModel = await tf.quantization.quantize(model, 'int8');

// Save quantized model
await quantizedModel.save('file://./quantized_model');`}</code></pre>
          
          <h4>Model Caching</h4>
          <p>Cache models in the browser for better performance:</p>
          <pre><code>{`// Enable model caching
tf.io.registerLoadRouter((url) => {
  if (url.startsWith('cache://')) {
    return tf.io.browserHTTPRequest(url.replace('cache://', '/models/'));
  }
  return null;
});

// Load with caching
const model = await tf.loadLayersModel('cache://my-model/model.json');`}</code></pre>
          
          <h3>Performance Optimization</h3>
          <h4>WebGL Backend</h4>
          <p>Ensure optimal performance with WebGL:</p>
          <pre><code>{`// Set backend explicitly
await tf.setBackend('webgl');

// Check memory usage
console.log('Memory:', tf.memory());

// Dispose tensors to prevent memory leaks
tensor.dispose();`}</code></pre>
          
          <h3>Real-World Applications</h3>
          <ul>
            <li><strong>Image Recognition:</strong> Real-time object detection and classification</li>
            <li><strong>Natural Language Processing:</strong> Sentiment analysis and text classification</li>
            <li><strong>Recommendation Systems:</strong> Personalized content suggestions</li>
            <li><strong>Anomaly Detection:</strong> Fraud detection and quality control</li>
            <li><strong>Computer Vision:</strong> Face detection and pose estimation</li>
          </ul>
          
          <h3>Best Practices</h3>
          <ol>
            <li><strong>Model Size:</strong> Keep models under 50MB for web deployment</li>
            <li><strong>Memory Management:</strong> Always dispose of tensors when done</li>
            <li><strong>Progressive Loading:</strong> Load models asynchronously</li>
            <li><strong>Fallback Strategies:</strong> Handle cases where WebGL is not available</li>
            <li><strong>User Experience:</strong> Show loading states and progress indicators</li>
          </ol>
          
          <h3>Future of Browser-Based ML</h3>
          <p>Looking ahead to 2025 and beyond:</p>
          <ul>
            <li><strong>WebAssembly:</strong> Better performance for ML workloads</li>
            <li><strong>WebGPU:</strong> Direct GPU access for complex computations</li>
            <li><strong>Model Hubs:</strong> Easier discovery and integration of pre-trained models</li>
            <li><strong>Edge Computing:</strong> Hybrid client-server ML architectures</li>
          </ul>
          
          <h3>Conclusion</h3>
          <p>TensorFlow.js opens up exciting possibilities for web developers to create intelligent applications that run entirely in the browser. With the right approach to model selection, optimization, and user experience, machine learning can become a powerful tool in your web development toolkit.</p>
        </div>
      </article>
    </>
  );
}