
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', action: () => scrollToSection('home'), section: 'home' },
    { label: 'Services', to: '/services' },
    { label: 'Frappe Solutions', to: '/frappe-solutions' },
    { label: 'Team', to: '/team' },
    { label: 'About', action: () => scrollToSection('about'), section: 'about' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Contact', action: () => scrollToSection('contact'), section: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-morphism py-4 shadow-lg shadow-tech-blue/10' : 'py-6'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="font-space font-bold text-xl sm:text-2xl text-white hover:scale-105 transition-transform duration-200">
          Tenacious<span className="text-tech-electric">Tech</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            item.to ? (
              <Link 
                key={index}
                to={item.to}
                className={`text-white/80 hover:text-white transition-all duration-200 relative group ${
                  location.pathname === item.to ? 'text-tech-electric' : ''
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-electric transition-all duration-300 group-hover:w-full" />
              </Link>
            ) : (
              <button 
                key={index}
                onClick={item.action}
                className={`text-white/80 hover:text-white transition-all duration-200 relative group ${
                  activeSection === item.section ? 'text-tech-electric' : ''
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-electric transition-all duration-300 group-hover:w-full" />
              </button>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="relative w-6 h-6">
            <Menu className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} size={24} />
            <X className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} size={24} />
          </div>
        </button>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button className="bg-tech-blue hover:bg-tech-electric transition-all duration-300 hover-glow hover:scale-105">
            Get Started
          </Button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-b border-white/10 pt-24 pb-6">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                item.to ? (
                  <Link 
                    key={index}
                    to={item.to}
                    className="text-white/80 hover:text-white transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-white/10 hover:translate-x-2 transform text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button 
                    key={index}
                    onClick={item.action}
                    className="text-white/80 hover:text-white transition-all duration-200 py-3 px-4 rounded-lg hover:bg-white/10 text-left hover:translate-x-2 transform text-lg"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                )
              ))}
              <div className="pt-4">
                <Button className="bg-tech-blue hover:bg-tech-electric transition-all duration-300 mt-4 hover:scale-105 w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;
