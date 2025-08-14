import Head from 'next/head';

export const blogPost = {
  id: 5,
  title: 'Modern JavaScript ES2024 Features You Should Know',
  slug: 'modern-javascript-es2024-features-you-should-know',
  excerpt: 'Discover the latest JavaScript ES2024 features including new array methods, improved error handling, and enhanced async programming.',
  author: 'Renie Namocot',
  publishDate: '2025-07-28',
  lastModified: '2025-07-28',
  category: 'javascript',
  tags: ['JavaScript', 'ES2025', 'Web Development', 'Modern JS'],
  featured: true,
  readTime: '7 min read',
  image: '/blog_placeholder.jpg',
  featuredImageUrl: '/blog_placeholder.jpg'
};

export default function ModernJavaScriptES2024() {
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
          <h2>JavaScript ES2024 Overview</h2>
          <p>ES2024 brings exciting new features to JavaScript, enhancing developer productivity and code maintainability. Let's explore the most important additions.</p>
          
          <h3>Array Methods</h3>
          <h4>Array.prototype.toSorted()</h4>
          <p>Creates a new sorted array without modifying the original:</p>
          <pre><code>{`const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.toSorted(); // [1, 1, 3, 4, 5]
console.log(numbers); // [3, 1, 4, 1, 5] (unchanged)`}</code></pre>
          
          <h4>Array.prototype.toReversed()</h4>
          <p>Returns a new reversed array:</p>
          <pre><code>{`const arr = [1, 2, 3];
const reversed = arr.toReversed(); // [3, 2, 1]`}</code></pre>
          
          <h3>Object Methods</h3>
          <h4>Object.groupBy()</h4>
          <p>Group array elements by a specified key:</p>
          <pre><code>{`const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 }
];

const grouped = Object.groupBy(people, person => person.age);
// { 25: [{ name: 'Bob', age: 25 }], 30: [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }] }`}</code></pre>
          
          <h3>Promise Enhancements</h3>
          <h4>Promise.withResolvers()</h4>
          <p>Creates a promise with external resolve and reject functions:</p>
          <pre><code>{`const { promise, resolve, reject } = Promise.withResolvers();

// Use resolve/reject elsewhere in your code
setTimeout(() => resolve('Success!'), 1000);`}</code></pre>
          
          <h3>Improved Error Handling</h3>
          <h4>Error.cause</h4>
          <p>Chain errors with better context:</p>
          <pre><code>{`try {
  // some operation
} catch (originalError) {
  throw new Error('Operation failed', { cause: originalError });
}`}</code></pre>
          
          <h3>New RegExp Features</h3>
          <p>Enhanced regular expression capabilities for better pattern matching and string manipulation.</p>
          
          <h3>Temporal API Progress</h3>
          <p>The new Temporal API is making progress, offering better date and time handling than the legacy Date object.</p>
          
          <h3>Conclusion</h3>
          <p>These ES2024 features make JavaScript more powerful and developer-friendly. Start incorporating them into your projects to write cleaner, more maintainable code.</p>
        </div>
      </article>
    </>
  );
}