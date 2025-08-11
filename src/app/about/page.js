import Image from 'next/image';
import { Code2, Database, Smartphone, Zap, Award, Users, Clock, Target, CheckCircle } from 'lucide-react';
import Footer from '../components/layout/Footer';

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
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  About Me
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  I'm a passionate full-stack developer with over 8 years of professional experience, 
                  specializing in modern web technologies and delivering exceptional digital solutions 
                  for clients worldwide. Currently running ZendzTools and maintaining Top Rated status on Upwork.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">8+</div>
                    <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Top Rated</div>
                    <div className="text-sm sm:text-base text-gray-600">Upwork Freelancer</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl rotate-3"></div>
                  <div className="absolute inset-0 bg-white rounded-3xl shadow-xl">
                    <Image
                      src="/images/profile/ren.png"
                      alt="Renie Namocot"
                      fill
                      className="object-cover object-top rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Professional Journey Overview */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">My Professional Journey</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                From Junior Software Engineer to running my own company, my journey in web development 
                has been driven by a passion for creating innovative solutions and delivering exceptional results 
                for clients around the world.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Started as Junior Engineer</h3>
                  <p className="text-gray-600">Began at Business Switch in 2017, learning the fundamentals and industry best practices.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Grew to Senior Roles</h3>
                  <p className="text-gray-600">Advanced through various companies, eventually reaching Senior Developer positions in Australia.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Entrepreneur & Top Freelancer</h3>
                  <p className="text-gray-600">Launched ZendzTools and achieved Top Rated status on Upwork, serving global clients.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Over 8 years of professional web development experience across various companies 
                and industries, from junior developer to senior positions.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="lg:w-1/3">
                        <div className="text-sm font-medium text-blue-600 mb-2">{job.period}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{job.role}</h3>
                        <div className="text-lg font-medium text-gray-700 mb-1">{job.company}</div>
                        <div className="text-sm text-gray-500 mb-2">{job.type} • {job.location}</div>
                      </div>
                      <div className="lg:w-2/3">
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="text-xs px-3 py-1 bg-white text-gray-700 rounded-full border border-gray-200 font-medium"
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
            </div>
          </div>
        </section>

        {/* Core Expertise Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Core Expertise</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive skill set covering the entire web development lifecycle, 
                from concept to deployment and maintenance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-200 border border-gray-100">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
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

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. 
              I'm available for both short-term projects and long-term collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Get In Touch
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white px-8 py-4 rounded-xl font-medium hover:border-gray-400 transition-colors duration-200"
              >
                View My Work
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}