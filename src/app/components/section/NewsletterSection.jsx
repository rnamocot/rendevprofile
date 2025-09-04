'use client';
import { useState } from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 border border-white rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-16 bg-white transform -rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1 h-12 bg-white transform rotate-45"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome Aboard! 🎉
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Thanks for subscribing! You'll receive the latest web development insights, tutorials, and tips directly in your inbox.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="mt-8 text-gray-400 hover:text-white transition-colors text-sm"
            >
              Subscribe another email →
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-white rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-16 bg-white transform -rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-12 bg-white transform rotate-45"></div>
        <div className="absolute top-10 right-1/4 w-4 h-4 bg-white rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 bg-gray-800/50 backdrop-blur-sm text-sm text-gray-300 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Join 1000+ developers
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Stay Ahead in
            <span className="block text-white">
              Web Development
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get exclusive insights, tutorials, and the latest trends in modern web development delivered straight to your inbox. Join our community of passionate developers.
          </p>
          
          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 bg-white text-gray-900 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[160px]"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-700">
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">No spam, ever</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Unsubscribe anytime</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Weekly insights</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Premium content</span>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Trusted by developers from:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-medium">Google</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-medium">Microsoft</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-medium">Meta</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-medium">Netflix</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">
                <span className="text-white font-medium">Shopify</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}