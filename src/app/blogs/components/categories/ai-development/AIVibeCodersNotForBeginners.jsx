import Head from 'next/head';

export const blogPost = {
  id: 23,
  title: 'Why AI Vibe Coders Aren\'t Suitable Without Programming Fundamentals',
  slug: 'why-ai-vibe-coders-not-suitable-without-programming-fundamentals',
  excerpt: 'Discover why relying on AI coding tools without understanding programming fundamentals can hinder your development career. Learn why solid foundations are essential before leveraging AI assistance effectively.',
  author: 'Renie Namocot',
  publishDate: '2025-10-09',
  lastModified: '2025-10-09',
  category: 'ai-development',
  tags: ['AI Coding Tools', 'Programming Fundamentals', 'Learning to Code', 'Software Development', 'AI Limitations', 'Developer Skills', 'Coding Education', 'Best Practices'],
  featured: true,
  readTime: '11 min read',
  image: '/blog_placeholder.jpg',
  featuredImageUrl: '/blog_placeholder.jpg'
};

export default function AIVibeCodersNotForBeginners() {
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
          <p>The rise of AI-powered coding assistants like GitHub Copilot, ChatGPT, and Cursor has created a new breed of developers - what some call "AI vibe coders." These are individuals who rely heavily on AI to generate code without truly understanding the underlying programming fundamentals. While AI tools are incredibly powerful and can accelerate development, <strong>using them without a solid foundation in programming fundamentals is like trying to build a house without understanding architecture or structural engineering.</strong></p>

          <p>In this comprehensive guide, I'll explain why jumping into AI-assisted coding without mastering the basics is a recipe for disaster, and why understanding programming fundamentals is more critical than ever in the AI era.</p>

          <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700 my-6">
            "AI doesn't replace the need to understand programming - it amplifies the consequences of not understanding it."
          </blockquote>

          <h2>What Are "AI Vibe Coders"?</h2>

          <h3>Defining the Phenomenon</h3>
          <p>"AI vibe coders" is a term that describes developers who rely almost exclusively on AI tools to write code without having a deep understanding of programming concepts, syntax, or best practices. They can get code that "works" from AI prompts, but they don't understand why it works or how to fix it when it breaks.</p>

          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-yellow-800 mb-4">Characteristics of AI Vibe Coders:</h4>
            <ul className="text-yellow-700 space-y-2">
              <li>• Copy-paste AI-generated code without understanding it</li>
              <li>• Struggle to debug when AI solutions don't work</li>
              <li>• Can't explain how their own code functions</li>
              <li>• Depend entirely on AI for even simple programming tasks</li>
              <li>• Lack understanding of data structures and algorithms</li>
              <li>• Unable to write code from scratch without AI assistance</li>
            </ul>
          </div>

          <h3>The Dangerous Appeal</h3>
          <p>The allure of AI coding tools is understandable. They promise to:</p>
          <ul>
            <li>Speed up development dramatically</li>
            <li>Lower the barrier to entry for programming</li>
            <li>Handle complex coding tasks with simple prompts</li>
            <li>Generate boilerplate code instantly</li>
          </ul>

          <p>However, without fundamentals, these tools become crutches that ultimately limit your growth and effectiveness as a developer.</p>

          <h2>Why Programming Fundamentals Matter</h2>

          <h3>1. Understanding the "Why" Behind the Code</h3>
          <p>AI can generate code, but it can't teach you why certain approaches are better than others. Understanding fundamentals allows you to:</p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-blue-800 mb-4">Critical Understanding That AI Can't Replace:</h4>
            <ul className="text-blue-700 space-y-2">
              <li><strong>Time Complexity:</strong> Why is this algorithm O(n²) and how does that affect performance?</li>
              <li><strong>Memory Management:</strong> When does memory get allocated and released?</li>
              <li><strong>Data Structures:</strong> Why use a hash map versus an array in this scenario?</li>
              <li><strong>Design Patterns:</strong> Which architectural pattern fits this problem best?</li>
              <li><strong>Security Implications:</strong> What vulnerabilities does this code introduce?</li>
            </ul>
          </div>

          <pre><code>{`// AI might generate this:
function findUser(users, id) {
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (users[i].id === id) {
        return users[i];
      }
    }
  }
}

// But without fundamentals, you won't realize:
// 1. This is O(n²) - unnecessarily inefficient
// 2. The inner loop serves no purpose
// 3. A simple O(n) solution or hash map would be better

// The correct approach:
function findUser(users, id) {
  return users.find(user => user.id === id); // O(n)
}

// Or even better with a hash map:
const userMap = new Map(users.map(u => [u.id, u]));
function findUser(userMap, id) {
  return userMap.get(id); // O(1)
}`}</code></pre>

          <h3>2. Debugging and Problem-Solving Skills</h3>
          <p>When AI-generated code doesn't work (and it often doesn't work perfectly), you need fundamental knowledge to debug effectively.</p>

          <div className="bg-red-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-red-800 mb-4">Common Debugging Scenarios Without Fundamentals:</h4>
            <ul className="text-red-700 space-y-2">
              <li>• Cannot identify why code throws unexpected errors</li>
              <li>• Don't understand stack traces or error messages</li>
              <li>• Unable to trace execution flow through the code</li>
              <li>• Can't identify edge cases or boundary conditions</li>
              <li>• Struggle to use debugging tools effectively</li>
              <li>• Keep asking AI to "fix" code without learning from mistakes</li>
            </ul>
          </div>

          <pre><code>{`// AI generates this code:
async function fetchUserData(userId) {
  const response = await fetch(\`/api/users/\${userId}\`);
  const data = response.json();
  return data.name;
}

// Without fundamentals, you won't catch:
// 1. Missing 'await' before response.json()
// 2. No error handling for failed requests
// 3. No check if data.name exists
// 4. Potential security issue with userId injection

// Proper implementation requires understanding:
async function fetchUserData(userId) {
  try {
    // Validate and sanitize userId
    const sanitizedId = encodeURIComponent(userId);

    const response = await fetch(\`/api/users/\${sanitizedId}\`);

    // Check if request was successful
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const data = await response.json(); // Proper await

    // Check if data and name exist
    if (!data || !data.name) {
      throw new Error('Invalid user data');
    }

    return data.name;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Re-throw for caller to handle
  }
}`}</code></pre>

          <h3>3. Code Review and Quality Assurance</h3>
          <p>Professional development requires the ability to review code - both your own and others'. Without fundamentals, you cannot:</p>

          <ul>
            <li>Identify code smells and anti-patterns</li>
            <li>Assess code quality and maintainability</li>
            <li>Recognize security vulnerabilities</li>
            <li>Suggest meaningful improvements</li>
            <li>Validate that AI-generated code meets requirements</li>
          </ul>

          <h3>4. Architecture and System Design</h3>
          <p>AI tools excel at generating code snippets, but they struggle with high-level system architecture decisions that require understanding of:</p>

          <div className="bg-green-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-green-800 mb-4">Architectural Decisions Requiring Fundamentals:</h4>
            <ul className="text-green-700 space-y-2">
              <li><strong>Scalability:</strong> How will this system handle millions of users?</li>
              <li><strong>Performance:</strong> What are the bottlenecks and how do we optimize?</li>
              <li><strong>Database Design:</strong> Relational vs NoSQL, normalization strategies</li>
              <li><strong>API Design:</strong> REST vs GraphQL, versioning strategies</li>
              <li><strong>Caching Strategies:</strong> When and where to implement caching</li>
              <li><strong>Security Architecture:</strong> Authentication, authorization, encryption</li>
            </ul>
          </div>

          <h2>The Critical Fundamentals You Must Master</h2>

          <h3>1. Data Types and Variables</h3>
          <p>Understanding how data is stored, manipulated, and passed around in your programs is fundamental to writing correct code.</p>

          <pre><code>{`// Without understanding primitive vs reference types:
let num1 = 5;
let num2 = num1;
num2 = 10;
console.log(num1); // 5 - primitives are copied by value

let obj1 = { count: 5 };
let obj2 = obj1;
obj2.count = 10;
console.log(obj1.count); // 10 - objects are copied by reference

// This understanding affects:
// - Function parameters
// - State management in frameworks
// - Memory usage
// - Debugging unexpected behavior`}</code></pre>

          <h3>2. Control Flow and Logic</h3>
          <p>Conditions, loops, and program flow control are the building blocks of all algorithms.</p>

          <div className="bg-purple-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-purple-800 mb-4">Essential Control Flow Concepts:</h4>
            <ul className="text-purple-700 space-y-2">
              <li>• Conditional statements (if/else, switch)</li>
              <li>• Loop types and when to use each (for, while, do-while)</li>
              <li>• Break and continue statements</li>
              <li>• Short-circuit evaluation</li>
              <li>• Ternary operators and their appropriate use</li>
            </ul>
          </div>

          <h3>3. Functions and Scope</h3>
          <p>Functions are the core of code organization and reusability. Understanding scope is critical for avoiding bugs.</p>

          <pre><code>{`// Without understanding scope and closures:
function createCounter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.count); // undefined - count is private

// This concept enables:
// - Module patterns
// - Data privacy
// - Callback functions
// - Event handlers`}</code></pre>

          <h3>4. Data Structures</h3>
          <p>Knowing which data structure to use dramatically affects code efficiency and clarity.</p>

          <div className="bg-orange-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-orange-800 mb-4">Essential Data Structures:</h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-orange-800">Arrays</h5>
                <p className="text-orange-700">Ordered collections, fast access by index, slower insertion/deletion</p>
              </div>
              <div>
                <h5 className="font-medium text-orange-800">Objects/Hash Maps</h5>
                <p className="text-orange-700">Key-value pairs, fast lookup, insertion, and deletion</p>
              </div>
              <div>
                <h5 className="font-medium text-orange-800">Sets</h5>
                <p className="text-orange-700">Unique values, fast membership testing</p>
              </div>
              <div>
                <h5 className="font-medium text-orange-800">Stacks and Queues</h5>
                <p className="text-orange-700">LIFO and FIFO operations, essential for many algorithms</p>
              </div>
            </div>
          </div>

          <h3>5. Algorithms and Complexity</h3>
          <p>Understanding algorithmic complexity helps you write efficient code and avoid performance pitfalls.</p>

          <pre><code>{`// Without understanding Big O notation:

// O(n²) - BAD for large datasets
function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

// O(n) - BETTER approach using Set
function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

// For 10,000 items:
// O(n²): ~100,000,000 operations
// O(n): ~10,000 operations
// That's a 10,000x difference!`}</code></pre>

          <h3>6. Error Handling</h3>
          <p>Proper error handling is what separates production-ready code from prototype code.</p>

          <div className="bg-red-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-red-800 mb-4">Error Handling Fundamentals:</h4>
            <ul className="text-red-700 space-y-2">
              <li>• Try-catch blocks and when to use them</li>
              <li>• Error propagation and re-throwing</li>
              <li>• Custom error types for better debugging</li>
              <li>• Graceful degradation strategies</li>
              <li>• Input validation and sanitization</li>
              <li>• Logging errors for debugging and monitoring</li>
            </ul>
          </div>

          <h2>Real-World Consequences of Skipping Fundamentals</h2>

          <h3>Case Study 1: The Performance Disaster</h3>
          <p>A developer used AI to generate a user search feature. The AI produced nested loops (O(n²)) that worked fine in testing with 50 users. In production with 50,000 users, the application became unusable, taking minutes to search.</p>

          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-yellow-800 mb-4">What Went Wrong:</h4>
            <ul className="text-yellow-700 space-y-2">
              <li>• No understanding of algorithmic complexity</li>
              <li>• Didn't test with realistic data volumes</li>
              <li>• Couldn't identify the performance bottleneck</li>
              <li>• Unable to optimize the algorithm without AI help</li>
            </ul>
          </div>

          <h3>Case Study 2: The Security Breach</h3>
          <p>An AI vibe coder built an authentication system using AI-generated code. The code looked correct but had SQL injection vulnerabilities and weak password hashing. The application was compromised within weeks of launch.</p>

          <div className="bg-red-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-red-800 mb-4">Critical Mistakes:</h4>
            <ul className="text-red-700 space-y-2">
              <li>• No understanding of SQL injection or prepared statements</li>
              <li>• Didn't recognize insecure password storage</li>
              <li>• Lacked knowledge of common security vulnerabilities</li>
              <li>• Couldn't perform proper security review of generated code</li>
            </ul>
          </div>

          <h3>Case Study 3: The Unmaintainable Codebase</h3>
          <p>A team relied heavily on AI to generate features quickly. Six months later, the codebase was a tangled mess of inconsistent patterns, duplicated logic, and no one on the team understood how critical parts worked.</p>

          <div className="bg-orange-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-orange-800 mb-4">Long-term Issues:</h4>
            <ul className="text-orange-700 space-y-2">
              <li>• No consistent architecture or design patterns</li>
              <li>• Duplicate code everywhere (DRY principle violated)</li>
              <li>• Difficult to onboard new team members</li>
              <li>• Every change risked breaking existing functionality</li>
              <li>• Technical debt spiraled out of control</li>
            </ul>
          </div>

          <h2>How to Learn Fundamentals Effectively</h2>

          <h3>1. Start with Core Concepts</h3>
          <p>Build a strong foundation before diving into frameworks or AI tools.</p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-blue-800 mb-4">Recommended Learning Path:</h4>
            <ol className="text-blue-700 space-y-2">
              <li><strong>1. Variables and Data Types:</strong> Understand how data is stored and manipulated</li>
              <li><strong>2. Control Flow:</strong> Master conditionals and loops</li>
              <li><strong>3. Functions:</strong> Learn to write reusable, modular code</li>
              <li><strong>4. Data Structures:</strong> Arrays, objects, and more complex structures</li>
              <li><strong>5. Algorithms:</strong> Sorting, searching, and problem-solving patterns</li>
              <li><strong>6. Object-Oriented Programming:</strong> Classes, inheritance, encapsulation</li>
              <li><strong>7. Asynchronous Programming:</strong> Promises, async/await, callbacks</li>
            </ol>
          </div>

          <h3>2. Practice Problem-Solving</h3>
          <p>Solve coding challenges without AI assistance to build problem-solving muscles.</p>

          <div className="bg-green-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-green-800 mb-4">Practice Platforms:</h4>
            <ul className="text-green-700 space-y-2">
              <li><strong>LeetCode:</strong> Algorithm and data structure problems</li>
              <li><strong>HackerRank:</strong> Skill-specific challenges and certifications</li>
              <li><strong>Codewars:</strong> Community-driven coding challenges</li>
              <li><strong>Exercism:</strong> Mentor-guided practice problems</li>
              <li><strong>Project Euler:</strong> Mathematical programming challenges</li>
            </ul>
          </div>

          <h3>3. Build Projects from Scratch</h3>
          <p>Create complete applications without relying on AI, then refactor using AI to see the differences.</p>

          <pre><code>{`// Learning approach:
// 1. Build a simple todo app WITHOUT AI
//    - Understand state management
//    - Handle user input
//    - Implement CRUD operations
//    - Deal with edge cases

// 2. Then rebuild it WITH AI assistance
//    - Compare your solution to AI's
//    - Understand why AI chose different approaches
//    - Learn new patterns and techniques

// 3. Critique the AI solution
//    - Is it more efficient?
//    - Is it more maintainable?
//    - Does it handle edge cases better?
//    - What trade-offs were made?`}</code></pre>

          <h3>4. Read and Understand Others' Code</h3>
          <p>Study well-written open-source projects to learn best practices and patterns.</p>

          <div className="bg-purple-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-purple-800 mb-4">Code Reading Strategy:</h4>
            <ul className="text-purple-700 space-y-2">
              <li>• Start with small, focused libraries</li>
              <li>• Trace execution flow through the code</li>
              <li>• Identify design patterns being used</li>
              <li>• Note clever solutions to common problems</li>
              <li>• Ask yourself why decisions were made</li>
            </ul>
          </div>

          <h2>The Right Way to Use AI Tools</h2>

          <h3>AI as a Learning Aid, Not a Replacement</h3>
          <p>Once you have fundamentals, AI becomes an incredibly powerful tool. Here's how to use it effectively:</p>

          <div className="bg-green-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-green-800 mb-4">Effective AI Usage Patterns:</h4>
            <ul className="text-green-700 space-y-2">
              <li><strong>Code Generation:</strong> Use AI for boilerplate, then customize and optimize</li>
              <li><strong>Learning:</strong> Ask AI to explain complex concepts or code</li>
              <li><strong>Debugging:</strong> Get hints, but debug yourself to understand the issue</li>
              <li><strong>Code Review:</strong> Use AI to spot potential issues, verify with your knowledge</li>
              <li><strong>Refactoring:</strong> Get suggestions, evaluate them critically</li>
              <li><strong>Documentation:</strong> Generate docs, then refine for accuracy</li>
            </ul>
          </div>

          <pre><code>{`// WRONG: Blind AI usage
// "AI, create a function to sort users by age"
// [Copy paste without understanding]

// RIGHT: Informed AI usage
// 1. First, write it yourself:
function sortUsersByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

// 2. Then ask AI: "How can I optimize this sorting function?"
// 3. Evaluate AI suggestions:
//    - Does it handle edge cases (null ages)?
//    - Is the sort stable if needed?
//    - Does it mutate the original array?
//    - What's the time complexity?

// 4. Implement improvements you understand:
function sortUsersByAge(users) {
  return [...users].sort((a, b) => {
    // Handle edge cases
    if (a.age === null) return 1;
    if (b.age === null) return -1;
    return a.age - b.age;
  });
}`}</code></pre>

          <h3>Verification and Validation</h3>
          <p>Always verify AI-generated code against your fundamental knowledge:</p>

          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-yellow-800 mb-4">Code Review Checklist:</h4>
            <ul className="text-yellow-700 space-y-2">
              <li>✅ Do I understand every line of this code?</li>
              <li>✅ Are there any security vulnerabilities?</li>
              <li>✅ What's the time and space complexity?</li>
              <li>✅ Are all edge cases handled?</li>
              <li>✅ Is error handling comprehensive?</li>
              <li>✅ Does it follow best practices and patterns?</li>
              <li>✅ Is it maintainable and readable?</li>
              <li>✅ Are there adequate tests?</li>
            </ul>
          </div>

          <h2>Career Impact: Why Employers Care</h2>

          <h3>What Hiring Managers Look For</h3>
          <p>Technical interviews focus on fundamentals for good reason. Employers need developers who can:</p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-blue-800 mb-4">Critical Job Requirements:</h4>
            <ul className="text-blue-700 space-y-2">
              <li><strong>Solve Novel Problems:</strong> AI can't help in a whiteboard interview</li>
              <li><strong>Debug Complex Issues:</strong> Production bugs require deep understanding</li>
              <li><strong>Design Systems:</strong> Architecture decisions need expert judgment</li>
              <li><strong>Review Code:</strong> Must identify issues in teammates' code</li>
              <li><strong>Mentor Others:</strong> Can't teach what you don't understand</li>
              <li><strong>Make Trade-offs:</strong> Evaluate solutions critically</li>
            </ul>
          </div>

          <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700 my-6">
            "We can teach someone to use AI tools in a week. We can't teach fundamental programming skills that quickly. That's why we hire for fundamentals and train on tools."
            <footer className="text-sm text-gray-500 mt-2">- Senior Engineering Manager, Tech Company</footer>
          </blockquote>

          <h3>The Interview Reality</h3>
          <p>Most technical interviews test fundamental knowledge:</p>

          <pre><code>{`// Typical interview question:
// "Implement a function to find the longest substring without repeating characters"

// Without fundamentals: Stuck
// With fundamentals: Multiple approaches

// Brute force (O(n³)):
function lengthOfLongestSubstring(s) {
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (hasUniqueChars(s.substring(i, j + 1))) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }

  return maxLength;
}

// Optimized (O(n)) using sliding window:
function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Interviewers want to see:
// 1. Understanding of the problem
// 2. Multiple solution approaches
// 3. Complexity analysis
// 4. Optimization thinking
// 5. Clean, readable code`}</code></pre>

          <h2>Action Plan: Building Your Foundation</h2>

          <h3>30-Day Fundamentals Challenge</h3>

          <div className="bg-indigo-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-indigo-800 mb-4">Week 1: Data and Control</h4>
            <ul className="text-indigo-700 space-y-2">
              <li>• Day 1-2: Variables, data types, and operators</li>
              <li>• Day 3-4: Conditionals and comparison operators</li>
              <li>• Day 5-7: Loops (for, while, do-while) and practice problems</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-green-800 mb-4">Week 2: Functions and Scope</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Day 8-9: Function basics and parameters</li>
              <li>• Day 10-11: Scope, closures, and callbacks</li>
              <li>• Day 12-14: Higher-order functions and practice</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-orange-800 mb-4">Week 3: Data Structures</h4>
            <ul className="text-orange-700 space-y-2">
              <li>• Day 15-16: Arrays and array methods</li>
              <li>• Day 17-18: Objects and hash maps</li>
              <li>• Day 19-21: Sets, stacks, queues, and practice</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-purple-800 mb-4">Week 4: Algorithms and Projects</h4>
            <ul className="text-purple-700 space-y-2">
              <li>• Day 22-23: Searching and sorting algorithms</li>
              <li>• Day 24-25: Recursion and dynamic programming intro</li>
              <li>• Day 26-30: Build a project using all concepts learned</li>
            </ul>
          </div>

          <h3>Learning Resources</h3>
          <div className="bg-gray-100 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Recommended Learning Platforms:</h4>
            <ul className="space-y-2">
              <li><strong>freeCodeCamp:</strong> Comprehensive free curriculum</li>
              <li><strong>JavaScript.info:</strong> In-depth JavaScript fundamentals</li>
              <li><strong>Eloquent JavaScript (book):</strong> Deep dive into programming concepts</li>
              <li><strong>CS50 (Harvard):</strong> Computer science fundamentals</li>
              <li><strong>The Odin Project:</strong> Full-stack development path</li>
            </ul>
          </div>

          <h2>Conclusion</h2>
          <p>AI coding tools are revolutionary and will continue to transform software development. However, they are tools that amplify your existing skills - they cannot replace fundamental knowledge. Just as a calculator doesn't eliminate the need to understand mathematics, AI coding assistants don't eliminate the need to understand programming.</p>

          <p><strong>The most successful developers in the AI era will be those who combine deep fundamental knowledge with the effective use of AI tools.</strong> They'll understand why AI suggests certain solutions, when to accept those suggestions, and when to override them with better approaches.</p>

          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h3 className="text-blue-800 font-semibold mb-4">Key Takeaways:</h3>
            <ul className="text-blue-700 space-y-2">
              <li>✅ <strong>Fundamentals are non-negotiable</strong> - They're the foundation of your career</li>
              <li>✅ <strong>AI amplifies knowledge</strong> - It makes good developers great, not beginners professional</li>
              <li>✅ <strong>Understanding beats memorization</strong> - Know why, not just how</li>
              <li>✅ <strong>Debug with confidence</strong> - Fundamentals enable independent problem-solving</li>
              <li>✅ <strong>Build career resilience</strong> - Tools change, fundamentals remain</li>
              <li>✅ <strong>Quality over speed</strong> - Fast code that's broken or insecure is worse than no code</li>
            </ul>
          </div>

          <p>Don't fall into the trap of being an "AI vibe coder." Instead, invest time in mastering programming fundamentals, then leverage AI to accelerate your development and expand what's possible. Your future self - and your career - will thank you.</p>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-6">
            "Learn the fundamentals deeply. Use AI wisely. Build things that matter. That's the path to becoming a exceptional developer in the AI age."
          </blockquote>
        </div>
      </article>
    </>
  );
}
