import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Smartphone, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

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
      description: t('services_frappe_desc'),
      features: [
        t('services_frappe_feature1', 'ERPNext Customization'),
        t('services_frappe_feature2', 'Custom App Development'),
        t('services_frappe_feature3', 'API Integrations'),
        t('services_frappe_feature4', 'Performance Optimization'),
      ],
      gradient: 'from-tech-primary/20 to-tech-accent/20',
      icon: Zap,
    },
    {
      title: 'Mobile Applications',
      description: t('services_mobile_desc'),
      features: [
        t('services_mobile_feature1', 'React Native Solutions'),
        t('services_mobile_feature2', 'Native Development'),
        t('services_mobile_feature3', 'UI/UX Innovation'),
        t('services_mobile_feature4', 'App Store Success'),
      ],
      gradient: 'from-tech-accent/20 to-tech-secondary/20',
      icon: Smartphone,
    },
    {
      title: 'Custom Systems',
      description: t('services_custom_desc'),
      features: [
        t('services_custom_feature1', 'Web Applications'),
        t('services_custom_feature2', 'API Architecture'),
        t('services_custom_feature3', 'Database Design'),
        t('services_custom_feature4', 'Cloud Infrastructure'),
      ],
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
              {t('services_tag')}
            </span>
          </div>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-6xl mb-6">
            {t('services_title')}
          </h2>
          <p className="text-lg sm:text-xl text-tech-muted max-w-4xl mx-auto leading-relaxed">
            {t('services_desc')}
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
              {t('services_see_all')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
