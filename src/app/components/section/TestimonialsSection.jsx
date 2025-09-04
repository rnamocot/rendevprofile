'use client';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "/images/testimonials/client1.jpg",
      rating: 5,
      text: "Renie delivered an exceptional e-commerce platform that exceeded our expectations. His expertise in React and Laravel helped us create a scalable solution that drives our business growth. The attention to detail and professional communication throughout the project was outstanding."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Digital Solutions Co.",
      image: "/images/testimonials/client2.jpg", 
      rating: 5,
      text: "Working with Renie was a game-changer for our company. He transformed our outdated website into a modern, responsive platform using Next.js. The performance improvements and user experience enhancements have significantly increased our conversion rates."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder",
      company: "Creative Studio",
      image: "/images/testimonials/client3.jpg",
      rating: 5,
      text: "Renie's WordPress expertise is remarkable. He built us a custom CMS solution with headless WordPress and React that perfectly fits our workflow. The project was delivered on time and within budget. Highly recommended!"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-gray-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-16 bg-gray-400 transform -rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-12 bg-gray-400 transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700 mb-6">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-gray-900" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-black transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-gray-900 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-16 border-t border-gray-100">
          <div className="text-center group">
            <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">50+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">99%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join these satisfied clients and let's build something amazing together.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}