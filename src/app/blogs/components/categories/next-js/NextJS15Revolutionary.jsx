import Head from 'next/head';

export const blogPost = {
  id: 1,
  title: 'Next.js 15: Revolutionary Features That Will Transform Your Development Workflow in 2025',
  slug: 'nextjs-15-revolutionary-features-2025-development-workflow',
  excerpt: 'Discover the game-changing features in Next.js 15 that are revolutionizing web development in 2025. From enhanced App Router to AI-powered optimizations.',
  author: 'Renie Namocot',
  publishDate: '2025-08-05',
  lastModified: '2025-08-05',
  category: 'next-js',
  tags: ['Next.js', 'React', 'Web Development', 'JavaScript'],
  featured: true,
  readTime: '8 min read',
  image: '/blog_placeholder.jpg',
  featuredImageUrl: '/blog_placeholder.jpg'
};

export default function NextJS15Revolutionary() {
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
          <h2>Introduction to Next.js 15</h2>
          <p>Next.js 15 brings exciting new features and improvements that make building modern web applications even more enjoyable. In this comprehensive guide, we'll explore the key features and best practices.</p>
          
          <h3>Key Features in Next.js 15</h3>
          <ul>
            <li><strong>App Router Stability:</strong> Enhanced stability and performance improvements</li>
            <li><strong>Turbopack:</strong> Faster development builds and hot reload</li>
            <li><strong>Server Actions:</strong> Simplified server-side operations</li>
            <li><strong>Improved TypeScript Support:</strong> Better type checking and inference</li>
          </ul>
          
          <h3>Getting Started</h3>
          <p>To create a new Next.js 15 project, use the following command:</p>
          <pre><code>npx create-next-app@latest my-app</code></pre>
          
          <h3>Best Practices</h3>
          <p>Here are some best practices when working with Next.js 15:</p>
          <ol>
            <li>Use the App Router for new projects</li>
            <li>Implement proper SEO with metadata API</li>
            <li>Optimize images with next/image component</li>
            <li>Use Server Components when possible</li>
          </ol>
          
          <h3>Conclusion</h3>
          <p>Next.js 15 continues to evolve as a powerful framework for building modern web applications. By following these practices, you'll be able to create fast, scalable, and maintainable applications.</p>
        </div>
      </article>
    </>
  );
}