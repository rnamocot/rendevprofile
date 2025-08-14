import Head from 'next/head';

export const blogPost = {
  id: 6,
  title: 'Building AI-Powered Web Applications: A Complete Developer Guide for 2025',
  slug: 'building-ai-powered-web-applications-complete-developer-guide-2025',
  excerpt: 'Learn how to integrate AI capabilities into your web applications using modern APIs, SDKs, and frameworks. Covers ChatGPT API, Claude AI, and custom AI models.',
  author: 'Renie Namocot',
  publishDate: '2025-08-06',
  lastModified: '2025-08-06',
  category: 'ai-development',
  tags: ['AI', 'Machine Learning', 'Web Development', 'OpenAI', 'Claude AI', 'JavaScript', 'API Integration'],
  featured: true,
  readTime: '22 min read',
  image: '/blog_placeholder.jpg',
  featuredImageUrl: '/blog_placeholder.jpg'
};

export default function BuildingAIPoweredWebApps() {
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
          <h2>Introduction to AI-Powered Web Development</h2>
          <p>Artificial Intelligence is revolutionizing web development, enabling developers to create more intelligent, responsive, and personalized user experiences. This comprehensive guide covers everything you need to know about integrating AI into your web applications.</p>
          
          <h3>Popular AI APIs and Services</h3>
          <h4>OpenAI API Integration</h4>
          <p>Integrate ChatGPT and GPT-4 into your applications:</p>
          <pre><code>{`import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateText(prompt) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4-turbo',
  });
  
  return completion.choices[0].message.content;
}`}</code></pre>
          
          <h4>Claude AI Integration</h4>
          <p>Using Anthropic's Claude AI for advanced reasoning:</p>
          <pre><code>{`import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function chatWithClaude(message) {
  const msg = await anthropic.messages.create({
    model: "claude-3-sonnet-20240229",
    max_tokens: 1000,
    messages: [{ role: "user", content: message }]
  });
  
  return msg.content[0].text;
}`}</code></pre>
          
          <h3>Building AI-Powered Features</h3>
          <h4>1. Intelligent Search</h4>
          <p>Implement semantic search using embeddings:</p>
          <pre><code>{`async function semanticSearch(query, documents) {
  // Generate embedding for query
  const queryEmbedding = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: query,
  });
  
  // Compare with document embeddings and return most similar
  const results = documents.map(doc => ({
    document: doc,
    similarity: cosineSimilarity(queryEmbedding.data[0].embedding, doc.embedding)
  })).sort((a, b) => b.similarity - a.similarity);
  
  return results.slice(0, 5);
}`}</code></pre>
          
          <h4>2. Content Generation</h4>
          <p>Create dynamic content based on user input:</p>
          <pre><code>{`async function generateBlogPost(topic, style) {
  const prompt = \`Write a blog post about \${topic} in a \${style} style. 
                 Include an introduction, main points, and conclusion.\`;
  
  const content = await generateText(prompt);
  return {
    title: extractTitle(content),
    body: content,
    generatedAt: new Date()
  };
}`}</code></pre>
          
          <h3>Real-time AI Integration</h3>
          <h4>Streaming Responses</h4>
          <p>Implement real-time AI responses for better UX:</p>
          <pre><code>{`async function* streamCompletion(prompt) {
  const stream = await openai.chat.completions.create({
    model: 'gpt-4-turbo',
    messages: [{ role: 'user', content: prompt }],
    stream: true,
  });

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content || '';
    if (content) {
      yield content;
    }
  }
}`}</code></pre>
          
          <h3>Frontend Integration</h3>
          <h4>React AI Chat Component</h4>
          <p>Build an interactive AI chat interface:</p>
          <pre><code>{`function AIChatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      
      const aiMessage = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: aiMessage.content }]);
    } catch (error) {
      console.error('Error:', error);
    }
    
    setInput('');
    setLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={\`message \${msg.role}\`}>
            {msg.content}
          </div>
        ))}
      </div>
      
      <form onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}`}</code></pre>
          
          <h3>Best Practices and Security</h3>
          <ul>
            <li><strong>API Key Security:</strong> Never expose API keys in frontend code</li>
            <li><strong>Rate Limiting:</strong> Implement proper rate limiting to control costs</li>
            <li><strong>Input Validation:</strong> Always validate and sanitize user inputs</li>
            <li><strong>Error Handling:</strong> Implement robust error handling for API failures</li>
            <li><strong>Caching:</strong> Cache responses to reduce API costs</li>
          </ul>
          
          <h3>Deployment Considerations</h3>
          <p>When deploying AI-powered applications:</p>
          <ul>
            <li>Use environment variables for API keys</li>
            <li>Monitor API usage and costs</li>
            <li>Implement fallback mechanisms</li>
            <li>Consider edge computing for reduced latency</li>
          </ul>
          
          <h3>Conclusion</h3>
          <p>AI-powered web applications are the future of user experience. By following these patterns and best practices, you can build intelligent applications that provide real value to your users while maintaining security and performance.</p>
        </div>
      </article>
    </>
  );
}