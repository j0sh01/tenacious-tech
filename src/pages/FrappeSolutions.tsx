
import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ExternalLink, Users, TrendingUp, MessageSquare, HelpCircle, BarChart3, GraduationCap, CreditCard } from 'lucide-react';

const FrappeSolutions = () => {
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

    const productCards = sectionRef.current?.querySelectorAll('.product-card');
    productCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const frappeProducts = [
    {
      icon: TrendingUp,
      name: 'ERPNext',
      tagline: 'Complete Business Solution',
      description: 'World\'s most agile ERP system that helps you take control of your business and drive growth with integrated modules for all business functions.',
      features: [
        'Financial Accounting & Management',
        'Inventory & Stock Management',
        'Sales & Purchase Management',
        'Manufacturing & Production',
        'Project Management',
        'CRM Integration'
      ],
      url: 'https://frappe.io/erpnext',
      gradient: 'from-blue-500/20 to-indigo-500/20',
    },
    {
      icon: Users,
      name: 'Frappe HR',
      tagline: 'People-First HR Platform',
      description: 'Modern HR management system that puts people first with comprehensive tools for managing your workforce efficiently.',
      features: [
        'Employee Lifecycle Management',
        'Payroll & Benefits Administration',
        'Performance Management',
        'Leave & Attendance Tracking',
        'Recruitment & Onboarding',
        'Training & Development'
      ],
      url: 'https://frappe.io/hr',
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: MessageSquare,
      name: 'Frappe CRM',
      tagline: 'Customer-Centric Sales',
      description: 'Intuitive CRM platform designed to help you build stronger customer relationships and accelerate sales growth.',
      features: [
        'Lead & Opportunity Management',
        'Sales Pipeline Tracking',
        'Customer Communication Hub',
        'Deal & Quote Management',
        'Sales Analytics & Reporting',
        'Marketing Campaign Management'
      ],
      url: 'https://frappe.io/crm',
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: HelpCircle,
      name: 'Frappe Helpdesk',
      tagline: 'Exceptional Support Experience',
      description: 'Customer support platform that helps you deliver exceptional service experiences and build customer satisfaction.',
      features: [
        'Multi-channel Ticket Management',
        'Knowledge Base & Self-Service',
        'SLA Management & Automation',
        'Customer Portal Access',
        'Performance Analytics',
        'Team Collaboration Tools'
      ],
      url: 'https://frappe.io/helpdesk',
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      icon: BarChart3,
      name: 'Frappe Insights',
      tagline: 'Data-Driven Decisions',
      description: 'Business intelligence platform that transforms your data into actionable insights for smarter decision making.',
      features: [
        'Interactive Dashboards',
        'Custom Report Builder',
        'Data Visualization Tools',
        'Real-time Analytics',
        'Automated Reporting',
        'Multi-source Data Integration'
      ],
      url: 'https://frappe.io/insights',
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: GraduationCap,
      name: 'Frappe Education',
      tagline: 'Complete Education Management',
      description: 'Comprehensive education management system for schools, colleges, and training institutes to streamline operations.',
      features: [
        'Student Information System',
        'Academic Planning & Scheduling',
        'Fee Management & Billing',
        'Examination & Grading',
        'Library Management',
        'Parent & Student Portals'
      ],
      url: 'https://frappe.io/education',
      gradient: 'from-indigo-500/20 to-purple-500/20',
    },
    {
      icon: CreditCard,
      name: 'Frappe Lending',
      tagline: 'Smart Lending Solutions',
      description: 'Digital lending platform that streamlines loan processing and management with automated workflows and risk assessment.',
      features: [
        'Loan Application Processing',
        'Credit Risk Assessment',
        'Automated Underwriting',
        'Repayment Management',
        'Compliance & Reporting',
        'Customer Portal Access'
      ],
      url: 'https://frappe.io/lending',
      gradient: 'from-yellow-500/20 to-orange-500/20',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="font-space font-bold text-4xl sm:text-5xl md:text-7xl mb-6">
              Frappe <span className="text-tech-electric">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Leverage the power of the Frappe ecosystem with our expert implementation, 
              customization, and integration services for all Frappe products.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={sectionRef} className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {frappeProducts.map((product, index) => (
              <div
                key={index}
                className={`product-card glass-morphism p-6 rounded-2xl hover-glow transition-all duration-500 bg-gradient-to-br ${product.gradient} opacity-0 group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <product.icon className="w-12 h-12 text-tech-electric mb-4" />
                  <h3 className="font-space font-semibold text-xl mb-2 text-white">
                    {product.name}
                  </h3>
                  <p className="text-tech-electric text-sm font-medium mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-white/80 mb-6 leading-relaxed text-sm">
                    {product.description}
                  </p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-white/70 text-xs">
                      <div className="w-1.5 h-1.5 bg-tech-electric rounded-full mr-2 mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-tech-electric hover:text-white transition-colors duration-200 text-sm font-medium group-hover:translate-x-1 transform transition-transform"
                >
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Frappe Services */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
              Why Choose Our <span className="text-tech-electric">Frappe Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-morphism p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-tech-electric/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-tech-electric" />
              </div>
              <h3 className="font-space font-semibold text-xl mb-4 text-white">Expert Implementation</h3>
              <p className="text-white/80">Certified Frappe developers with years of experience in successful implementations across industries.</p>
            </div>
            
            <div className="glass-morphism p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-tech-electric/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-tech-electric" />
              </div>
              <h3 className="font-space font-semibold text-xl mb-4 text-white">Custom Solutions</h3>
              <p className="text-white/80">Tailored configurations and custom apps built specifically for your business requirements and workflows.</p>
            </div>
            
            <div className="glass-morphism p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-tech-electric/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-tech-electric" />
              </div>
              <h3 className="font-space font-semibold text-xl mb-4 text-white">Ongoing Support</h3>
              <p className="text-white/80">Comprehensive support and maintenance services to ensure your Frappe systems run smoothly 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FrappeSolutions;
