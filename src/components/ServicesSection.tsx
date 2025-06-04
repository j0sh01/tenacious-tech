
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const serviceCards = sectionRef.current?.querySelectorAll('.service-card');
    serviceCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Frappe Development',
      description: 'Custom ERP solutions built on the powerful Frappe framework, tailored to streamline your business operations.',
      features: ['ERPNext Customization', 'Custom App Development', 'Integration Solutions', 'Performance Optimization'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.',
      features: ['iOS & Android Development', 'React Native Solutions', 'UI/UX Design', 'App Store Optimization'],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Custom Systems',
      description: 'Bespoke software solutions designed to solve your unique business challenges and drive growth.',
      features: ['Web Applications', 'API Development', 'Database Design', 'Cloud Architecture'],
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-6xl mb-6">
            Our <span className="text-tech-electric">Expertise</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            We deliver innovative solutions across multiple platforms and technologies, 
            ensuring your business stays ahead in the digital landscape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card glass-morphism p-6 lg:p-8 rounded-2xl hover-glow transition-all duration-500 bg-gradient-to-br ${service.gradient} opacity-0`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="font-space font-semibold text-xl lg:text-2xl mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed text-sm lg:text-base">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white/70 text-sm lg:text-base">
                    <div className="w-2 h-2 bg-tech-electric rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <button className="bg-tech-blue hover:bg-tech-electric transition-all duration-300 hover-glow px-8 py-4 rounded-lg text-white font-medium inline-flex items-center group">
              Explore All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
