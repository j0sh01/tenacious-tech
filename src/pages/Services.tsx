import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Code, Smartphone, Database, Cloud, Zap, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
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

    const serviceCards = sectionRef.current?.querySelectorAll('.service-card');
    serviceCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Frappe Development',
      description: t('services_frappe_desc'),
      features: [
        t('services_frappe_feature1', 'ERPNext Customization & Implementation'),
        t('services_frappe_feature2', 'Custom App Development on Frappe Framework'),
        t('services_frappe_feature3', 'Third-party Integration Solutions'),
        t('services_frappe_feature4', 'Performance Optimization & Scaling'),
        t('services_frappe_feature5', 'Data Migration & System Upgrades'),
        t('services_frappe_feature6', 'Custom Workflow Automation')
      ],
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: t('services_mobile_desc'),
      features: [
        t('services_mobile_feature1', 'iOS & Android Native Development'),
        t('services_mobile_feature2', 'React Native Cross-platform Solutions'),
        t('services_mobile_feature3', 'Progressive Web Apps (PWA)'),
        t('services_mobile_feature4', 'UI/UX Design & Prototyping'),
        t('services_mobile_feature5', 'App Store Optimization'),
        t('services_mobile_feature6', 'Mobile Backend Services')
      ],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Database,
      title: 'Custom Systems',
      description: t('services_custom_desc'),
      features: [
        t('services_custom_feature1', 'Web Application Development'),
        t('services_custom_feature2', 'API Development & Integration'),
        t('services_custom_feature3', 'Database Design & Optimization'),
        t('services_custom_feature4', 'Microservices Architecture'),
        t('services_custom_feature5', 'Legacy System Modernization'),
        t('services_custom_feature6', 'Business Process Automation')
      ],
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: t('services_cloud_desc', 'Scalable cloud infrastructure and deployment solutions that ensure your applications perform optimally at any scale.'),
      features: [
        t('services_cloud_feature1', 'Cloud Architecture Design'),
        t('services_cloud_feature2', 'AWS/Azure/GCP Deployment'),
        t('services_cloud_feature3', 'DevOps & CI/CD Implementation'),
        t('services_cloud_feature4', 'Container Orchestration'),
        t('services_cloud_feature5', 'Infrastructure as Code'),
        t('services_cloud_feature6', 'Cloud Security & Monitoring')
      ],
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: t('services_performance_desc', 'Advanced optimization techniques to ensure your applications run at peak performance with maximum efficiency.'),
      features: [
        t('services_performance_feature1', 'Application Performance Tuning'),
        t('services_performance_feature2', 'Database Query Optimization'),
        t('services_performance_feature3', 'Caching Strategy Implementation'),
        t('services_performance_feature4', 'Load Balancing & Scaling'),
        t('services_performance_feature5', 'Code Review & Refactoring'),
        t('services_performance_feature6', 'Performance Monitoring Setup')
      ],
      gradient: 'from-yellow-500/20 to-orange-500/20',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: t('services_security_desc', 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.'),
      features: [
        t('services_security_feature1', 'Security Audit & Assessment'),
        t('services_security_feature2', 'Penetration Testing'),
        t('services_security_feature3', 'GDPR/HIPAA Compliance'),
        t('services_security_feature4', 'Data Encryption Implementation'),
        t('services_security_feature5', 'Access Control & Authentication'),
        t('services_security_feature6', 'Security Monitoring & Response')
      ],
      gradient: 'from-indigo-500/20 to-purple-500/20',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Our Services - Software Development & Technology Solutions"
        description="Comprehensive technology solutions including Frappe development, mobile applications, custom systems, cloud solutions, and performance optimization services in Tanzania."
        keywords="software development services, Frappe development, mobile app development, custom software, cloud solutions, performance optimization, security solutions, Tanzania"
        url="https://tenacioustech.com/services"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="font-space font-bold text-4xl sm:text-5xl md:text-7xl mb-6">
              {t('services_title')} <span className="text-tech-electric">{t('nav_services')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {t('services_desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card glass-morphism p-6 lg:p-8 rounded-2xl hover-glow transition-all duration-500 bg-gradient-to-br ${service.gradient} opacity-0`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <service.icon className="w-12 h-12 text-tech-electric mb-4" />
                  <h3 className="font-space font-semibold text-xl lg:text-2xl mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed text-sm lg:text-base">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-white/70 text-sm lg:text-base">
                      <div className="w-2 h-2 bg-tech-electric rounded-full mr-3 mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
