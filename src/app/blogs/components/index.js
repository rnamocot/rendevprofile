// AI Development Components
import BuildingAIPoweredWebApps, { blogPost as buildingAIPoweredWebAppsData } from './categories/ai-development/BuildingAIPoweredWebApps.jsx';
import AIPoweredDevelopmentTools, { blogPost as aiPoweredDevelopmentToolsData } from './categories/ai-development/AIPoweredDevelopmentTools.jsx';
import MachineLearningTensorFlowJS, { blogPost as machineLearningTensorFlowJSData } from './categories/ai-development/MachineLearningTensorFlowJS.jsx';
import AIJobSecurityITStudents, { blogPost as aiJobSecurityITStudentsData } from './categories/ai-development/AIJobSecurityITStudents.jsx';
import AIVibeCodersNotForBeginners, { blogPost as aiVibeCodersNotForBeginnersData } from './categories/ai-development/AIVibeCodersNotForBeginners.jsx';

// JavaScript Components
import ModernJavaScriptES2024, { blogPost as modernJavaScriptES2024Data } from './categories/javascript/ModernJavaScriptES2024.jsx';

// Laravel Components
import LaravelAPIAuthentication, { blogPost as laravelAPIAuthenticationData } from './categories/laravel/LaravelAPIAuthentication.jsx';
import LaravelLivewireInertia, { blogPost as laravelLivewireInertiaData } from './categories/laravel/LaravelLivewireInertia.jsx';

// Next.js Components
import NextJS15Revolutionary, { blogPost as nextJS15RevolutionaryData } from './categories/next-js/NextJS15Revolutionary.jsx';

// PHP Components
import PHP9Revolutionary, { blogPost as php9RevolutionaryData } from './categories/php/PHP9Revolutionary.jsx';

// Productivity Components
import DeveloperProductivityRevolution, { blogPost as developerProductivityRevolutionData } from './categories/productivity/DeveloperProductivityRevolution.jsx';
import AutomationDeveloperWorkflows, { blogPost as automationDeveloperWorkflowsData } from './categories/productivity/AutomationDeveloperWorkflows.jsx';
import GitCheatsheet, { blogPost as gitCheatsheetData } from './categories/productivity/GitCheatsheet.jsx';
import FindingYourLearningPace, { blogPost as findingYourLearningPaceData } from './categories/productivity/FindingYourLearningPace.jsx';

// React Components
import ReactPerformanceMastery, { blogPost as reactPerformanceMasteryData } from './categories/react/ReactPerformanceMastery.jsx';

// WordPress Components
import WordPressCustomPlugin, { blogPost as wordPressCustomPluginData } from './categories/wordpress/WordPressCustomPlugin.jsx';
import WordPressDevelopmentMastery, { blogPost as wordPressDevelopmentMasteryData } from './categories/wordpress/WordPressDevelopmentMastery.jsx';
import WordPressSEODominance, { blogPost as wordPressSEODominanceData } from './categories/wordpress/WordPressSEODominance.jsx';

// Web Development Components
import SecureFormsWithoutCaptcha, { blogPost as secureFormsWithoutCaptchaData } from './categories/web-development/SecureFormsWithoutCaptcha.jsx';
import TechnicalSEOWebDevelopment, { blogPost as technicalSEOWebDevelopmentData } from './categories/web-development/TechnicalSEOWebDevelopment.jsx';
import ChoosingHostingerWebHosting, { blogPost as choosingHostingerWebHostingData } from './categories/web-development/ChoosingHostingerWebHosting.jsx';
import CloudflareR2PresignedURLs, { blogPost as cloudflareR2PresignedURLsData } from './categories/web-development/CloudflareR2PresignedURLs.jsx';
import FastWebsitePageInsights, { blogPost as fastWebsitePageInsightsData } from './categories/web-development/FastWebsitePageInsights.jsx';

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
  9: AutomationDeveloperWorkflows,
  10: MachineLearningTensorFlowJS,
  11: WordPressDevelopmentMastery,
  12: SecureFormsWithoutCaptcha,
  13: TechnicalSEOWebDevelopment,
  14: AIJobSecurityITStudents,
  15: WordPressSEODominance,
  16: ChoosingHostingerWebHosting,
  17: GitCheatsheet,
  18: CloudflareR2PresignedURLs,
  19: PHP9Revolutionary,
  20: LaravelLivewireInertia,
  21: FastWebsitePageInsights,
  22: FindingYourLearningPace,
  23: AIVibeCodersNotForBeginners
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
  automationDeveloperWorkflowsData,
  machineLearningTensorFlowJSData,
  wordPressDevelopmentMasteryData,
  secureFormsWithoutCaptchaData,
  technicalSEOWebDevelopmentData,
  aiJobSecurityITStudentsData,
  wordPressSEODominanceData,
  choosingHostingerWebHostingData,
  gitCheatsheetData,
  cloudflareR2PresignedURLsData,
  php9RevolutionaryData,
  laravelLivewireInertiaData,
  fastWebsitePageInsightsData,
  findingYourLearningPaceData,
  aiVibeCodersNotForBeginnersData
];

// Export by category
export const blogsByCategory = {
  'next-js': [nextJS15RevolutionaryData],
  'react': [reactPerformanceMasteryData],
  'wordpress': [wordPressCustomPluginData, wordPressDevelopmentMasteryData, wordPressSEODominanceData],
  'laravel': [laravelAPIAuthenticationData, laravelLivewireInertiaData],
  'php': [php9RevolutionaryData],
  'javascript': [modernJavaScriptES2024Data],
  'ai-development': [buildingAIPoweredWebAppsData, aiPoweredDevelopmentToolsData, machineLearningTensorFlowJSData, aiJobSecurityITStudentsData, aiVibeCodersNotForBeginnersData],
  'productivity': [developerProductivityRevolutionData, automationDeveloperWorkflowsData, gitCheatsheetData, findingYourLearningPaceData],
  'web-development': [secureFormsWithoutCaptchaData, technicalSEOWebDevelopmentData, choosingHostingerWebHostingData, cloudflareR2PresignedURLsData, fastWebsitePageInsightsData]
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