
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

    if (sectionRef.current) {
      const serviceCards = sectionRef.current.querySelectorAll('.service-card');
      serviceCards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Frappe Development',
      description: 'Next-generation ERP solutions powered by advanced Frappe architecture, engineered to revolutionize your business operations.',
      features: ['ERPNext Customization', 'Custom App Development', 'API Integrations', 'Performance Optimization'],
      gradient: 'from-tech-primary/20 to-tech-accent/20',
      icon: Zap,
    },
    {
      title: 'Mobile Applications',
      description: 'Immersive cross-platform mobile experiences that deliver seamless performance across all devices and platforms.',
      features: ['React Native Solutions', 'Native Development', 'UI/UX Innovation', 'App Store Success'],
      gradient: 'from-tech-accent/20 to-tech-secondary/20',
      icon: Smartphone,
    },
    {
      title: 'Custom Systems',
      description: 'Bespoke software architectures designed to solve complex challenges and accelerate your digital transformation.',
      features: ['Web Applications', 'API Architecture', 'Database Design', 'Cloud Infrastructure'],
      gradient: 'from-tech-secondary/20 to-tech-primary/20',
      icon: Settings,
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-tech-accent/20 border border-tech-accent/30 rounded-full text-tech-accent text-sm font-medium modern-card">
              Our Core Expertise
            </span>
          </div>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-6xl mb-6">
            Cutting-Edge <span className="gradient-text neon-glow">Solutions</span>
          </h2>
          <p className="text-lg sm:text-xl text-tech-muted max-w-4xl mx-auto leading-relaxed">
            We deliver innovative solutions across multiple platforms and technologies, 
            ensuring your business dominates the digital landscape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card glass-card p-8 rounded-2xl tech-glow transition-all duration-500 bg-gradient-to-br ${service.gradient} opacity-0 tech-border modern-card`}
            >
              <div className="mb-6 flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-tech-primary to-tech-accent rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-tech-light" />
                </div>
                <h3 className="font-space font-semibold text-xl lg:text-2xl text-tech-light">
                  {service.title}
                </h3>
              </div>
              <p className="text-tech-muted mb-6 leading-relaxed text-sm lg:text-base">
                {service.description}
              </p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-tech-muted text-sm lg:text-base">
                    <div className="w-2 h-2 bg-tech-primary rounded-full mr-3 animate-pulse" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <button className="bg-gradient-to-r from-tech-primary to-tech-accent hover:from-tech-accent hover:to-tech-secondary transition-all duration-300 tech-glow px-8 py-4 rounded-lg text-tech-light font-medium inline-flex items-center group modern-card border-0">
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
