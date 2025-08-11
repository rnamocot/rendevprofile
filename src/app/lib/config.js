// Configuration file for external services

export const config = {
  // Formspree configuration
  formspree: {
    // Replace with your actual Formspree form ID
    // Get this from: https://formspree.io/forms
    formId: 'YOUR_FORM_ID', // Replace with your actual form ID
    endpoint: 'https://formspree.io/f/YOUR_FORM_ID' // This will be auto-updated when you change formId
  },
  
  // Google Analytics
  ga4: {
    measurementId: 'G-XV2PTNE81C'
  },
  
  // Admin configuration
  admin: {
    resumeStatsKey: 'RenDev95'
  },
  
  // Site information
  site: {
    name: 'Renie Namocot Portfolio',
    url: 'https://renienamocot.com',
    email: 'hello@renienamocot.com'
  }
};

// Helper function to get Formspree endpoint
export const getFormspreeEndpoint = () => {
  return `https://formspree.io/f/${config.formspree.formId}`;
};

// Helper function to track GA4 events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, parameters);
  }
};