
import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react';

const Portfolio = () => {
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

    const projectCards = sectionRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Global Manufacturing ERP',
      category: 'Frappe/ERPNext',
      description: 'Complete ERP implementation for a multinational manufacturing company with custom modules for production planning and quality control.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      technologies: ['ERPNext', 'Python', 'Frappe Framework', 'MySQL'],
      features: [
        'Multi-location inventory management',
        'Advanced production planning',
        'Quality control workflows',
        'Real-time reporting dashboards'
      ],
      metrics: {
        users: '500+',
        efficiency: '40%',
        timeline: '6 months'
      }
    },
    {
      title: 'Healthcare Management Mobile App',
      category: 'Mobile Development',
      description: 'Cross-platform mobile application for healthcare providers with patient management, appointment scheduling, and telemedicine features.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Node.js', 'Firebase', 'WebRTC'],
      features: [
        'Patient portal with medical records',
        'Video consultation integration',
        'Appointment scheduling system',
        'Prescription management'
      ],
      metrics: {
        users: '10K+',
        efficiency: '60%',
        timeline: '8 months'
      }
    },
    {
      title: 'E-commerce Analytics Platform',
      category: 'Custom System',
      description: 'Advanced analytics platform for e-commerce businesses with real-time data processing and AI-powered insights.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
      features: [
        'Real-time sales analytics',
        'Customer behavior tracking',
        'Inventory optimization AI',
        'Predictive analytics engine'
      ],
      metrics: {
        users: '50+',
        efficiency: '75%',
        timeline: '4 months'
      }
    },
    {
      title: 'Educational Institution Management',
      category: 'Frappe Education',
      description: 'Comprehensive education management system for a university with student information system and learning management features.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
      technologies: ['Frappe Education', 'Python', 'MariaDB', 'Redis'],
      features: [
        'Student lifecycle management',
        'Online examination system',
        'Fee management & billing',
        'Parent-teacher communication'
      ],
      metrics: {
        users: '5K+',
        efficiency: '50%',
        timeline: '5 months'
      }
    },
    {
      title: 'Financial Services CRM',
      category: 'Frappe CRM',
      description: 'Customer relationship management system for a financial services company with advanced lead scoring and automation.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      technologies: ['Frappe CRM', 'Python', 'REST APIs', 'Redis'],
      features: [
        'Lead scoring & qualification',
        'Automated follow-up workflows',
        'Document management system',
        'Compliance tracking'
      ],
      metrics: {
        users: '200+',
        efficiency: '65%',
        timeline: '3 months'
      }
    },
    {
      title: 'Supply Chain Optimization',
      category: 'Custom System',
      description: 'AI-powered supply chain optimization platform with predictive analytics and automated procurement workflows.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
      technologies: ['Django', 'Machine Learning', 'PostgreSQL', 'Docker'],
      features: [
        'Demand forecasting AI',
        'Automated procurement workflows',
        'Supplier performance analytics',
        'Risk assessment algorithms'
      ],
      metrics: {
        users: '100+',
        efficiency: '80%',
        timeline: '7 months'
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Our Portfolio - Successful Software Projects & Case Studies"
        description="Explore our portfolio of successful software projects including ERP implementations, mobile applications, and custom systems across various industries in Tanzania and beyond."
        keywords="software portfolio, project case studies, ERP implementations, mobile app projects, custom software solutions, Tanzania software projects"
        url="https://tenacioustech.com/portfolio"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="font-space font-bold text-4xl sm:text-5xl md:text-7xl mb-6">
              Our <span className="text-tech-electric">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Showcasing successful projects and innovative solutions that have transformed 
              businesses across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={sectionRef} className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-card glass-morphism rounded-2xl overflow-hidden hover-glow transition-all duration-500 opacity-0`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-tech-electric/20 backdrop-blur-sm text-tech-electric px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 lg:p-8">
                  <h3 className="font-space font-semibold text-xl lg:text-2xl mb-4 text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-white/70 text-sm">
                          <div className="w-2 h-2 bg-tech-electric rounded-full mr-3 mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Project Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Users className="w-4 h-4 text-tech-electric mr-1" />
                      </div>
                      <div className="font-semibold text-white">{project.metrics.users}</div>
                      <div className="text-xs text-white/60">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <TrendingUp className="w-4 h-4 text-tech-electric mr-1" />
                      </div>
                      <div className="font-semibold text-white">+{project.metrics.efficiency}</div>
                      <div className="text-xs text-white/60">Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Calendar className="w-4 h-4 text-tech-electric mr-1" />
                      </div>
                      <div className="font-semibold text-white">{project.metrics.timeline}</div>
                      <div className="text-xs text-white/60">Timeline</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="glass-morphism p-8 lg:p-16 rounded-2xl text-center">
            <h2 className="font-space font-bold text-3xl sm:text-4xl mb-6">
              Ready to Start Your <span className="text-tech-electric">Project?</span>
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our proven expertise 
              and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-tech-blue hover:bg-tech-electric transition-all duration-300 hover-glow px-8 py-4 rounded-lg text-white font-medium">
                Start a Project
              </button>
              <button className="border border-white/20 text-white hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-lg">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
