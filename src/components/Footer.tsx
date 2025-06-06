
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, Instagram, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const frappeProducts = [
    { name: 'ERPNext', url: 'https://frappe.io/erpnext' },
    { name: 'Frappe HR', url: 'https://frappe.io/hr' },
    { name: 'Frappe CRM', url: 'https://frappe.io/crm' },
    { name: 'Frappe Helpdesk', url: 'https://frappe.io/helpdesk' },
  ];

  const quickLinks = [
    { name: 'Services', to: '/services' },
    { name: 'Frappe Solutions', to: '/frappe-solutions' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'About Us', action: () => {
      const element = document.getElementById('about');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }},
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/tenacioustech',
      color: 'hover:text-pink-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/tenacioustech',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/tenacioustech',
      color: 'hover:text-white'
    },
    {
      name: 'Twitter/X',
      icon: Twitter,
      url: 'https://twitter.com/tenacioustech',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <footer className="py-16 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-space font-bold text-2xl text-white mb-4">
              Tenacious<span className="text-tech-electric">Tech</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Pioneering the future of software development with innovative Frappe solutions, 
              mobile applications, and custom systems that drive digital transformation.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-white/70 text-sm">
                <Mail className="w-4 h-4 mr-3 text-tech-electric" />
                info@tenacioustech.com
              </div>
              <div className="flex items-center text-white/70 text-sm">
                <Phone className="w-4 h-4 mr-3 text-tech-electric" />
                +255 748 624 706
              </div>
              <div className="flex items-center text-white/70 text-sm">
                <MapPin className="w-4 h-4 mr-3 text-tech-electric" />
                Dar es Salaam, Tanzania
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white text-sm">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white/60 transition-colors duration-200 ${social.color} hover:scale-110 transform transition-transform`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.to ? (
                    <Link 
                      to={link.to}
                      className="text-white/70 hover:text-tech-electric transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button 
                      onClick={link.action}
                      className="text-white/70 hover:text-tech-electric transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="hover:text-tech-electric transition-colors duration-200 cursor-pointer">Frappe Development</li>
              <li className="hover:text-tech-electric transition-colors duration-200 cursor-pointer">Mobile Apps</li>
              <li className="hover:text-tech-electric transition-colors duration-200 cursor-pointer">Custom Systems</li>
              <li className="hover:text-tech-electric transition-colors duration-200 cursor-pointer">Cloud Solutions</li>
              <li className="hover:text-tech-electric transition-colors duration-200 cursor-pointer">Consulting</li>
              <li className="hover:text-tech-electric transition-colors duration-200 cursor-pointer">Support & Maintenance</li>
            </ul>
          </div>
          
          {/* Frappe Products */}
          <div>
            <h4 className="font-semibold text-white mb-6">Frappe Ecosystem</h4>
            <ul className="space-y-3">
              {frappeProducts.map((product, index) => (
                <li key={index}>
                  <a 
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-tech-electric transition-colors duration-200 text-sm flex items-center group"
                  >
                    {product.name}
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
              <li>
                <Link 
                  to="/frappe-solutions"
                  className="text-tech-electric hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  View All Solutions →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-white/60 text-sm text-center sm:text-left">
              &copy; {currentYear} TenaciousTech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-white/60 hover:text-tech-electric transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-white/60 hover:text-tech-electric transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-white/60 hover:text-tech-electric transition-colors duration-200">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
