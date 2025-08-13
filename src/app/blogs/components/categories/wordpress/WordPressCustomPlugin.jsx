import Head from 'next/head';

export const blogPost = {
  id: 3,
  title: 'WordPress Custom Plugin Development Best Practices',
  slug: 'wordpress-custom-plugin-development-best-practices',
  excerpt: 'Master WordPress plugin development with security best practices, proper hooks usage, and code organization techniques.',
  author: 'Renie Namocot',
  publishDate: '2025-07-30',
  lastModified: '2025-07-30',
  category: 'wordpress',
  tags: ['WordPress', 'PHP', 'Plugin Development', 'Security'],
  featured: false,
  readTime: '15 min read',
  image: '/blog_placeholder.jpg',
  featuredImageUrl: '/blog_placeholder.jpg'
};

export default function WordPressCustomPlugin() {
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
          <h2>WordPress Plugin Development Fundamentals</h2>
          <p>Creating custom WordPress plugins requires understanding WordPress architecture, security best practices, and proper coding standards.</p>
          
          <h3>Plugin Structure</h3>
          <p>A well-organized plugin should follow this structure:</p>
          <pre><code>{`my-plugin/
  my-plugin.php
  includes/
     class-main.php
     class-admin.php
  assets/
     css/
     js/
  languages/
  readme.txt`}</code></pre>
          
          <h3>Security Best Practices</h3>
          <ul>
            <li><strong>Sanitize Input:</strong> Always sanitize user input using WordPress functions</li>
            <li><strong>Validate Data:</strong> Validate all data before processing</li>
            <li><strong>Escape Output:</strong> Escape data when outputting to prevent XSS</li>
            <li><strong>Use Nonces:</strong> Implement nonces for form submissions</li>
          </ul>
          
          <h3>WordPress Hooks</h3>
          <p>Proper use of actions and filters is crucial for plugin development:</p>
          <pre><code>{`// Action Hook
add_action('init', 'my_plugin_init');

// Filter Hook  
add_filter('the_content', 'my_plugin_modify_content');`}</code></pre>
          
          <h3>Database Operations</h3>
          <p>Always use WordPress database API for secure database operations:</p>
          <pre><code>{`global $wpdb;
$results = $wpdb->get_results(
  $wpdb->prepare("SELECT * FROM {$wpdb->posts} WHERE ID = %d", $id)
);`}</code></pre>
          
          <h3>Plugin Activation and Deactivation</h3>
          <p>Handle plugin lifecycle events properly:</p>
          <pre><code>{`register_activation_hook(__FILE__, 'my_plugin_activate');
register_deactivation_hook(__FILE__, 'my_plugin_deactivate');`}</code></pre>
        </div>
      </article>
    </>
  );
}