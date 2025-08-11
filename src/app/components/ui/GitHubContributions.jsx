'use client';
import { useState, useEffect } from 'react';

export default function GitHubContributions({ username = 'rnamocot' }) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Create a simple contributions grid as fallback
  const generateMockContributions = () => {
    const weeks = 52;
    const days = 7;
    const contributions = [];
    
    for (let week = 0; week < weeks; week++) {
      for (let day = 0; day < days; day++) {
        const intensity = Math.floor(Math.random() * 5); // 0-4 intensity levels
        contributions.push({
          date: new Date(2024, 0, 1 + week * 7 + day),
          count: intensity,
          level: intensity
        });
      }
    }
    return contributions;
  };

  const mockData = generateMockContributions();

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">GitHub Activity</h3>
            <p className="text-gray-600 text-sm sm:text-base">My coding contributions and development activity</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="hidden sm:inline">Active Developer</span>
          </div>
        </div>

        {!imageError && (
          <>
            {isLoading && (
              <div className="flex items-center justify-center py-16">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                  <p className="text-gray-500 text-sm">Loading GitHub stats...</p>
                </div>
              </div>
            )}

            <div className={`github-stats-container mb-6 ${isLoading ? 'hidden' : 'block'}`}>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default&hide_border=true&bg_color=00000000&title_color=1F2937&text_color=6B7280&icon_color=6366F1`}
                alt="GitHub Stats"
                className="w-full max-w-md mx-auto rounded-xl"
                onError={handleImageError}
                onLoad={handleImageLoad}
              />
            </div>
          </>
        )}

        {imageError && (
          <div className="mb-6">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">GitHub Developer</h4>
              <p className="text-gray-600 mb-4">Active in open source and private repositories</p>
              <div className="text-sm text-gray-500">Consistent contributor with daily commits</div>
            </div>
          </div>
        )}

        {/* GitHub Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-gray-900 mb-1">1000+</div>
            <div className="text-sm text-gray-600">Commits</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-gray-900 mb-1">75+</div>
            <div className="text-sm text-gray-600">Repositories</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-gray-900 mb-1">8+</div>
            <div className="text-sm text-gray-600">Years Active</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Availability</div>
          </div>
        </div>

        <div className="text-center">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}