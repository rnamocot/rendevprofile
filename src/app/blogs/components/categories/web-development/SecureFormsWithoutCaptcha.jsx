import Head from 'next/head';

export const blogPost = {
  id: 11,
  title: 'How to Secure Forms Without Using Captcha and Anti-Spam Plugins',
  slug: 'how-to-secure-forms-without-captcha-anti-spam-plugins',
  excerpt: 'Learn effective techniques to protect your web forms from spam and malicious submissions without relying on captcha or third-party plugins. Discover honeypot fields, rate limiting, and other developer-friendly methods.',
  author: 'Renie Namocot',
  publishDate: '2025-08-13',
  lastModified: '2025-08-13',
  category: 'web-development',
  tags: ['Form Security', 'Web Development', 'JavaScript', 'PHP', 'Anti-Spam', 'Security'],
  featured: true,
  readTime: '15 min read',
  image: '/blog_placeholder.jpg',
  featuredImageUrl: '/blog_placeholder.jpg'
};

export default function SecureFormsWithoutCaptcha() {
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
          <p>While CAPTCHA and anti-spam plugins are popular solutions for form protection, they often create friction for legitimate users and may not be accessible to everyone. In this comprehensive guide, we'll explore effective alternative methods to secure your forms without compromising user experience.</p>

          <h2>Why Avoid CAPTCHA and Plugins?</h2>
          <h3>Problems with CAPTCHA:</h3>
          <ul>
            <li><strong>User Experience:</strong> Adds friction and can frustrate legitimate users</li>
            <li><strong>Accessibility Issues:</strong> Difficult for users with disabilities</li>
            <li><strong>Mobile Challenges:</strong> Often harder to complete on mobile devices</li>
            <li><strong>Bot Evolution:</strong> Advanced bots can now solve many CAPTCHAs</li>
            <li><strong>Privacy Concerns:</strong> Some CAPTCHA services track user data</li>
          </ul>

          <h3>Plugin Dependencies:</h3>
          <ul>
            <li><strong>Performance Impact:</strong> Additional scripts and database queries</li>
            <li><strong>Maintenance Overhead:</strong> Regular updates and compatibility issues</li>
            <li><strong>Third-party Risks:</strong> Dependency on external services</li>
            <li><strong>Cost:</strong> Premium plugins often require subscriptions</li>
          </ul>

          <h2>Effective Alternative Methods</h2>

          <h3>1. Honeypot Fields</h3>
          <p>The honeypot technique involves adding hidden fields that should never be filled by human users but are attractive to bots.</p>

          <h4>HTML Implementation:</h4>
          <pre><code>{`<!-- Honeypot field (hidden from users) -->
<div style="position: absolute; left: -9999px;">
  <input type="text" name="website" tabindex="-1" autocomplete="off">
</div>

<!-- Alternative CSS approach -->
<div class="honeypot">
  <label for="url">Website (leave blank):</label>
  <input type="text" id="url" name="url" autocomplete="off">
</div>

<style>
.honeypot {
  position: absolute !important;
  left: -9999px !important;
  top: -9999px !important;
}
</style>`}</code></pre>

          <h4>Server-side Validation (PHP):</h4>
          <pre><code>{`<?php
function validateHoneypot($honeypotField) {
    // If honeypot field has any value, it's likely a bot
    if (!empty($_POST[$honeypotField])) {
        return false; // Reject submission
    }
    return true; // Valid submission
}

// Usage
if (!validateHoneypot('website')) {
    // Log the attempt and reject
    error_log('Spam detected via honeypot: ' . $_SERVER['REMOTE_ADDR']);
    http_response_code(422);
    exit('Invalid submission');
}
?>`}</code></pre>

          <h4>JavaScript Enhancement:</h4>
          <pre><code>{`// Add multiple honeypot fields dynamically
function addHoneypotFields() {
    const form = document.querySelector('#contact-form');
    const honeypotFields = ['website', 'homepage', 'url'];
    
    honeypotFields.forEach(fieldName => {
        const honeypot = document.createElement('input');
        honeypot.type = 'text';
        honeypot.name = fieldName;
        honeypot.style.position = 'absolute';
        honeypot.style.left = '-9999px';
        honeypot.tabIndex = -1;
        honeypot.autocomplete = 'off';
        
        form.appendChild(honeypot);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', addHoneypotFields);`}</code></pre>

          <h3>2. Time-based Validation</h3>
          <p>Implement minimum and maximum time limits for form completion to catch bots that submit too quickly or take unusually long.</p>

          <h4>Implementation:</h4>
          <pre><code>{`// Add timestamp when form loads
<input type="hidden" name="form_start_time" value="<?php echo time(); ?>">

<?php
function validateTimestamp($startTime, $minTime = 3, $maxTime = 3600) {
    $currentTime = time();
    $timeDiff = $currentTime - $startTime;
    
    // Too fast (likely bot)
    if ($timeDiff < $minTime) {
        return false;
    }
    
    // Too slow (possible abandoned session)
    if ($timeDiff > $maxTime) {
        return false;
    }
    
    return true;
}

// Usage
$startTime = intval($_POST['form_start_time']);
if (!validateTimestamp($startTime)) {
    error_log('Suspicious timing detected: ' . $_SERVER['REMOTE_ADDR']);
    exit('Please try again');
}
?>`}</code></pre>

          <h3>3. Rate Limiting by IP Address</h3>
          <p>Limit the number of submissions per IP address within a specific time frame.</p>

          <h4>Simple File-based Rate Limiting:</h4>
          <pre><code>{`<?php
function checkRateLimit($ip, $maxAttempts = 3, $timeWindow = 300) {
    $rateLimitFile = 'rate_limits.json';
    $rateLimits = [];
    
    // Load existing rate limits
    if (file_exists($rateLimitFile)) {
        $rateLimits = json_decode(file_get_contents($rateLimitFile), true);
    }
    
    // Clean old entries
    $currentTime = time();
    foreach ($rateLimits as $limitIp => $data) {
        if ($currentTime - $data['first_attempt'] > $timeWindow) {
            unset($rateLimits[$limitIp]);
        }
    }
    
    // Check current IP
    if (isset($rateLimits[$ip])) {
        if ($rateLimits[$ip]['attempts'] >= $maxAttempts) {
            return false; // Rate limit exceeded
        }
        $rateLimits[$ip]['attempts']++;
    } else {
        $rateLimits[$ip] = [
            'attempts' => 1,
            'first_attempt' => $currentTime
        ];
    }
    
    // Save updated rate limits
    file_put_contents($rateLimitFile, json_encode($rateLimits));
    return true;
}

// Usage
$userIP = $_SERVER['REMOTE_ADDR'];
if (!checkRateLimit($userIP)) {
    http_response_code(429);
    exit('Too many requests. Please try again later.');
}
?>`}</code></pre>

          <h3>4. JavaScript Challenge</h3>
          <p>Require JavaScript to complete a simple mathematical calculation or puzzle that's easy for humans but requires script execution.</p>

          <pre><code>{`// Generate challenge on page load
function generateChallenge() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const answer = num1 + num2;
    
    // Display challenge to user
    document.getElementById('math-question').textContent = 
        \`What is \${num1} + \${num2}?\`;
    
    // Store encrypted answer
    document.getElementById('math-answer').value = btoa(answer.toString());
}

// Validate on form submission
function validateChallenge(event) {
    const userAnswer = document.getElementById('user-answer').value;
    const correctAnswer = atob(document.getElementById('math-answer').value);
    
    if (userAnswer !== correctAnswer) {
        event.preventDefault();
        alert('Please solve the math problem correctly.');
        return false;
    }
    return true;
}

// HTML
/*
<div>
    <label id="math-question"></label>
    <input type="number" id="user-answer" required>
    <input type="hidden" id="math-answer" name="challenge_response">
</div>
*/`}</code></pre>

          <h3>5. Behavioral Analysis</h3>
          <p>Track user interaction patterns to distinguish between human and bot behavior.</p>

          <pre><code>{`class BehaviorTracker {
    constructor() {
        this.interactions = {
            mouseMovements: 0,
            keystrokes: 0,
            focusEvents: 0,
            formFillTime: 0,
            startTime: Date.now()
        };
        this.initTracking();
    }
    
    initTracking() {
        // Track mouse movements
        document.addEventListener('mousemove', () => {
            this.interactions.mouseMovements++;
        });
        
        // Track keystrokes
        document.addEventListener('keydown', () => {
            this.interactions.keystrokes++;
        });
        
        // Track focus events
        document.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('focus', () => {
                this.interactions.focusEvents++;
            });
        });
    }
    
    isHumanBehavior() {
        const currentTime = Date.now();
        const totalTime = (currentTime - this.interactions.startTime) / 1000;
        
        // Human behavior indicators
        const hasMouseActivity = this.interactions.mouseMovements > 10;
        const hasKeyboardActivity = this.interactions.keystrokes > 5;
        const hasFocusEvents = this.interactions.focusEvents > 0;
        const reasonableTime = totalTime > 5 && totalTime < 1800; // 5 seconds to 30 minutes
        
        return hasMouseActivity && hasKeyboardActivity && hasFocusEvents && reasonableTime;
    }
    
    getTrackingData() {
        return {
            ...this.interactions,
            totalTime: (Date.now() - this.interactions.startTime) / 1000,
            isHuman: this.isHumanBehavior()
        };
    }
}

// Initialize tracker
const behaviorTracker = new BehaviorTracker();

// Validate before form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const behaviorData = behaviorTracker.getTrackingData();
    
    if (!behaviorData.isHuman) {
        e.preventDefault();
        console.log('Suspicious behavior detected:', behaviorData);
        // Handle suspicious submission
        return false;
    }
    
    // Add behavior data to form
    const behaviorInput = document.createElement('input');
    behaviorInput.type = 'hidden';
    behaviorInput.name = 'behavior_score';
    behaviorInput.value = JSON.stringify(behaviorData);
    this.appendChild(behaviorInput);
});`}</code></pre>

          <h3>6. Email Validation and Verification</h3>
          <p>Implement proper email validation and optional email verification to ensure legitimate submissions.</p>

          <pre><code>{`<?php
function validateEmail($email) {
    // Basic validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return false;
    }
    
    // Check for disposable email domains
    $disposableDomains = [
        '10minutemail.com', 'tempmail.org', 'guerrillamail.com',
        'mailinator.com', 'throwaway.email', 'temp-mail.org'
    ];
    
    $domain = substr(strrchr($email, "@"), 1);
    if (in_array($domain, $disposableDomains)) {
        return false;
    }
    
    // Optional: Check if domain has MX record
    if (!checkdnsrr($domain, 'MX')) {
        return false;
    }
    
    return true;
}

function sendVerificationEmail($email, $token) {
    $verificationUrl = "https://renienamocot.com/verify.php?token=" . $token;
    $subject = "Please verify your email";
    $message = "Click here to verify: " . $verificationUrl;
    
    return mail($email, $subject, $message);
}

// Usage
if (!validateEmail($_POST['email'])) {
    exit('Please provide a valid email address');
}
?>`}</code></pre>

          <h3>7. CSRF Protection</h3>
          <p>Implement Cross-Site Request Forgery protection using tokens.</p>

          <pre><code>{`<?php
session_start();

function generateCSRFToken() {
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function validateCSRFToken($token) {
    if (!isset($_SESSION['csrf_token'])) {
        return false;
    }
    return hash_equals($_SESSION['csrf_token'], $token);
}

// In your form
echo '<input type="hidden" name="csrf_token" value="' . generateCSRFToken() . '">';

// In your form handler
if (!validateCSRFToken($_POST['csrf_token'])) {
    exit('Security token mismatch');
}
?>`}</code></pre>

          <h3>8. Content Analysis</h3>
          <p>Analyze form content for spam patterns and suspicious keywords.</p>

          <pre><code>{`<?php
function analyzeContent($text) {
    $suspiciousPatterns = [
        '/\\b(buy now|click here|limited time|act now)\\b/i',
        '/\\b(viagra|cialis|casino|poker)\\b/i',
        '/(http|https):\\/\\/[^\\s]{2,}/i', // Multiple URLs
        '/\\b[A-Z]{5,}\\b/', // ALL CAPS words
        '/\\b(\\w+)\\s+\\1\\b/i', // Repeated words
    ];
    
    $spamScore = 0;
    $maxScore = count($suspiciousPatterns);
    
    foreach ($suspiciousPatterns as $pattern) {
        if (preg_match($pattern, $text)) {
            $spamScore++;
        }
    }
    
    // Check for excessive special characters
    $specialChars = preg_match_all('/[!@#$%^&*()_+{}|:<>?]/', $text);
    if ($specialChars > strlen($text) * 0.1) {
        $spamScore++;
        $maxScore++;
    }
    
    return [
        'spam_score' => $spamScore,
        'max_score' => $maxScore,
        'spam_probability' => $spamScore / $maxScore,
        'is_likely_spam' => ($spamScore / $maxScore) > 0.4
    ];
}

// Usage
$content = $_POST['message'];
$analysis = analyzeContent($content);

if ($analysis['is_likely_spam']) {
    error_log('Spam content detected: ' . $content);
    exit('Your message appears to be spam');
}
?>`}</code></pre>

          <h2>Complete Implementation Example</h2>
          <p>Here's a complete form implementation combining multiple techniques:</p>

          <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>Secure Contact Form</title>
    <style>
        .honeypot { position: absolute !important; left: -9999px !important; }
        .form-container { max-width: 500px; margin: 0 auto; padding: 20px; }
        .form-group { margin-bottom: 15px; }
        .form-control { width: 100%; padding: 10px; border: 1px solid #ddd; }
        .btn { background: #007bff; color: white; padding: 10px 20px; border: none; }
    </style>
</head>
<body>
    <div class="form-container">
        <form id="contact-form" method="POST" action="process.php">
            <!-- CSRF Token -->
            <input type="hidden" name="csrf_token" value="<?php echo generateCSRFToken(); ?>">
            
            <!-- Timestamp -->
            <input type="hidden" name="form_start_time" value="<?php echo time(); ?>">
            
            <!-- Honeypot Fields -->
            <div class="honeypot">
                <input type="text" name="website" tabindex="-1" autocomplete="off">
            </div>
            
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" class="form-control" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" class="form-control" required>
            </div>
            
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" class="form-control" rows="5" required></textarea>
            </div>
            
            <!-- Math Challenge -->
            <div class="form-group">
                <label id="math-question"></label>
                <input type="number" id="user-answer" name="math_answer" class="form-control" required>
                <input type="hidden" id="challenge-answer" name="challenge_answer">
            </div>
            
            <button type="submit" class="btn">Send Message</button>
        </form>
    </div>
    
    <script>
        // Initialize all security measures
        const behaviorTracker = new BehaviorTracker();
        
        // Generate math challenge
        function generateChallenge() {
            const num1 = Math.floor(Math.random() * 10) + 1;
            const num2 = Math.floor(Math.random() * 10) + 1;
            document.getElementById('math-question').textContent = \`What is \${num1} + \${num2}?\`;
            document.getElementById('challenge-answer').value = btoa((num1 + num2).toString());
        }
        
        // Form validation
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            // Validate math challenge
            const userAnswer = document.getElementById('user-answer').value;
            const correctAnswer = atob(document.getElementById('challenge-answer').value);
            
            if (userAnswer !== correctAnswer) {
                e.preventDefault();
                alert('Please solve the math problem correctly.');
                return false;
            }
            
            // Add behavior data
            const behaviorData = behaviorTracker.getTrackingData();
            if (!behaviorData.isHuman) {
                e.preventDefault();
                alert('Please interact with the form naturally.');
                return false;
            }
            
            const behaviorInput = document.createElement('input');
            behaviorInput.type = 'hidden';
            behaviorInput.name = 'behavior_data';
            behaviorInput.value = JSON.stringify(behaviorData);
            this.appendChild(behaviorInput);
        });
        
        // Initialize on page load
        document.addEventListener('DOMContentLoaded', generateChallenge);
    </script>
</body>
</html>`}</code></pre>

          <h2>Best Practices and Tips</h2>

          <h3>1. Layer Multiple Techniques</h3>
          <p>Don't rely on a single method. Combine 3-4 techniques for maximum effectiveness:</p>
          <ul>
            <li>Honeypot fields + Time validation + Rate limiting</li>
            <li>Behavioral analysis + Content filtering + Email verification</li>
            <li>JavaScript challenges + CSRF protection + IP monitoring</li>
          </ul>

          <h3>2. Monitor and Adjust</h3>
          <p>Keep logs and regularly review your form security:</p>
          <pre><code>{`<?php
function logSubmission($data, $result) {
    $logEntry = [
        'timestamp' => date('Y-m-d H:i:s'),
        'ip' => $_SERVER['REMOTE_ADDR'],
        'user_agent' => $_SERVER['HTTP_USER_AGENT'],
        'result' => $result, // 'accepted', 'rejected_spam', 'rejected_rate_limit'
        'data' => $data
    ];
    
    file_put_contents('form_log.json', json_encode($logEntry) . "\\n", FILE_APPEND);
}
?>`}</code></pre>

          <h3>3. Graceful Degradation</h3>
          <p>Ensure your forms work even when JavaScript is disabled:</p>
          <ul>
            <li>Server-side validation should be primary</li>
            <li>JavaScript should enhance, not replace security</li>
            <li>Provide alternative verification methods</li>
          </ul>

          <h3>4. User Experience Considerations</h3>
          <ul>
            <li><strong>Clear Error Messages:</strong> Don't reveal security measures in error messages</li>
            <li><strong>Fallback Options:</strong> Provide alternative contact methods</li>
            <li><strong>Accessibility:</strong> Ensure all users can complete the form</li>
            <li><strong>Mobile Optimization:</strong> Test on mobile devices</li>
          </ul>

          <h2>Performance Considerations</h2>
          <p>Keep your security measures lightweight:</p>
          <ul>
            <li>Use efficient algorithms for content analysis</li>
            <li>Implement caching for rate limiting data</li>
            <li>Clean up old tracking data regularly</li>
            <li>Consider using databases for high-traffic sites</li>
          </ul>

          <h2>Conclusion</h2>
          <p>Securing forms without CAPTCHA or plugins is not only possible but often provides a better user experience. By implementing a combination of honeypot fields, time validation, rate limiting, behavioral analysis, and content filtering, you can effectively protect your forms from spam while maintaining accessibility and usability.</p>

          <p>Remember that form security is an ongoing process. Monitor your forms regularly, analyze submission patterns, and adjust your security measures as needed. The key is finding the right balance between security and user experience for your specific use case.</p>

          <p>These techniques have been successfully used across millions of web forms and provide robust protection when implemented correctly. Start with 2-3 methods and gradually add more based on your specific spam patterns and user feedback.</p>
        </div>
      </article>
    </>
  );
}