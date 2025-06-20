import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { ExternalLink, Users, TrendingUp, MessageSquare, HelpCircle, BarChart3, GraduationCap, CreditCard } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FrappeSolutions = () => {
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

    const productCards = sectionRef.current?.querySelectorAll('.product-card');
    productCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const frappeProducts = [
    {
      icon: TrendingUp,
      name: 'ERPNext',
      tagline: t('frappe_erpnext_tagline', 'Complete Business Solution'),
      description: t('frappe_erpnext_desc', "World's most agile ERP system that helps you take control of your business and drive growth with integrated modules for all business functions."),
      features: [
        t('frappe_erpnext_feature1', 'Financial Accounting & Management'),
        t('frappe_erpnext_feature2', 'Inventory & Stock Management'),
        t('frappe_erpnext_feature3', 'Sales & Purchase Management'),
        t('frappe_erpnext_feature4', 'Manufacturing & Production'),
        t('frappe_erpnext_feature5', 'Project Management'),
        t('frappe_erpnext_feature6', 'CRM Integration'),
      ],
      url: 'https://frappe.io/erpnext',
      gradient: 'from-blue-500/20 to-indigo-500/20',
    },
    {
      icon: Users,
      name: 'Frappe HR',
      tagline: t('frappe_hr_tagline', 'People-First HR Platform'),
      description: t('frappe_hr_desc', 'Modern HR management system that puts people first with comprehensive tools for managing your workforce efficiently.'),
      features: [
        t('frappe_hr_feature1', 'Employee Lifecycle Management'),
        t('frappe_hr_feature2', 'Payroll & Benefits Administration'),
        t('frappe_hr_feature3', 'Performance Management'),
        t('frappe_hr_feature4', 'Leave & Attendance Tracking'),
        t('frappe_hr_feature5', 'Recruitment & Onboarding'),
        t('frappe_hr_feature6', 'Training & Development'),
      ],
      url: 'https://frappe.io/hr',
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: MessageSquare,
      name: 'Frappe CRM',
      tagline: t('frappe_crm_tagline', 'Customer-Centric Sales'),
      description: t('frappe_crm_desc', 'Intuitive CRM platform designed to help you build stronger customer relationships and accelerate sales growth.'),
      features: [
        t('frappe_crm_feature1', 'Lead & Opportunity Management'),
        t('frappe_crm_feature2', 'Sales Pipeline Tracking'),
        t('frappe_crm_feature3', 'Customer Communication Hub'),
        t('frappe_crm_feature4', 'Deal & Quote Management'),
        t('frappe_crm_feature5', 'Sales Analytics & Reporting'),
        t('frappe_crm_feature6', 'Marketing Campaign Management'),
      ],
      url: 'https://frappe.io/crm',
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: HelpCircle,
      name: 'Frappe Helpdesk',
      tagline: t('frappe_helpdesk_tagline', 'Exceptional Support Experience'),
      description: t('frappe_helpdesk_desc', 'Customer support platform that helps you deliver exceptional service experiences and build customer satisfaction.'),
      features: [
        t('frappe_helpdesk_feature1', 'Multi-channel Ticket Management'),
        t('frappe_helpdesk_feature2', 'Knowledge Base & Self-Service'),
        t('frappe_helpdesk_feature3', 'SLA Management & Automation'),
        t('frappe_helpdesk_feature4', 'Customer Portal Access'),
        t('frappe_helpdesk_feature5', 'Performance Analytics'),
        t('frappe_helpdesk_feature6', 'Team Collaboration Tools'),
      ],
      url: 'https://frappe.io/helpdesk',
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      icon: BarChart3,
      name: 'Frappe Insights',
      tagline: t('frappe_insights_tagline', 'Data-Driven Decisions'),
      description: t('frappe_insights_desc', 'Business intelligence platform that transforms your data into actionable insights for smarter decision making.'),
      features: [
        t('frappe_insights_feature1', 'Interactive Dashboards'),
        t('frappe_insights_feature2', 'Custom Report Builder'),
        t('frappe_insights_feature3', 'Data Visualization Tools'),
        t('frappe_insights_feature4', 'Real-time Analytics'),
        t('frappe_insights_feature5', 'Automated Reporting'),
        t('frappe_insights_feature6', 'Multi-source Data Integration'),
      ],
      url: 'https://frappe.io/insights',
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: GraduationCap,
      name: 'Frappe Education',
      tagline: t('frappe_education_tagline', 'Complete Education Management'),
      description: t('frappe_education_desc', 'Comprehensive education management system for schools, colleges, and training institutes to streamline operations.'),
      features: [
        t('frappe_education_feature1', 'Student Information System'),
        t('frappe_education_feature2', 'Academic Planning & Scheduling'),
        t('frappe_education_feature3', 'Fee Management & Billing'),
        t('frappe_education_feature4', 'Examination & Grading'),
        t('frappe_education_feature5', 'Library Management'),
        t('frappe_education_feature6', 'Parent & Student Portals'),
      ],
      url: 'https://frappe.io/education',
      gradient: 'from-indigo-500/20 to-purple-500/20',
    },
    {
      icon: CreditCard,
      name: 'Frappe Lending',
      tagline: t('frappe_lending_tagline', 'Smart Lending Solutions'),
      description: t('frappe_lending_desc', 'Digital lending platform that streamlines loan processing and management with automated workflows and risk assessment.'),
      features: [
        t('frappe_lending_feature1', 'Loan Application Processing'),
        t('frappe_lending_feature2', 'Credit Risk Assessment'),
        t('frappe_lending_feature3', 'Automated Underwriting'),
        t('frappe_lending_feature4', 'Repayment Management'),
        t('frappe_lending_feature5', 'Compliance & Reporting'),
        t('frappe_lending_feature6', 'Customer Portal Access'),
      ],
      url: 'https://frappe.io/lending',
      gradient: 'from-yellow-500/20 to-orange-500/20',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title={t('frappe_solutions_title', 'Frappe Solutions - ERPNext, CRM, HR & Custom Development')}
        description={t('frappe_solutions_desc', 'Expert Frappe ecosystem implementation including ERPNext, Frappe HR, CRM, Helpdesk, and custom Frappe applications. Transform your business with proven Frappe solutions.')}
        keywords="Frappe solutions, ERPNext implementation, Frappe HR, Frappe CRM, Frappe Helpdesk, custom Frappe development, ERP solutions Tanzania"
        url="https://tenacioustech.com/frappe-solutions"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="font-space font-bold text-4xl sm:text-5xl md:text-7xl mb-6">
              {t('frappe_solutions_title', 'Frappe Solutions')}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              {t('frappe_solutions_hero', 'Leverage the power of the Frappe ecosystem with our expert implementation, customization, and integration services for all Frappe products.')}
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
                  {t('frappe_learn_more', 'Learn More')}
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
              {t('frappe_why_title', 'Why Choose Our')} <span className="text-tech-electric">Frappe Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-morphism p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-tech-electric/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-tech-electric" />
              </div>
              <h3 className="font-space font-semibold text-xl mb-4 text-white">{t('frappe_why_expert', 'Expert Implementation')}</h3>
              <p className="text-white/80">{t('frappe_why_expert_desc', 'Certified Frappe developers with years of experience in successful implementations across industries.')}</p>
            </div>
            
            <div className="glass-morphism p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-tech-electric/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-tech-electric" />
              </div>
              <h3 className="font-space font-semibold text-xl mb-4 text-white">{t('frappe_why_custom', 'Custom Solutions')}</h3>
              <p className="text-white/80">{t('frappe_why_custom_desc', 'Tailored configurations and custom apps built specifically for your business requirements and workflows.')}</p>
            </div>
            
            <div className="glass-morphism p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-tech-electric/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-tech-electric" />
              </div>
              <h3 className="font-space font-semibold text-xl mb-4 text-white">{t('frappe_why_support', 'Ongoing Support')}</h3>
              <p className="text-white/80">{t('frappe_why_support_desc', 'Comprehensive support and maintenance services to ensure your Frappe systems run smoothly 24/7.')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FrappeSolutions;
