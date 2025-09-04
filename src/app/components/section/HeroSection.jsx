'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';
import ResumeDownloadModal from '../modals/ResumeDownloadModal';

export default function HeroSection() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Enhanced CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-delay-200 {
          animation-delay: 200ms;
        }
        
        .animate-delay-400 {
          animation-delay: 400ms;
        }
        
        .animate-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
      {/* Geometric Background Elements - Responsive */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-4 md:top-20 md:left-10 w-1 md:w-2 h-12 md:h-20 bg-gray-900 opacity-10"></div>
        <div className="absolute top-32 right-8 md:top-40 md:right-20 w-px h-20 md:h-32 bg-gray-300"></div>
        <div className="absolute bottom-20 left-1/4 md:bottom-32 w-4 md:w-8 h-px bg-gray-400"></div>
        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-gray-900 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-4 md:w-6 h-4 md:h-6 border border-gray-300 rotate-45 opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm text-xs sm:text-sm text-gray-700 shadow-lg animate-fadeInUp">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for new projects
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gray-900 block animate-fadeInLeft">Building</span>
                <span className="text-gray-600 block animate-fadeInLeft animate-delay-200">Impactful Digital</span>
                <span className="text-gray-600 block animate-fadeInLeft animate-delay-400">Experiences</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-none lg:max-w-lg leading-relaxed animate-fadeInUp animate-delay-600">
                Full-stack developer with 8+ years of experience building modern web applications using React, Next.js, and Laravel. I specialize in CMS and e-commerce solutions, creating custom WordPress themes, headless WordPress with React integrations, responsive website design, Shopify customizations, and enterprise-scale web applications.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp animate-delay-600">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-black transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-300 cursor-pointer hover:shadow-lg"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-8 pt-6 sm:pt-8 border-t border-gray-100 animate-fadeInUp animate-delay-600">
              <div className="text-center sm:text-left group">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1 group-hover:text-black transition-colors">500+</div>
                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center sm:text-left group">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1 group-hover:text-black transition-colors">8+</div>
                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Years Exp</div>
              </div>
              <div className="text-center sm:text-left group">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1 group-hover:text-black transition-colors">100%</div>
                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative z-10 aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto animate-fadeInRight">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl rotate-3 transition-transform duration-500 hover:rotate-6"></div>
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src="/images/profile/ren.png"
                  alt="Renie Namocot - Full Stack Developer"
                  fill
                  className="object-cover object-center rounded-2xl transition-transform duration-500 hover:scale-105"
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
                />
              </div>
            </div>
            
            {/* Floating elements - Responsive positioning */}
            <div className="absolute top-4 sm:top-8 -right-1 sm:-right-2 md:-right-4 bg-white p-2 sm:p-3 md:p-4 rounded-xl shadow-lg animate-floating-slow">
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">Online</span>
              </div>
            </div>
            
            <div className="absolute bottom-4 sm:bottom-8 -left-1 sm:-left-2 md:-left-4 bg-gray-900 text-white p-2 sm:p-3 md:p-4 rounded-xl shadow-lg animate-floating-fast">
              <div className="text-xs uppercase tracking-wider mb-0.5 sm:mb-1">Latest Project</div>
              <div className="text-xs sm:text-sm md:text-base font-semibold">E-commerce Platform</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Resume Download Modal */}
    <ResumeDownloadModal 
      isOpen={isResumeModalOpen}
      onClose={() => setIsResumeModalOpen(false)}
    />
    </>
  );
}
