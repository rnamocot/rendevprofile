import Image from 'next/image';
import { Code2, Database, Smartphone, Zap, Award, Users, Clock, Target, CheckCircle } from 'lucide-react';
import Footer from '../components/layout/Footer';
import './animations.css';

export const metadata = {
  title: "About - Renie Namocot | Full Stack Developer",
  description: "Learn more about Renie Namocot, a professional full-stack developer with 5+ years of experience in creating modern web applications.",
};

export default function AboutPage() {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'React, Next.js, Vue.js, TypeScript with modern UI frameworks',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'JavaScript']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Laravel, Node.js, PHP with robust database design',
      technologies: ['Laravel', 'Node.js', 'PHP', 'PostgreSQL', 'MongoDB', 'MySQL']
    },
    {
      icon: Smartphone,
      title: 'WordPress & Shopify Expert',
      description: 'Complete WordPress development with custom themes, plugins, and Shopify stores',
      technologies: ['WordPress', 'Shopify', 'WooCommerce', 'Custom Plugins', 'Theme Development', 'Liquid']
    },
    {
      icon: Zap,
      title: 'Performance & Optimization',
      description: 'SEO, Core Web Vitals, and scalable architectures',
      technologies: ['SEO', 'Performance', 'Scalability', 'Testing', 'CI/CD', 'Page Speed']
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Top Rated Upwork Freelancer',
      description: 'Achieved and maintained Top Rated status on Upwork with consistent 5-star ratings and successful project deliveries.'
    },
    {
      icon: Users,
      title: 'ZendzTools App Owner',
      description: 'Successfully launched and managing ZendzTools, a modern web application serving users worldwide.'
    },
    {
      icon: Clock,
      title: '8+ Years Professional Experience',
      description: 'Extensive experience from Junior Software Engineer to Senior Developer across multiple companies and industries.'
    },
    {
      icon: Target,
      title: 'International Client Base',
      description: 'Successfully delivered projects for clients in Australia, Philippines, and globally through remote collaboration.'
    }
  ];

  const workExperience = [
    {
      period: 'Jan 2025 - Present',
      company: 'ZendzTools',
      role: 'Full-Stack Developer / App Owner',
      type: 'Self-employed',
      location: 'Philippines · Remote',
      description: 'Developing and maintaining web applications using modern technologies including React.js, Next.js, Node.js, and Supabase.',
      technologies: ['Git', 'React.js', 'SEO', 'Supabase', 'Next.js', 'Node.js', 'Tailwind CSS', 'Vercel', 'Cloudflare']
    },
    {
      period: 'Feb 2024 - Present',
      company: 'Upwork',
      role: 'Full Stack Developer - Top Rated',
      type: 'Freelance',
      location: 'Philippines · Remote',
      description: 'Top Rated freelancer delivering high-quality web applications and solutions. Successfully completed numerous projects with clean, scalable code and timely delivery.',
      technologies: ['Laravel', 'PHP', 'React.js', 'Next.js', 'WordPress', 'Shopify', 'JavaScript', 'CSS', 'MongoDB', 'Git']
    },
    {
      period: 'Oct 2023 - Feb 2025',
      company: 'Sentius Group',
      role: 'Senior Developer',
      type: 'Full-time',
      location: 'Australia · Hybrid',
      description: 'Managing web development tasks across website updates and maintaining high-quality code standards.',
      technologies: ['PHP', 'Web Development', 'Website Management']
    },
    {
      period: 'Oct 2023 - Feb 2025',
      company: 'Shark Digital Australia',
      role: 'Senior Web Developer',
      type: 'Full-time',
      location: 'Sydney, NSW · Remote',
      description: 'Leading web development projects and implementing advanced solutions for Australian clients.',
      technologies: ['Web Development', 'Remote Collaboration']
    },
    {
      period: 'Nov 2020 - Jun 2023',
      company: 'EMAPTA',
      role: 'PHP Developer',
      type: 'Full-time',
      location: 'Philippines',
      description: 'Developed robust PHP applications and maintained existing systems for international clients.',
      technologies: ['PHP', 'Backend Development', 'Database Management']
    },
    {
      period: 'Oct 2019 - Nov 2021',
      company: 'Gazillionaires Trading',
      role: 'Full-stack Developer',
      type: 'Full-time',
      location: 'Philippines',
      description: 'Built complete web applications from frontend to backend, handling both user interface and server-side logic.',
      technologies: ['Full-stack Development', 'Web Applications']
    },
    {
      period: 'Jun 2019 - Oct 2019',
      company: 'SOCIOKING, Inc',
      role: 'Web Developer',
      type: 'Full-time',
      location: 'Philippines',
      description: 'Developed web solutions and maintained company websites with focus on user experience.',
      technologies: ['Web Development', 'UI/UX']
    },
    {
      period: 'May 2017 - May 2019',
      company: 'Business Switch',
      role: 'Junior Software Engineer',
      type: 'Full-time',
      location: 'Philippines',
      description: 'Started my professional journey in software development, learning industry best practices and contributing to various projects.',
      technologies: ['Software Engineering', 'Programming Fundamentals']
    }
  ];

  return (
    <>

      <main className="pt-16">
        {/* Enhanced Hero Section */}
        <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 border border-gray-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-20 h-20 border border-gray-500 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-16 bg-gray-400 transform -rotate-45"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1 h-12 bg-gray-400 transform rotate-45"></div>
            <div className="absolute top-10 right-1/4 w-4 h-4 bg-gray-500 rounded-full animate-ping"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fadeInLeft">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700 mb-6 animate-fadeInUp">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for projects
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="block">About</span>
                  <span className="block text-black">Renie Namocot</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed animate-fadeInUp animate-delay-400">
                  I'm a passionate full-stack developer with over 8 years of professional experience, 
                  specializing in modern web technologies and delivering exceptional digital solutions 
                  for clients worldwide. Currently running ZendzTools and maintaining Top Rated status on Upwork.
                </p>
                
                {/* Enhanced Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8 animate-fadeInUp animate-delay-600">
                  <div className="text-center group">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">8+</div>
                    <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Years Exp</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">500+</div>
                    <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Projects</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">50+</div>
                    <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Clients</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">100%</div>
                    <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Success Rate</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animate-delay-600">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Let's Work Together
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-300 hover:shadow-lg"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>
              <div className="relative animate-fadeInRight">
                <div className="aspect-square max-w-md mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl rotate-3 transition-transform duration-500 hover:rotate-6"></div>
                  <div className="absolute inset-0 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
                    <Image
                      src="/images/profile/ren.png"
                      alt="Renie Namocot"
                      fill
                      className="object-cover object-top rounded-3xl transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 -right-4 bg-white p-4 rounded-xl shadow-lg animate-pulse">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Top Rated</span>
                  </div>
                </div>
                
                <div className="absolute bottom-8 -left-4 bg-gray-900 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-xs uppercase tracking-wider mb-1">Current Focus</div>
                  <div className="text-sm font-semibold">ZendzTools</div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Enhanced Professional Journey */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-64 h-64 border border-gray-300 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 border border-gray-400 rounded-full"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700 mb-6">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  My Journey
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  From Junior to Entrepreneur
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  My 8-year journey in web development has been driven by curiosity, continuous learning, 
                  and a passion for creating solutions that make a real impact.
                </p>
              </div>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden lg:block"></div>
                
                <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
                  <div className="group text-center lg:text-right relative">
                    <div className="lg:absolute lg:right-0 lg:top-8 lg:transform lg:translate-x-1/2 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-0 border-4 border-white shadow-lg group-hover:bg-gray-900 transition-colors duration-300">
                      <span className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">1</span>
                    </div>
                    <div className="lg:pr-8">
                      <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-4">
                        2017 - 2019
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                        The Beginning
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Started as Junior Software Engineer at Business Switch, building foundational skills 
                        and learning industry best practices in web development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="group text-center relative">
                    <div className="lg:absolute lg:left-1/2 lg:top-8 lg:transform lg:-translate-x-1/2 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-0 border-4 border-white shadow-lg group-hover:bg-gray-900 transition-colors duration-300">
                      <span className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">2</span>
                    </div>
                    <div className="lg:pt-24">
                      <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-4">
                        2019 - 2023
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                        Growth & Expertise
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Advanced through multiple companies, mastering full-stack development 
                        and eventually reaching Senior Developer positions with international clients.
                      </p>
                    </div>
                  </div>
                  
                  <div className="group text-center lg:text-left relative">
                    <div className="lg:absolute lg:left-0 lg:top-8 lg:transform lg:-translate-x-1/2 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-0 border-4 border-white shadow-lg group-hover:bg-gray-900 transition-colors duration-300">
                      <span className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">3</span>
                    </div>
                    <div className="lg:pl-8">
                      <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-4">
                        2024 - Present
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                        Entrepreneurship
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Launched ZendzTools, achieved Top Rated status on Upwork, 
                        and now help businesses worldwide with innovative web solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Milestones */}
              <div className="mt-20 pt-16 border-t border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Key Milestones</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.001.001l-5 5-4-4-2 2-3-3" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">8+ Years</div>
                    <div className="text-gray-600 text-sm">Professional Experience</div>
                  </div>
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
                    <div className="text-gray-600 text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
                    <div className="text-gray-600 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">Top Rated</div>
                    <div className="text-gray-600 text-sm">Upwork Freelancer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Professional Experience */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-700 mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
                Experience
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Professional Experience
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Over 8 years of professional web development experience across various companies 
                and industries, from junior developer to senior positions.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div 
                    key={index} 
                    className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden"
                  >
                    {/* Hover effect border */}
                    <div className="absolute inset-0 border-2 border-gray-900 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 relative z-10">
                      <div className="lg:w-1/3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full text-sm font-medium text-gray-600 mb-3">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          {job.period}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">{job.role}</h3>
                        <div className="text-lg font-semibold text-gray-800 mb-2">{job.company}</div>
                        <div className="text-sm text-gray-500 mb-2">{job.type} • {job.location}</div>
                        
                        {/* Current position indicator */}
                        {index === 0 && (
                          <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 rounded-full text-green-700 text-xs font-medium mt-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            Current
                          </div>
                        )}
                      </div>
                      <div className="lg:w-2/3">
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200 font-medium hover:bg-gray-200 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Download Resume CTA */}
              <div className="text-center mt-16">
                <div className="bg-gray-900 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Want to know more?</h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Download my complete resume for detailed information about my professional experience, skills, and achievements.
                  </p>
                  <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Core Expertise Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700 mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Skills & Expertise
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Core Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive skill set covering the entire web development lifecycle, 
                from concept to deployment and maintenance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="group relative"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="bg-gray-50 rounded-2xl p-8 h-full hover:bg-white hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-5 transform rotate-12">
                      <skill.icon className="w-full h-full text-gray-900" />
                    </div>
                    
                    {/* Icon */}
                    <div className="relative z-10 w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-black transition-all duration-300 shadow-lg">
                      <skill.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-black transition-colors">
                        {skill.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {skill.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {skill.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200 font-medium hover:bg-gray-200 hover:border-gray-300 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-gray-900 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Expertise Summary */}
            <div className="mt-20 pt-16 border-t border-gray-100">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Full-Stack Proficiency
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Frontend Development</span>
                      <span className="text-gray-600">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-900 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Backend Development</span>
                      <span className="text-gray-600">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-900 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">WordPress & Shopify</span>
                      <span className="text-gray-600">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-900 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Performance & SEO</span>
                      <span className="text-gray-600">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-900 h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    What I Bring to Your Project
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Modern Development Practices</h4>
                        <p className="text-gray-600 text-sm">Clean code, version control, testing, and CI/CD</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Scalable Architecture</h4>
                        <p className="text-gray-600 text-sm">Future-proof solutions that grow with your business</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Performance Optimization</h4>
                        <p className="text-gray-600 text-sm">Fast loading, SEO-friendly, mobile-responsive</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Ongoing Support</h4>
                        <p className="text-gray-600 text-sm">Maintenance, updates, and technical support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Approach & Values */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">My Development Approach</h2>
                <p className="text-xl text-gray-600">
                  Quality, collaboration, and continuous learning drive everything I do
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What Sets Me Apart</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Quality-First Mindset</h4>
                        <p className="text-gray-600">I believe in writing clean, maintainable code that stands the test of time. Every line is crafted with future scalability in mind.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Collaborative Partnership</h4>
                        <p className="text-gray-600">I work closely with clients to understand their vision and translate it into exceptional digital experiences that exceed expectations.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Continuous Innovation</h4>
                        <p className="text-gray-600">Technology evolves rapidly, and so do I. I'm always exploring new tools and techniques to deliver cutting-edge solutions.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Me?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span className="text-gray-700">8+ years of proven experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span className="text-gray-700">Top Rated Upwork freelancer</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span className="text-gray-700">Full-stack expertise across modern technologies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span className="text-gray-700">Strong track record with international clients</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span className="text-gray-700">Entrepreneur mindset with business understanding</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span className="text-gray-700">Reliable communication and timely delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Achievements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Milestones that reflect my commitment to excellence and continuous growth 
                in the field of web development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-20 h-20 border border-white rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-16 bg-white transform -rotate-45"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1 h-12 bg-white transform rotate-45"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 bg-gray-800/50 backdrop-blur-sm text-sm text-gray-300 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Let's Build Something Amazing
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your project and create something amazing together. 
                I'm available for both short-term projects and long-term collaborations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white px-8 py-4 rounded-xl font-medium hover:border-gray-400 hover:bg-white/10 transition-all duration-300 hover:shadow-lg"
                >
                  View My Work
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </a>
              </div>

              {/* Contact Methods */}
              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-400 text-sm">Quick response guaranteed</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white mb-1">Schedule a Call</h3>
                  <p className="text-gray-400 text-sm">Free consultation available</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white mb-1">Remote Work</h3>
                  <p className="text-gray-400 text-sm">Available worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}