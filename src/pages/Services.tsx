
import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Code, Smartphone, Database, Cloud, Zap, Shield } from 'lucide-react';

const Services = () => {
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
      icon: Code,
      title: 'Frappe Development',
      description: 'Custom ERP solutions built on the powerful Frappe framework, tailored to streamline your business operations and drive efficiency.',
      features: [
        'ERPNext Customization & Implementation',
        'Custom App Development on Frappe Framework',
        'Third-party Integration Solutions',
        'Performance Optimization & Scaling',
        'Data Migration & System Upgrades',
        'Custom Workflow Automation'
      ],
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across all devices and platforms.',
      features: [
        'iOS & Android Native Development',
        'React Native Cross-platform Solutions',
        'Progressive Web Apps (PWA)',
        'UI/UX Design & Prototyping',
        'App Store Optimization',
        'Mobile Backend Services'
      ],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Database,
      title: 'Custom Systems',
      description: 'Bespoke software solutions designed to solve your unique business challenges and accelerate digital transformation.',
      features: [
        'Web Application Development',
        'API Development & Integration',
        'Database Design & Optimization',
        'Microservices Architecture',
        'Legacy System Modernization',
        'Business Process Automation'
      ],
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions that ensure your applications perform optimally at any scale.',
      features: [
        'Cloud Architecture Design',
        'AWS/Azure/GCP Deployment',
        'DevOps & CI/CD Implementation',
        'Container Orchestration',
        'Infrastructure as Code',
        'Cloud Security & Monitoring'
      ],
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Advanced optimization techniques to ensure your applications run at peak performance with maximum efficiency.',
      features: [
        'Application Performance Tuning',
        'Database Query Optimization',
        'Caching Strategy Implementation',
        'Load Balancing & Scaling',
        'Code Review & Refactoring',
        'Performance Monitoring Setup'
      ],
      gradient: 'from-yellow-500/20 to-orange-500/20',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
      features: [
        'Security Audit & Assessment',
        'Penetration Testing',
        'GDPR/HIPAA Compliance',
        'Data Encryption Implementation',
        'Access Control & Authentication',
        'Security Monitoring & Response'
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
              Our <span className="text-tech-electric">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business 
              and accelerate your digital journey with cutting-edge innovation.
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
