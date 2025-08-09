import Image from 'next/image';
import { Code2, Database, Smartphone, Zap, Award, Users, Clock, Target } from 'lucide-react';
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
      title: '500+ Projects Completed',
      description: 'Successfully delivered over 500 projects across various industries and technologies.'
    },
    {
      icon: Users,
      title: '100% Client Satisfaction',
      description: 'Maintained perfect satisfaction rate with consistent quality and professional service.'
    },
    {
      icon: Clock,
      title: '5+ Years Experience',
      description: 'Deep expertise gained through years of hands-on development and problem-solving.'
    },
    {
      icon: Target,
      title: 'Results-Driven Approach',
      description: 'Focus on delivering measurable business value and exceptional user experiences.'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Started Web Development Journey',
      description: 'Began learning web development with HTML, CSS, and JavaScript'
    },
    {
      year: '2020',
      title: 'First Professional Projects',
      description: 'Started taking on freelance projects and building client relationships'
    },
    {
      year: '2021',
      title: 'Full-Stack Expertise',
      description: 'Mastered Laravel, React, and database technologies for complete solutions'
    },
    {
      year: '2022',
      title: 'Scale & Specialization',
      description: 'Expanded to larger projects and specialized in e-commerce and SaaS platforms'
    },
    {
      year: '2023',
      title: 'Advanced Technologies',
      description: 'Adopted Next.js, TypeScript, and modern DevOps practices'
    },
    {
      year: '2024',
      title: 'Present Day',
      description: 'Continuing to innovate and deliver cutting-edge web solutions globally'
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
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  About Me
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  I'm a passionate full-stack developer dedicated to creating exceptional 
                  digital experiences that drive business growth and user satisfaction.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
                    <div className="text-gray-600">Years Experience</div>
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

        {/* Skills Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive skill set covering the entire web development lifecycle, 
                from concept to deployment and maintenance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-50 rounded-2xl p-8 h-full hover:bg-gray-100 transition-colors duration-200">
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
                          className="text-xs px-2 py-1 bg-white text-gray-700 rounded-full border border-gray-200"
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

        {/* Achievements Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
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

        {/* Journey Timeline */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The evolution of my career and the key milestones that shaped 
                my expertise in web development.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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