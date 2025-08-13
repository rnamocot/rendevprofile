// AI Development Components
import BuildingAIPoweredWebApps, { blogPost as buildingAIPoweredWebAppsData } from './categories/ai-development/BuildingAIPoweredWebApps.jsx';
import AIPoweredDevelopmentTools, { blogPost as aiPoweredDevelopmentToolsData } from './categories/ai-development/AIPoweredDevelopmentTools.jsx';
import MachineLearningTensorFlowJS, { blogPost as machineLearningTensorFlowJSData } from './categories/ai-development/MachineLearningTensorFlowJS.jsx';

// JavaScript Components
import ModernJavaScriptES2024, { blogPost as modernJavaScriptES2024Data } from './categories/javascript/ModernJavaScriptES2024.jsx';

// Laravel Components
import LaravelAPIAuthentication, { blogPost as laravelAPIAuthenticationData } from './categories/laravel/LaravelAPIAuthentication.jsx';

// Next.js Components
import NextJS15Revolutionary, { blogPost as nextJS15RevolutionaryData } from './categories/next-js/NextJS15Revolutionary.jsx';

// Productivity Components
import DeveloperProductivityRevolution, { blogPost as developerProductivityRevolutionData } from './categories/productivity/DeveloperProductivityRevolution.jsx';

// React Components
import ReactPerformanceMastery, { blogPost as reactPerformanceMasteryData } from './categories/react/ReactPerformanceMastery.jsx';

// WordPress Components
import WordPressCustomPlugin, { blogPost as wordPressCustomPluginData } from './categories/wordpress/WordPressCustomPlugin.jsx';
import WordPressDevelopmentMastery, { blogPost as wordPressDevelopmentMasteryData } from './categories/wordpress/WordPressDevelopmentMastery.jsx';

// Export components
export const blogComponents = {
  1: NextJS15Revolutionary,
  2: ReactPerformanceMastery,
  3: WordPressCustomPlugin,
  4: LaravelAPIAuthentication,
  5: ModernJavaScriptES2024,
  6: BuildingAIPoweredWebApps,
  7: AIPoweredDevelopmentTools,
  8: DeveloperProductivityRevolution,
  9: MachineLearningTensorFlowJS,
  10: WordPressDevelopmentMastery
};

// Export blog data
export const individualBlogPosts = [
  nextJS15RevolutionaryData,
  reactPerformanceMasteryData,
  wordPressCustomPluginData,
  laravelAPIAuthenticationData,
  modernJavaScriptES2024Data,
  buildingAIPoweredWebAppsData,
  aiPoweredDevelopmentToolsData,
  developerProductivityRevolutionData,
  machineLearningTensorFlowJSData,
  wordPressDevelopmentMasteryData
];

// Export by category
export const blogsByCategory = {
  'next-js': [nextJS15RevolutionaryData],
  'react': [reactPerformanceMasteryData],
  'wordpress': [wordPressCustomPluginData, wordPressDevelopmentMasteryData],
  'laravel': [laravelAPIAuthenticationData],
  'javascript': [modernJavaScriptES2024Data],
  'ai-development': [buildingAIPoweredWebAppsData, aiPoweredDevelopmentToolsData, machineLearningTensorFlowJSData],
  'productivity': [developerProductivityRevolutionData]
};

// Get component by slug
export const getBlogComponentBySlug = (slug) => {
  const blog = individualBlogPosts.find(post => post.slug === slug);
  return blog ? blogComponents[blog.id] : null;
};

// Get blog data by slug
export const getBlogDataBySlug = (slug) => {
  return individualBlogPosts.find(post => post.slug === slug);
};