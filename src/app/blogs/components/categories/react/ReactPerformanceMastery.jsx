import Head from 'next/head';

export const blogPost = {
  id: 2,
  title: 'React Performance Mastery: Advanced Optimization Techniques for 2025 Applications',
  slug: 'react-performance-mastery-advanced-optimization-techniques-2025',
  excerpt: 'Master cutting-edge React performance optimization techniques for 2025. Includes Server Components, Concurrent Features, and AI-powered performance monitoring.',
  author: 'Renie Namocot',
  publishDate: '2025-08-02',
  lastModified: '2025-08-02',
  category: 'react',
  tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
  featured: true,
  readTime: '12 min read',
  image: '/blog_placeholder.jpg',
  featuredImageUrl: '/blog_placeholder.jpg'
};

export default function ReactPerformanceMastery() {
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
          <h2>Why Performance Matters</h2>
          <p>React application performance directly impacts user experience and business metrics. Slow applications lead to higher bounce rates and lower user engagement.</p>
          
          <h3>Performance Optimization Techniques</h3>
          <h4>1. React.memo for Component Memoization</h4>
          <p>Prevent unnecessary re-renders by wrapping components with React.memo:</p>
          <pre><code>{`const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{data.map(item => <Item key={item.id} {...item} />)}</div>;
});`}</code></pre>
          
          <h4>2. useMemo and useCallback</h4>
          <p>Optimize expensive calculations and function references:</p>
          <pre><code>{`const expensiveValue = useMemo(() => computeExpensiveValue(props), [props]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);`}</code></pre>
          
          <h4>3. Code Splitting with React.lazy</h4>
          <p>Implement lazy loading for route-based code splitting:</p>
          <pre><code>{`const LazyComponent = React.lazy(() => import('./LazyComponent'));`}</code></pre>
          
          <h3>Bundle Analysis</h3>
          <p>Use tools like webpack-bundle-analyzer to identify large dependencies and optimize your bundle size.</p>
          
          <h3>Monitoring Performance</h3>
          <p>Implement performance monitoring using React DevTools Profiler and browser performance APIs.</p>
        </div>
      </article>
    </>
  );
}