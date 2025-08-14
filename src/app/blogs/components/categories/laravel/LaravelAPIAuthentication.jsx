import Head from 'next/head';

export const blogPost = {
  id: 4,
  title: 'Laravel API Development with Authentication',
  slug: 'laravel-api-development-with-authentication',
  excerpt: 'Build secure REST APIs with Laravel using Sanctum for authentication, implementing best practices for API design and security.',
  author: 'Renie Namocot',
  publishDate: '2025-07-26',
  lastModified: '2025-07-26',
  category: 'laravel',
  tags: ['Laravel', 'PHP', 'API', 'Authentication', 'Sanctum'],
  featured: false,
  readTime: '10 min read',
  image: '/blog_placeholder.jpg',
  featuredImageUrl: '/blog_placeholder.jpg'
};

export default function LaravelAPIAuthentication() {
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
          <h2>Building RESTful APIs with Laravel</h2>
          <p>Laravel provides a robust framework for building secure and scalable REST APIs. In this guide, we'll explore how to create APIs with proper authentication using Laravel Sanctum.</p>
          
          <h3>Setting Up Laravel Sanctum</h3>
          <p>First, install and configure Laravel Sanctum for API authentication:</p>
          <pre><code>{`composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\\Sanctum\\SanctumServiceProvider"
php artisan migrate`}</code></pre>
          
          <h3>API Route Structure</h3>
          <p>Organize your API routes in routes/api.php:</p>
          <pre><code>{`Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::apiResource('posts', PostController::class);
});`}</code></pre>
          
          <h3>Authentication Controller</h3>
          <p>Create secure authentication endpoints:</p>
          <pre><code>{`public function login(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if (Auth::attempt($request->only('email', 'password'))) {
        $user = Auth::user();
        $token = $user->createToken('API Token')->plainTextToken;
        
        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }
    
    return response()->json(['message' => 'Invalid credentials'], 401);
}`}</code></pre>
          
          <h3>API Resources</h3>
          <p>Use Laravel API Resources for consistent data formatting:</p>
          <pre><code>{`php artisan make:resource PostResource

class PostResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'content' => $this->content,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}`}</code></pre>
          
          <h3>Rate Limiting</h3>
          <p>Implement rate limiting to protect your API:</p>
          <pre><code>{`Route::middleware(['throttle:60,1'])->group(function () {
    // Your API routes here
});`}</code></pre>
        </div>
      </article>
    </>
  );
}