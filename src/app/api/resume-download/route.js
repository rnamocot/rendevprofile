import { NextResponse } from 'next/server';

// In a production environment, you would typically store this in a database
// For now, we'll use a simple in-memory store (this will reset on server restart)
const downloadLogs = [];

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map();

// Helper function to check rate limits
function checkRateLimit(ip, email) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxAttempts = 3; // Max 3 attempts per 15 minutes per IP/email

  // Clean old entries
  for (const [key, data] of rateLimitStore.entries()) {
    if (now - data.firstAttempt > windowMs) {
      rateLimitStore.delete(key);
    }
  }

  // Check IP rate limit
  const ipKey = `ip:${ip}`;
  const ipData = rateLimitStore.get(ipKey) || { count: 0, firstAttempt: now };
  
  if (ipData.count >= maxAttempts && now - ipData.firstAttempt < windowMs) {
    return { allowed: false, reason: 'IP rate limit exceeded' };
  }

  // Check email rate limit
  const emailKey = `email:${email}`;
  const emailData = rateLimitStore.get(emailKey) || { count: 0, firstAttempt: now };
  
  if (emailData.count >= maxAttempts && now - emailData.firstAttempt < windowMs) {
    return { allowed: false, reason: 'Email rate limit exceeded' };
  }

  // Update counters
  rateLimitStore.set(ipKey, { count: ipData.count + 1, firstAttempt: ipData.firstAttempt });
  rateLimitStore.set(emailKey, { count: emailData.count + 1, firstAttempt: emailData.firstAttempt });

  return { allowed: true };
}

// Helper function to validate email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Helper function to sanitize input
function sanitizeInput(input) {
  return input.toString().trim().slice(0, 255); // Limit length and remove whitespace
}

// Helper function to detect potential spam/abuse
function detectSpam(name, email) {
  const spamPatterns = [
    /test@test\./i,
    /example@example\./i,
    /admin@admin\./i,
    /@tempmail\./i,
    /@10minutemail\./i,
    /@guerrillamail\./i,
  ];

  const nameSpamPatterns = [
    /^test$/i,
    /^admin$/i,
    /^user$/i,
    /spam/i,
    /bot/i,
  ];

  // Check email patterns
  for (const pattern of spamPatterns) {
    if (pattern.test(email)) {
      return true;
    }
  }

  // Check name patterns
  for (const pattern of nameSpamPatterns) {
    if (pattern.test(name)) {
      return true;
    }
  }

  // Check for too short or too long inputs
  if (name.length < 2 || name.length > 50) {
    return true;
  }

  if (email.length < 5 || email.length > 100) {
    return true;
  }

  return false;
}

export async function POST(request) {
  try {
    // Get client IP
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';

    const body = await request.json();
    const { name, email, timestamp, userAgent, referrer } = body;

    // Input validation
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      );
    }

    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);

    // Validate email format
    if (!validateEmail(sanitizedEmail)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check rate limits
    const rateLimitResult = checkRateLimit(ip, sanitizedEmail);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Detect spam/abuse
    if (detectSpam(sanitizedName, sanitizedEmail)) {
      // Log the attempt but don't reveal it's blocked
      console.warn('Potential spam attempt:', { name: sanitizedName, email: sanitizedEmail, ip });
      
      // Return success to avoid revealing spam detection
      return NextResponse.json({
        success: true,
        message: 'Download will start shortly',
        downloadUrl: '/resume.pdf' // Still provide a download URL
      });
    }

    // Log the download request
    const downloadRecord = {
      id: Date.now() + Math.random(),
      name: sanitizedName,
      email: sanitizedEmail,
      ip,
      timestamp: timestamp || new Date().toISOString(),
      userAgent: userAgent || 'unknown',
      referrer: referrer || 'direct',
      downloadTime: new Date().toISOString()
    };

    downloadLogs.push(downloadRecord);

    // In a production environment, you would:
    // 1. Store this in a database
    // 2. Send a confirmation email
    // 3. Add to your email marketing list (with consent)
    // 4. Generate a unique download token for security

    console.log('Resume download request:', downloadRecord);

    // TODO: In production, implement:
    // - Database storage
    // - Email confirmation
    // - Analytics tracking
    // - Newsletter subscription (if consented)

    // For now, we'll just log and allow the download
    return NextResponse.json({
      success: true,
      message: 'Download authorized',
      downloadUrl: '/resume.pdf', // In production, this could be a signed/temporary URL
      downloadId: downloadRecord.id
    });

  } catch (error) {
    console.error('Resume download API error:', error);
    
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve download statistics (for admin use)
export async function GET(request) {
  try {
    // In production, add proper authentication here
    const url = new URL(request.url);
    const adminKey = url.searchParams.get('key');
    
    // Admin key check
    const validAdminKey = 'RenDev95';
    if (adminKey !== validAdminKey) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Return download statistics
    const stats = {
      total: downloadLogs.length,
      today: downloadLogs.filter(log => {
        const today = new Date().toISOString().split('T')[0];
        const logDate = new Date(log.timestamp).toISOString().split('T')[0];
        return today === logDate;
      }).length,
      thisWeek: downloadLogs.filter(log => {
        const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        return new Date(log.timestamp) > weekAgo;
      }).length,
      recent: downloadLogs.slice(-10).reverse() // Last 10 downloads
    };

    return NextResponse.json({
      success: true,
      stats,
      downloads: downloadLogs.slice(-50).reverse() // Last 50 for details
    });

  } catch (error) {
    console.error('Resume download stats API error:', error);
    
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}