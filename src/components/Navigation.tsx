
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    { label: 'Home', action: () => scrollToSection('home') },
    { label: 'Services', to: '/services' },
    { label: 'Frappe Solutions', to: '/frappe-solutions' },
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-morphism py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="font-space font-bold text-xl sm:text-2xl text-white">
          Tenacious<span className="text-tech-electric">Tech</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            item.to ? (
              <Link 
                key={index}
                to={item.to}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <button 
                key={index}
                onClick={item.action}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </button>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button className="bg-tech-blue hover:bg-tech-electric transition-all duration-300 hover-glow">
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-morphism mt-4 mx-4 rounded-2xl p-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              item.to ? (
                <Link 
                  key={index}
                  to={item.to}
                  className="text-white/80 hover:text-white transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button 
                  key={index}
                  onClick={item.action}
                  className="text-white/80 hover:text-white transition-colors duration-200 py-2 text-left"
                >
                  {item.label}
                </button>
              )
            ))}
            <Button className="bg-tech-blue hover:bg-tech-electric transition-all duration-300 mt-4">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
