
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Smartphone, Settings } from 'lucide-react';

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
      description: 'Next-generation ERP solutions powered by advanced Frappe architecture, engineered to revolutionize your business operations.',
      features: ['ERPNext Customization', 'Custom App Development', 'API Integrations', 'Performance Optimization'],
      gradient: 'from-cyber-purple/20 to-cyber-blue/20',
      icon: Zap,
    },
    {
      title: 'Mobile Applications',
      description: 'Immersive cross-platform mobile experiences that deliver seamless performance across all devices and platforms.',
      features: ['React Native Solutions', 'Native Development', 'UI/UX Innovation', 'App Store Success'],
      gradient: 'from-cyber-blue/20 to-cyber-green/20',
      icon: Smartphone,
    },
    {
      title: 'Custom Systems',
      description: 'Bespoke software architectures designed to solve complex challenges and accelerate your digital transformation.',
      features: ['Web Applications', 'API Architecture', 'Database Design', 'Cloud Infrastructure'],
      gradient: 'from-cyber-green/20 to-cyber-pink/20',
      icon: Settings,
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyber-blue/20 border border-cyber-blue/30 rounded-full text-cyber-blue text-sm font-medium neo-brutalism">
              💡 Our Core Expertise
            </span>
          </div>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-6xl mb-6">
            Cutting-Edge <span className="gradient-text neon-text">Solutions</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            We deliver innovative solutions across multiple platforms and technologies, 
            ensuring your business dominates the digital landscape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card glass-morphism p-8 rounded-2xl cyber-glow transition-all duration-500 bg-gradient-to-br ${service.gradient} opacity-0 tech-border neo-brutalism`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="mb-6 flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-space font-semibold text-xl lg:text-2xl text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed text-sm lg:text-base">
                {service.description}
              </p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white/60 text-sm lg:text-base">
                    <div className="w-2 h-2 bg-cyber-purple rounded-full mr-3 animate-pulse" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <button className="bg-gradient-to-r from-cyber-purple to-cyber-blue hover:from-cyber-blue hover:to-cyber-green transition-all duration-300 cyber-glow px-8 py-4 rounded-lg text-white font-medium inline-flex items-center group neo-brutalism border-0">
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
