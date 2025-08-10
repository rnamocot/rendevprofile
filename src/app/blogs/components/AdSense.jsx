'use client';
import { useEffect, useRef } from 'react';

export default function AdSense({ 
  adClient = "ca-pub-8135151574386158", 
  adSlot = "2082758267",
  adFormat = "auto",
  fullWidthResponsive = true,
  className = ""
}) {
  const adRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    // Only run once per component
    if (initialized.current || typeof window === 'undefined') return;
    
    const loadAdSense = async () => {
      try {
        // Load AdSense script if not already loaded
        if (!window.adsbygoogle) {
          const script = document.createElement('script');
          script.async = true;
          script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
          script.crossOrigin = 'anonymous';
          document.head.appendChild(script);
          
          // Wait for script to load
          await new Promise((resolve) => {
            script.onload = resolve;
          });
        }

        // Initialize AdSense
        if (window.adsbygoogle && adRef.current) {
          window.adsbygoogle.push({});
          initialized.current = true;
        }
      } catch (error) {
        console.error('AdSense initialization error:', error);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadAdSense, 100);
    
    return () => clearTimeout(timer);
  }, [adClient]);

  return (
    <div className={className}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
}