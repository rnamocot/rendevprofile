'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';
import ResumeDownloadModal from '../modals/ResumeDownloadModal';

export default function HeroSection() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-20 bg-gray-900 opacity-10"></div>
        <div className="absolute top-40 right-20 w-px h-32 bg-gray-300"></div>
        <div className="absolute bottom-32 left-1/4 w-8 h-px bg-gray-400"></div>
        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-gray-900 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 border border-gray-300 rotate-45 opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm text-sm text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for new projects
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Building </span>
                <br />
                <span className="text-gray-600">Impactful Digital Experiences</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed">
               I’m a full-stack developer specializing in React, Next.js, and Laravel. With a focus on CMS automation (WordPress, Shopify), I develop custom themes, plugins, and web applications that prioritize speed, scalability, and seamless user experiences. My passion lies in transforming ideas into modern, efficient, and user-friendly digital solutions.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              >
                Start Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-gray-100">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">5+</div>
                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Years Exp</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10 aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl">
                <Image
                  src="/images/profile/ren.png"
                  alt="Renie Namocot - Full Stack Developer"
                  fill
                  className="object-cover object-center rounded-2xl"
                  priority
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-8 -right-2 sm:-right-4 bg-white p-3 sm:p-4 rounded-xl shadow-lg animate-floating-slow">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">Online</span>
              </div>
            </div>
            
            <div className="absolute bottom-8 -left-2 sm:-left-4 bg-gray-900 text-white p-3 sm:p-4 rounded-xl shadow-lg animate-floating-fast">
              <div className="text-xs uppercase tracking-wider mb-1">Latest Project</div>
              <div className="text-sm sm:text-base font-semibold">E-commerce Platform</div>
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
