'use client';
import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { getFormspreeEndpoint, trackEvent } from '../../lib/config';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    
    try {
      // Submit to Formspree
      const response = await fetch(getFormspreeEndpoint(), {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          name: name || 'Newsletter Subscriber',
          subject: 'Newsletter Subscription',
          type: 'newsletter',
          source: 'blog_page'
        }),
      });

      if (response.ok) {
        setMessage('🎉 Welcome aboard! Check your email to confirm your subscription.');
        setIsSuccess(true);
        setEmail('');
        setName('');
        
        // Track newsletter signup with GA4
        trackEvent('newsletter_signup', {
          event_category: 'engagement',
          event_label: 'blog_page'
        });
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setMessage('⚠️ Something went wrong. Please try again.');
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name (optional)"
              className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              disabled={isSubmitting}
            />
          </div>
          <div className="flex-1">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-12 pr-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            type="submit"
            disabled={isSubmitting || !email.trim()}
            className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                Subscribe to Newsletter
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </form>
      
      {message && (
        <div className={`mt-6 p-4 rounded-xl backdrop-blur-sm border ${
          isSuccess 
            ? 'bg-green-500/20 border-green-500/50' 
            : 'bg-red-500/20 border-red-500/50'
        }`}>
          <div className="flex items-center gap-3">
            {isSuccess ? (
              <CheckCircle className="w-6 h-6 text-green-400" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-400" />
            )}
            <p className={`${isSuccess ? 'text-green-100' : 'text-red-100'} font-medium`}>
              {message}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}