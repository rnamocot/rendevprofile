import Head from 'next/head';

export const blogPost = {
  id: 18,
  title: 'Cloudflare R2 + Presigned URLs: Zero Egress Fee File Storage Implementation',
  slug: 'cloudflare-r2-presigned-urls-zero-egress-implementation',
  excerpt: 'Learn how to implement Cloudflare R2 with presigned URLs while maintaining zero egress fees. Complete guide with code examples for secure, cost-effective file storage and delivery.',
  author: 'Renie Namocot',
  publishDate: '2025-07-18',
  lastModified: '2025-07-18',
  category: 'web-development',
  tags: ['Cloudflare R2', 'File Storage', 'Presigned URLs', 'Zero Egress', 'AWS S3 Compatible', 'Cost Optimization'],
  featured: true,
  readTime: '15 min read',
  image: '/blog_placeholder.jpg',
  featuredImageUrl: '/blog_placeholder.jpg'
};

export default function CloudflareR2PresignedURLs() {
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
      "@id": `https://renienamocot.com/blogs/${blogPost.slug}`
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
        <link rel="canonical" href={`https://renienamocot.com/blogs/${blogPost.slug}`} />
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
          <h2>Introduction</h2>
          <p>Cloudflare R2 is revolutionizing object storage by offering S3-compatible storage with zero egress fees. When combined with presigned URLs, you get a powerful, cost-effective solution for file uploads, downloads, and media delivery. This comprehensive guide shows you how to implement Cloudflare R2 with presigned URLs while maintaining those precious zero egress fees.</p>

          <p>Unlike traditional cloud storage solutions that charge hefty egress fees, Cloudflare R2 allows you to serve unlimited bandwidth without additional costs. This makes it perfect for applications with high download volumes, media streaming, or file sharing platforms.</p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h3 className="text-blue-900 font-semibold mb-2">💡 Key Benefits Covered:</h3>
            <ul className="text-blue-800">
              <li>✅ Zero egress fees for file downloads</li>
              <li>✅ S3-compatible API for easy migration</li>
              <li>✅ Secure presigned URL implementation</li>
              <li>✅ Global edge network performance</li>
              <li>✅ Cost-effective file storage solution</li>
            </ul>
          </div>

          <h2>Why Cloudflare R2 + Presigned URLs?</h2>

          <h3>The Cost Problem with Traditional Storage</h3>
          <p>Traditional cloud storage providers charge for egress (data transfer out). For a file-heavy application, these costs can become astronomical:</p>

          <div className="bg-red-50 p-4 rounded-lg my-4">
            <h4 className="text-red-800 font-semibold">Traditional Storage Costs (per GB):</h4>
            <ul className="text-red-700 mt-2">
              <li>AWS S3: $0.09 per GB egress</li>
              <li>Google Cloud Storage: $0.12 per GB egress</li>
              <li>Azure Blob Storage: $0.087 per GB egress</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg my-4">
            <h4 className="text-green-800 font-semibold">Cloudflare R2 Costs:</h4>
            <ul className="text-green-700 mt-2">
              <li>Storage: $0.015 per GB/month</li>
              <li>Class A operations: $4.50 per million requests</li>
              <li>Class B operations: $0.36 per million requests</li>
              <li><strong>Egress: $0.00 (FREE!)</strong></li>
            </ul>
          </div>

          <h3>What Are Presigned URLs?</h3>
          <p>Presigned URLs are temporary, secure URLs that grant time-limited access to private objects in your storage bucket. They allow you to:</p>
          <ul>
            <li>Upload files directly to storage without exposing credentials</li>
            <li>Download private files without making them public</li>
            <li>Control access duration and permissions</li>
            <li>Reduce server load by enabling direct client-to-storage transfers</li>
          </ul>

          <h2>Setting Up Cloudflare R2</h2>

          <h3>1. Create R2 Bucket</h3>
          <p>First, create your R2 bucket in the Cloudflare dashboard:</p>

          <pre><code>{`# Via Cloudflare Dashboard:
1. Go to Cloudflare Dashboard > R2 Object Storage
2. Click "Create bucket"
3. Enter bucket name (e.g., "my-app-files")
4. Choose location (auto for global distribution)
5. Click "Create bucket"`}</code></pre>

          <h3>2. Generate API Credentials</h3>
          <p>Create API tokens for programmatic access:</p>

          <pre><code>{`# Steps:
1. Go to Cloudflare Dashboard > R2 > Manage R2 API tokens
2. Click "Create API token"
3. Choose "Custom token" 
4. Permissions: "Object Read and Write"
5. Account resources: Include your account
6. Zone resources: Include your R2 bucket
7. Copy the Access Key ID and Secret Access Key`}</code></pre>

          <h3>3. Environment Configuration</h3>
          <p>Set up your environment variables:</p>

          <pre><code>{`.env.local
# Cloudflare R2 Configuration
R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key_id
R2_SECRET_ACCESS_KEY=your_secret_access_key
R2_BUCKET_NAME=my-app-files
R2_ENDPOINT=https://{account_id}.r2.cloudflarestorage.com
R2_PUBLIC_URL=https://pub-{hash}.r2.dev  # Optional: for public access`}</code></pre>

          <h2>Backend Implementation</h2>

          <h3>Installing Dependencies</h3>
          <pre><code>{`npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
# or
yarn add @aws-sdk/client-s3 @aws-sdk/s3-request-presigner`}</code></pre>

          <h3>R2 Client Setup</h3>
          <p>Create a reusable R2 client configuration:</p>

          <pre><code>{`// lib/r2-client.js
import { S3Client } from "@aws-sdk/client-s3";

const r2Client = new S3Client({
  region: "auto", // R2 uses 'auto' region
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
  // Important: Preserve zero egress fees
  forcePathStyle: true,
});

export default r2Client;`}</code></pre>

          <h3>Presigned URL Generation Service</h3>
          <p>Create a service for generating presigned URLs:</p>

          <pre><code>{`// lib/r2-presigned.js
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import r2Client from "./r2-client.js";
import crypto from "crypto";

const BUCKET_NAME = process.env.R2_BUCKET_NAME;

// Generate presigned URL for file upload
export async function generateUploadURL(fileName, fileType, expiresIn = 3600) {
  // Generate unique file name to prevent conflicts
  const uniqueFileName = \`\${Date.now()}-\${crypto.randomUUID()}-\${fileName}\`;
  
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: uniqueFileName,
    ContentType: fileType,
    // Optional: Add metadata
    Metadata: {
      originalName: fileName,
      uploadedAt: new Date().toISOString(),
    },
  });

  try {
    const uploadURL = await getSignedUrl(r2Client, command, { 
      expiresIn // URL expires in 1 hour by default
    });
    
    return {
      uploadURL,
      fileName: uniqueFileName,
      originalName: fileName,
    };
  } catch (error) {
    console.error("Error generating upload URL:", error);
    throw new Error("Failed to generate upload URL");
  }
}

// Generate presigned URL for file download
export async function generateDownloadURL(fileName, expiresIn = 3600) {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: fileName,
  });

  try {
    const downloadURL = await getSignedUrl(r2Client, command, { 
      expiresIn 
    });
    
    return downloadURL;
  } catch (error) {
    console.error("Error generating download URL:", error);
    throw new Error("Failed to generate download URL");
  }
}

// Generate presigned URL for file deletion
export async function generateDeleteURL(fileName, expiresIn = 900) {
  const command = new DeleteObjectCommand({
    Bucket: BUCKET_NAME,
    Key: fileName,
  });

  try {
    const deleteURL = await getSignedUrl(r2Client, command, { 
      expiresIn // Shorter expiration for delete operations
    });
    
    return deleteURL;
  } catch (error) {
    console.error("Error generating delete URL:", error);
    throw new Error("Failed to generate delete URL");
  }
}

// List files in bucket (for admin purposes)
export async function listFiles(prefix = "", maxKeys = 100) {
  const { ListObjectsV2Command } = await import("@aws-sdk/client-s3");
  
  const command = new ListObjectsV2Command({
    Bucket: BUCKET_NAME,
    Prefix: prefix,
    MaxKeys: maxKeys,
  });

  try {
    const response = await r2Client.send(command);
    return response.Contents || [];
  } catch (error) {
    console.error("Error listing files:", error);
    throw new Error("Failed to list files");
  }
}`}</code></pre>

          <h2>API Routes Implementation</h2>

          <h3>Next.js API Routes</h3>
          <p>Create API endpoints for presigned URL generation:</p>

          <pre><code>{`// pages/api/upload/presign.js (or app/api/upload/presign/route.js for App Router)
import { generateUploadURL } from "../../../lib/r2-presigned";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fileName, fileType } = req.body;

    // Validate input
    if (!fileName || !fileType) {
      return res.status(400).json({ 
        error: "fileName and fileType are required" 
      });
    }

    // Optional: Add file size/type restrictions
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      'image/jpeg', 'image/png', 'image/webp',
      'application/pdf', 'text/plain'
    ];

    if (!allowedTypes.includes(fileType)) {
      return res.status(400).json({ 
        error: "File type not allowed" 
      });
    }

    const result = await generateUploadURL(fileName, fileType);

    res.status(200).json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error("Upload presign error:", error);
    res.status(500).json({ 
      error: "Failed to generate upload URL" 
    });
  }
}

// For App Router (app/api/upload/presign/route.js)
export async function POST(request) {
  try {
    const { fileName, fileType } = await request.json();

    if (!fileName || !fileType) {
      return Response.json({ 
        error: "fileName and fileType are required" 
      }, { status: 400 });
    }

    const result = await generateUploadURL(fileName, fileType);

    return Response.json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error("Upload presign error:", error);
    return Response.json({ 
      error: "Failed to generate upload URL" 
    }, { status: 500 });
  }
}`}</code></pre>

          <pre><code>{`// pages/api/download/presign.js
import { generateDownloadURL } from "../../../lib/r2-presigned";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fileName } = req.query;

    if (!fileName) {
      return res.status(400).json({ 
        error: "fileName is required" 
      });
    }

    // Optional: Add authorization check here
    // const isAuthorized = await checkUserAccess(req, fileName);
    // if (!isAuthorized) {
    //   return res.status(403).json({ error: "Access denied" });
    // }

    const downloadURL = await generateDownloadURL(fileName);

    res.status(200).json({
      success: true,
      downloadURL
    });

  } catch (error) {
    console.error("Download presign error:", error);
    res.status(500).json({ 
      error: "Failed to generate download URL" 
    });
  }
}`}</code></pre>

          <h2>Frontend Implementation</h2>

          <h3>File Upload Hook</h3>
          <p>Create a React hook for handling file uploads:</p>

          <pre><code>{`// hooks/useR2Upload.js
import { useState } from 'react';

export function useR2Upload() {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);

  const uploadFile = async (file) => {
    setUploading(true);
    setError(null);
    setUploadProgress(0);

    try {
      // Step 1: Get presigned URL
      const presignResponse = await fetch('/api/upload/presign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileName: file.name,
          fileType: file.type,
        }),
      });

      if (!presignResponse.ok) {
        throw new Error('Failed to get upload URL');
      }

      const { data } = await presignResponse.json();

      // Step 2: Upload directly to R2 using presigned URL
      const uploadResponse = await fetch(data.uploadURL, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type,
        },
      });

      if (!uploadResponse.ok) {
        throw new Error('Failed to upload file');
      }

      setUploadProgress(100);

      // Return file info for further processing
      return {
        fileName: data.fileName,
        originalName: data.originalName,
        size: file.size,
        type: file.type,
      };

    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setUploading(false);
    }
  };

  const uploadWithProgress = async (file) => {
    setUploading(true);
    setError(null);
    setUploadProgress(0);

    try {
      // Get presigned URL
      const presignResponse = await fetch('/api/upload/presign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileName: file.name,
          fileType: file.type,
        }),
      });

      if (!presignResponse.ok) {
        throw new Error('Failed to get upload URL');
      }

      const { data } = await presignResponse.json();

      // Upload with progress tracking
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.upload.addEventListener('progress', (event) => {
          if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            setUploadProgress(percentComplete);
          }
        });

        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            resolve({
              fileName: data.fileName,
              originalName: data.originalName,
              size: file.size,
              type: file.type,
            });
          } else {
            reject(new Error('Upload failed'));
          }
          setUploading(false);
        });

        xhr.addEventListener('error', () => {
          reject(new Error('Upload failed'));
          setUploading(false);
        });

        xhr.open('PUT', data.uploadURL);
        xhr.setRequestHeader('Content-Type', file.type);
        xhr.send(file);
      });

    } catch (err) {
      setError(err.message);
      setUploading(false);
      throw err;
    }
  };

  return {
    uploadFile,
    uploadWithProgress,
    uploading,
    uploadProgress,
    error,
  };
}`}</code></pre>

          <h3>File Upload Component</h3>
          <p>Create a user-friendly file upload component:</p>

          <pre><code>{`// components/FileUpload.jsx
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useR2Upload } from '../hooks/useR2Upload';

export default function FileUpload({ onUploadComplete, maxFiles = 5 }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { uploadWithProgress, uploading, uploadProgress, error } = useR2Upload();

  const onDrop = useCallback(async (acceptedFiles) => {
    for (const file of acceptedFiles) {
      try {
        const result = await uploadWithProgress(file);
        
        setUploadedFiles(prev => [...prev, {
          ...result,
          url: \`/api/file/\${result.fileName}\`, // Your download endpoint
          uploadedAt: new Date().toISOString(),
        }]);

        if (onUploadComplete) {
          onUploadComplete(result);
        }
      } catch (err) {
        console.error('Upload failed:', err);
      }
    }
  }, [uploadWithProgress, onUploadComplete]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles,
    maxSize: 10 * 1024 * 1024, // 10MB
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp'],
      'application/pdf': ['.pdf'],
      'text/plain': ['.txt'],
    },
  });

  return (
    <div className="w-full max-w-lg mx-auto">
      <div
        {...getRootProps()}
        className={\`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          \${isDragActive 
            ? 'border-blue-400 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
          }
          \${uploading ? 'pointer-events-none opacity-50' : ''}
        \`}
      >
        <input {...getInputProps()} />
        
        <div className="space-y-4">
          <div className="text-4xl">📁</div>
          
          {uploading ? (
            <div className="space-y-2">
              <div className="text-sm text-gray-600">
                Uploading... {Math.round(uploadProgress)}%
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: \`\${uploadProgress}%\` }}
                ></div>
              </div>
            </div>
          ) : isDragActive ? (
            <div className="text-blue-600">Drop files here...</div>
          ) : (
            <div className="space-y-2">
              <div className="text-gray-700">
                Drag and drop files here, or click to select
              </div>
              <div className="text-sm text-gray-500">
                Max {maxFiles} files, 10MB each
              </div>
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <div className="text-red-600 text-sm">{error}</div>
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div className="mt-6 space-y-3">
          <h3 className="font-medium text-gray-900">Uploaded Files</h3>
          {uploadedFiles.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {file.originalName}
                  </div>
                  <div className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                </div>
              </div>
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                View
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`}</code></pre>

          <h3>Download Component</h3>
          <p>Create a component for secure file downloads:</p>

          <pre><code>{`// components/FileDownload.jsx
import React, { useState } from 'react';

export default function FileDownload({ fileName, originalName, fileSize }) {
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = async () => {
    setDownloading(true);
    setError(null);

    try {
      // Get presigned download URL
      const response = await fetch(\`/api/download/presign?fileName=\${encodeURIComponent(fileName)}\`);
      
      if (!response.ok) {
        throw new Error('Failed to get download URL');
      }

      const { downloadURL } = await response.json();

      // Create temporary link and trigger download
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = originalName || fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err) {
      setError(err.message);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-blue-600">📄</span>
        </div>
        <div>
          <div className="font-medium text-gray-900">
            {originalName || fileName}
          </div>
          {fileSize && (
            <div className="text-sm text-gray-500">
              {(fileSize / 1024 / 1024).toFixed(2)} MB
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 disabled:opacity-50"
        >
          {downloading ? 'Downloading...' : 'Download'}
        </button>
      </div>

      {error && (
        <div className="mt-2 text-sm text-red-600">
          Error: {error}
        </div>
      )}
    </div>
  );
}`}</code></pre>

          <h2>Advanced Implementation Patterns</h2>

          <h3>1. Organized File Structure</h3>
          <p>Implement organized storage patterns:</p>

          <pre><code>{`// lib/r2-file-manager.js
export class R2FileManager {
  constructor(bucket, basePath = '') {
    this.bucket = bucket;
    this.basePath = basePath;
  }

  // Organize files by user and type
  generateFilePath(userId, fileType, fileName) {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    
    const fileExtension = fileName.split('.').pop();
    const uniqueId = crypto.randomUUID();
    
    return \`\${this.basePath}/users/\${userId}/\${fileType}/\${year}/\${month}/\${uniqueId}.\${fileExtension}\`;
  }

  // Generate presigned URL with custom path
  async generateUploadURL(userId, fileType, fileName, expiresIn = 3600) {
    const filePath = this.generateFilePath(userId, fileType, fileName);
    
    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: filePath,
      ContentType: this.getContentType(fileName),
      Metadata: {
        userId,
        fileType,
        originalName: fileName,
        uploadedAt: new Date().toISOString(),
      },
    });

    const uploadURL = await getSignedUrl(r2Client, command, { expiresIn });
    
    return {
      uploadURL,
      filePath,
      fileName: fileName,
    };
  }

  getContentType(fileName) {
    const extension = fileName.split('.').pop().toLowerCase();
    const mimeTypes = {
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'webp': 'image/webp',
      'pdf': 'application/pdf',
      'txt': 'text/plain',
      'json': 'application/json',
    };
    return mimeTypes[extension] || 'application/octet-stream';
  }
}`}</code></pre>

          <h3>2. File Metadata Management</h3>
          <p>Track file metadata in your database:</p>

          <pre><code>{`// models/File.js (Example using Prisma)
model File {
  id          String   @id @default(cuid())
  fileName    String   // R2 file path
  originalName String  // Original filename
  fileSize    Int
  contentType String
  userId      String
  bucket      String
  isPublic    Boolean  @default(false)
  downloadCount Int    @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  user User @relation(fields: [userId], references: [id])
  
  @@map("files")
}

// services/fileService.js
export class FileService {
  static async saveFileMetadata(fileData) {
    return await prisma.file.create({
      data: {
        fileName: fileData.fileName,
        originalName: fileData.originalName,
        fileSize: fileData.fileSize,
        contentType: fileData.contentType,
        userId: fileData.userId,
        bucket: process.env.R2_BUCKET_NAME,
      },
    });
  }

  static async getFileById(fileId, userId) {
    return await prisma.file.findFirst({
      where: {
        id: fileId,
        userId, // Ensure user owns the file
      },
    });
  }

  static async incrementDownloadCount(fileId) {
    return await prisma.file.update({
      where: { id: fileId },
      data: {
        downloadCount: {
          increment: 1,
        },
      },
    });
  }
}`}</code></pre>

          <h3>3. Security and Access Control</h3>
          <p>Implement proper security measures:</p>

          <pre><code>{`// middleware/auth.js
export async function authenticateUser(req) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    throw new Error('Authentication required');
  }

  // Verify JWT token
  const user = await verifyJWT(token);
  return user;
}

// pages/api/upload/presign.js - With authentication
export default async function handler(req, res) {
  try {
    const user = await authenticateUser(req);
    
    const { fileName, fileType, isPublic = false } = req.body;

    // Check user permissions
    if (!canUserUpload(user, fileType)) {
      return res.status(403).json({ error: 'Upload permission denied' });
    }

    // Generate organized file path
    const fileManager = new R2FileManager(process.env.R2_BUCKET_NAME);
    const result = await fileManager.generateUploadURL(
      user.id, 
      getFileCategory(fileType), 
      fileName
    );

    // Save metadata to database
    const fileRecord = await FileService.saveFileMetadata({
      ...result,
      fileSize: req.body.fileSize,
      contentType: fileType,
      userId: user.id,
      isPublic,
    });

    res.status(200).json({
      success: true,
      data: {
        ...result,
        fileId: fileRecord.id,
      }
    });

  } catch (error) {
    console.error('Upload presign error:', error);
    res.status(500).json({ error: 'Failed to generate upload URL' });
  }
}

function canUserUpload(user, fileType) {
  // Implement your business logic
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  return allowedTypes.includes(fileType) && user.role !== 'banned';
}

function getFileCategory(fileType) {
  if (fileType.startsWith('image/')) return 'images';
  if (fileType === 'application/pdf') return 'documents';
  return 'misc';
}`}</code></pre>

          <h2>Preserving Zero Egress Fees</h2>

          <h3>Key Strategies</h3>
          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <h4 className="text-yellow-900 font-semibold mb-3">🚨 Important: Maintaining Zero Egress</h4>
            <ul className="text-yellow-800 space-y-2">
              <li>✅ Use R2-native presigned URLs (not through CF Workers)</li>
              <li>✅ Direct client-to-R2 transfers via presigned URLs</li>
              <li>✅ Avoid proxying downloads through your server</li>
              <li>✅ Use R2 public domains for public content</li>
              <li>❌ Don't route downloads through Cloudflare Workers (charges apply)</li>
            </ul>
          </div>

          <h3>Public vs Private Content Strategy</h3>

          <pre><code>{`// Public content configuration
// For public files that don't need access control
export async function makeFilePublic(fileName) {
  const command = new PutObjectAclCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: fileName,
    ACL: 'public-read',
  });

  await r2Client.send(command);
  
  // Return public URL (zero egress)
  return \`https://pub-\${process.env.R2_PUBLIC_HASH}.r2.dev/\${fileName}\`;
}

// Private content using presigned URLs
export async function getPrivateFileURL(fileName, expiresIn = 3600) {
  // This preserves zero egress while maintaining access control
  return await generateDownloadURL(fileName, expiresIn);
}`}</code></pre>

          <h2>Performance Optimization</h2>

          <h3>1. Caching Strategies</h3>

          <pre><code>{`// lib/cache.js - Cache presigned URLs
const urlCache = new Map();
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

export function getCachedURL(key) {
  const cached = urlCache.get(key);
  if (cached && Date.now() < cached.expiry) {
    return cached.url;
  }
  return null;
}

export function setCachedURL(key, url, expiresIn) {
  urlCache.set(key, {
    url,
    expiry: Date.now() + (expiresIn * 1000) - (5 * 60 * 1000), // 5 min buffer
  });
}

// Enhanced presigned URL generation with caching
export async function generateCachedDownloadURL(fileName, expiresIn = 3600) {
  const cacheKey = \`download-\${fileName}\`;
  
  // Check cache first
  const cachedURL = getCachedURL(cacheKey);
  if (cachedURL) {
    return cachedURL;
  }

  // Generate new URL
  const downloadURL = await generateDownloadURL(fileName, expiresIn);
  
  // Cache for future use
  setCachedURL(cacheKey, downloadURL, expiresIn);
  
  return downloadURL;
}`}</code></pre>

          <h3>2. Batch Operations</h3>

          <pre><code>{`// lib/batch-operations.js
export async function generateMultipleUploadURLs(files) {
  const promises = files.map(file => 
    generateUploadURL(file.name, file.type)
  );

  try {
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error('Batch upload URL generation failed:', error);
    throw error;
  }
}

export async function batchDeleteFiles(fileNames) {
  const { DeleteObjectsCommand } = await import("@aws-sdk/client-s3");
  
  const command = new DeleteObjectsCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Delete: {
      Objects: fileNames.map(fileName => ({ Key: fileName })),
    },
  });

  try {
    const result = await r2Client.send(command);
    return result;
  } catch (error) {
    console.error('Batch delete failed:', error);
    throw error;
  }
}`}</code></pre>

          <h2>Error Handling and Monitoring</h2>

          <h3>Comprehensive Error Handling</h3>

          <pre><code>{`// lib/r2-errors.js
export class R2Error extends Error {
  constructor(message, code, statusCode = 500) {
    super(message);
    this.name = 'R2Error';
    this.code = code;
    this.statusCode = statusCode;
  }
}

export function handleR2Error(error) {
  if (error.name === 'NoSuchBucket') {
    return new R2Error('Bucket not found', 'BUCKET_NOT_FOUND', 404);
  }
  
  if (error.name === 'AccessDenied') {
    return new R2Error('Access denied', 'ACCESS_DENIED', 403);
  }
  
  if (error.name === 'SignatureDoesNotMatch') {
    return new R2Error('Invalid credentials', 'INVALID_CREDENTIALS', 401);
  }
  
  return new R2Error('Storage operation failed', 'STORAGE_ERROR', 500);
}

// Enhanced presigned URL generation with error handling
export async function safeGenerateUploadURL(fileName, fileType, expiresIn = 3600) {
  try {
    return await generateUploadURL(fileName, fileType, expiresIn);
  } catch (error) {
    const r2Error = handleR2Error(error);
    
    // Log for monitoring
    console.error('R2 Upload URL Generation Failed:', {
      fileName,
      fileType,
      error: r2Error.message,
      code: r2Error.code,
      timestamp: new Date().toISOString(),
    });
    
    throw r2Error;
  }
}`}</code></pre>

          <h3>Usage Analytics</h3>

          <pre><code>{`// lib/analytics.js
export class R2Analytics {
  static async trackUpload(fileData, userId) {
    // Track upload metrics
    await this.logEvent('file_uploaded', {
      fileName: fileData.fileName,
      fileSize: fileData.fileSize,
      contentType: fileData.contentType,
      userId,
      timestamp: new Date().toISOString(),
    });
  }

  static async trackDownload(fileName, userId) {
    // Track download metrics
    await this.logEvent('file_downloaded', {
      fileName,
      userId,
      timestamp: new Date().toISOString(),
    });
  }

  static async logEvent(event, data) {
    // Send to your analytics service
    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event, data }),
      });
    } catch (error) {
      console.error('Analytics tracking failed:', error);
    }
  }

  static async getStorageMetrics(userId) {
    return await prisma.file.aggregate({
      where: { userId },
      _sum: { fileSize: true },
      _count: { id: true },
    });
  }
}`}</code></pre>

          <h2>Best Practices and Tips</h2>

          <h3>Security Best Practices</h3>
          <ul>
            <li><strong>Short Expiration Times:</strong> Use minimal expiration times for presigned URLs</li>
            <li><strong>Content Type Validation:</strong> Always validate file types and sizes</li>
            <li><strong>Rate Limiting:</strong> Implement rate limiting for URL generation</li>
            <li><strong>User Authentication:</strong> Verify user permissions before generating URLs</li>
            <li><strong>Audit Logs:</strong> Log all file operations for security monitoring</li>
          </ul>

          <h3>Performance Tips</h3>
          <ul>
            <li><strong>Caching:</strong> Cache presigned URLs when appropriate</li>
            <li><strong>Batch Operations:</strong> Use batch operations for multiple files</li>
            <li><strong>Client-Side Validation:</strong> Validate files on the client before upload</li>
            <li><strong>Progress Tracking:</strong> Implement upload progress for better UX</li>
            <li><strong>Compression:</strong> Compress files on the client when possible</li>
          </ul>

          <h3>Cost Optimization</h3>
          <ul>
            <li><strong>Lifecycle Policies:</strong> Implement automatic deletion of old files</li>
            <li><strong>Deduplication:</strong> Avoid storing duplicate files</li>
            <li><strong>Public vs Private:</strong> Use public URLs for public content</li>
            <li><strong>Monitor Usage:</strong> Track storage and operation costs</li>
          </ul>

          <h2>Testing Your Implementation</h2>

          <h3>Unit Tests</h3>

          <pre><code>{`// tests/r2-presigned.test.js
import { generateUploadURL, generateDownloadURL } from '../lib/r2-presigned';

describe('R2 Presigned URLs', () => {
  test('should generate upload URL', async () => {
    const result = await generateUploadURL('test.jpg', 'image/jpeg');
    
    expect(result).toHaveProperty('uploadURL');
    expect(result).toHaveProperty('fileName');
    expect(result.uploadURL).toContain('X-Amz-Signature');
  });

  test('should generate download URL', async () => {
    const downloadURL = await generateDownloadURL('test-file.jpg');
    
    expect(downloadURL).toContain('X-Amz-Signature');
    expect(downloadURL).toContain(process.env.R2_BUCKET_NAME);
  });

  test('should handle errors gracefully', async () => {
    await expect(
      generateUploadURL('', 'invalid/type')
    ).rejects.toThrow();
  });
});`}</code></pre>

          <h3>Integration Tests</h3>

          <pre><code>{`// tests/upload-integration.test.js
import { uploadFile } from '../lib/test-utils';

describe('File Upload Integration', () => {
  test('complete upload flow', async () => {
    // 1. Generate presigned URL
    const response = await fetch('/api/upload/presign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fileName: 'test.jpg',
        fileType: 'image/jpeg'
      }),
    });

    const { data } = await response.json();
    expect(data.uploadURL).toBeDefined();

    // 2. Upload file using presigned URL
    const file = new File(['test content'], 'test.jpg', { type: 'image/jpeg' });
    const uploadResponse = await fetch(data.uploadURL, {
      method: 'PUT',
      body: file,
    });

    expect(uploadResponse.ok).toBe(true);

    // 3. Verify file was uploaded
    const downloadResponse = await fetch(
      \`/api/download/presign?fileName=\${data.fileName}\`
    );
    const { downloadURL } = await downloadResponse.json();
    expect(downloadURL).toBeDefined();
  });
});`}</code></pre>

          <h2>Monitoring and Maintenance</h2>

          <h3>Health Checks</h3>

          <pre><code>{`// pages/api/health/r2.js
import r2Client from '../../../lib/r2-client';
import { ListObjectsV2Command } from '@aws-sdk/client-s3';

export default async function handler(req, res) {
  try {
    // Test R2 connectivity
    const command = new ListObjectsV2Command({
      Bucket: process.env.R2_BUCKET_NAME,
      MaxKeys: 1,
    });

    const startTime = Date.now();
    await r2Client.send(command);
    const responseTime = Date.now() - startTime;

    res.status(200).json({
      status: 'healthy',
      service: 'cloudflare-r2',
      responseTime: \`\${responseTime}ms\`,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    res.status(500).json({
      status: 'unhealthy',
      service: 'cloudflare-r2',
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
}`}</code></pre>

          <h3>Usage Dashboard</h3>

          <pre><code>{`// components/R2Dashboard.jsx
import React, { useState, useEffect } from 'react';

export default function R2Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const response = await fetch('/api/analytics/r2-metrics');
      const data = await response.json();
      setMetrics(data);
    } catch (error) {
      console.error('Failed to fetch metrics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading metrics...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Total Files</h3>
        <div className="text-3xl font-bold text-blue-600">
          {'{'}metrics?.totalFiles?.toLocaleString(){'}'}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Storage Used</h3>
        <div className="text-3xl font-bold text-green-600">
          {'{'}(metrics?.totalSize / 1024 / 1024 / 1024).toFixed(2){'}'} GB
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Monthly Cost</h3>
        <div className="text-3xl font-bold text-purple-600">
          ${'{'}(metrics?.totalSize / 1024 / 1024 / 1024 * 0.015).toFixed(2){'}'}
        </div>
        <div className="text-sm text-gray-500 mt-1">
          (Egress: $0.00)
        </div>
      </div>
    </div>
  );
}`}</code></pre>

          <h2>Conclusion</h2>
          <p>Implementing Cloudflare R2 with presigned URLs offers a powerful combination of security, performance, and cost-effectiveness. The zero egress fee model makes it especially attractive for applications with high download volumes or media-heavy content.</p>

          <div className="bg-green-50 p-6 rounded-lg my-6">
            <h3 className="text-green-900 font-semibold mb-3">🎯 Key Takeaways:</h3>
            <ul className="text-green-800 space-y-2">
              <li>✅ <strong>Cost Savings:</strong> Eliminate egress fees with R2's free data transfer</li>
              <li>✅ <strong>Security:</strong> Presigned URLs provide secure, time-limited access</li>
              <li>✅ <strong>Performance:</strong> Direct client-to-storage transfers reduce server load</li>
              <li>✅ <strong>Scalability:</strong> Handle millions of files without infrastructure concerns</li>
              <li>✅ <strong>S3 Compatibility:</strong> Easy migration from existing S3-based solutions</li>
            </ul>
          </div>

          <p>By following the implementation patterns and best practices outlined in this guide, you'll have a robust, secure, and cost-effective file storage solution that scales with your application's needs.</p>

          <p>Remember to monitor your usage, implement proper security measures, and regularly review your file management policies to maintain optimal performance and cost-efficiency.</p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="text-blue-900 font-semibold mb-2">🚀 Next Steps:</h4>
            <ul className="text-blue-800">
              <li>Set up your Cloudflare R2 bucket and credentials</li>
              <li>Implement the basic presigned URL endpoints</li>
              <li>Add file upload/download components to your frontend</li>
              <li>Implement security measures and rate limiting</li>
              <li>Set up monitoring and analytics</li>
              <li>Test thoroughly and deploy to production</li>
            </ul>
          </div>

          <p>Happy coding, and enjoy your zero egress fees! 🎉</p>
        </div>
      </article>
    </>
  );
}