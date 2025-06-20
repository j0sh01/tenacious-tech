import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, Instagram, Github, Linkedin, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  const frappeProducts = [
    { name: 'ERPNext', url: 'https://frappe.io/erpnext' },
    { name: 'Frappe HR', url: 'https://frappe.io/hr' },
    { name: 'Frappe CRM', url: 'https://frappe.io/crm' },
    { name: 'Frappe Helpdesk', url: 'https://frappe.io/helpdesk' },
  ];

  const quickLinks: { name: string; to: string }[] = [
    { name: t('nav_services'), to: '/services' },
    { name: t('nav_frappe'), to: '/frappe-solutions' },
    { name: t('nav_about'), to: '/about' },
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
              {t('footer_company')}
              <span className="text-tech-electric">Tech</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              {t('footer_tagline')}
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
              <h4 className="font-semibold text-white text-sm">{t('footer_follow')}</h4>
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
            <h4 className="font-semibold text-white mb-6">{t('footer_quick_links')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to}
                    className="text-white/70 hover:text-tech-electric transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6">{t('footer_services')}</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="hover:text-tech-electric transition-colors duration-200 cursor-pointer">{t('services_frappe_title')}</li>
              <li className="hover:text-tech-electric transition-colors duration-200 cursor-pointer">{t('services_mobile_title')}</li>
              <li className="hover:text-tech-electric transition-colors duration-200 cursor-pointer">{t('services_custom_title')}</li>
              <li className="hover:text-tech-electric transition-colors duration-200 cursor-pointer">Cloud Solutions</li>
              <li className="hover:text-tech-electric transition-colors duration-200 cursor-pointer">Consulting</li>
              <li className="hover:text-tech-electric transition-colors duration-200 cursor-pointer">Support & Maintenance</li>
            </ul>
          </div>
          
          {/* Frappe Products */}
          <div>
            <h4 className="font-semibold text-white mb-6">{t('footer_frappe')}</h4>
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
                  {t('footer_view_all')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-white/60 text-sm text-center sm:text-left">
              &copy; {currentYear} TenaciousTech. {t('footer_rights')}
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-white/60 hover:text-tech-electric transition-colors duration-200">
                {t('footer_privacy')}
              </button>
              <button className="text-white/60 hover:text-tech-electric transition-colors duration-200">
                {t('footer_terms')}
              </button>
              <button className="text-white/60 hover:text-tech-electric transition-colors duration-200">
                {t('footer_cookie')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
