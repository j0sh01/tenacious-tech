
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageToggle from '@/components/LanguageToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Frappe Solutions', href: '/frappe-solutions' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Team', href: '/team' },
    { 
      name: 'About', 
      href: '#about',
      onClick: () => {
        if (location.pathname === '/') {
          const element = document.getElementById('about');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = '/#about';
        }
      }
    },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism backdrop-blur-xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="font-space font-bold text-xl text-white hover:text-tech-electric transition-colors">
              Tenacious<span className="text-tech-electric">Tech</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.onClick ? (
                  <button
                    key={item.name}
                    onClick={item.onClick}
                    className="text-white/80 hover:text-tech-electric transition-colors duration-200 text-sm font-medium"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-white/80 hover:text-tech-electric transition-colors duration-200 text-sm font-medium ${
                      location.pathname === item.href ? 'text-tech-electric' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <LanguageToggle />
              <Button 
                className="bg-tech-electric hover:bg-tech-electric/80 text-white border-0"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageToggle />
              <button
                onClick={toggleMenu}
                className="text-white hover:text-tech-electric transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-16 left-0 right-0 bottom-0 glass-morphism backdrop-blur-xl border-t border-white/10 overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  item.onClick ? (
                    <button
                      key={item.name}
                      onClick={() => {
                        item.onClick();
                        setIsMenuOpen(false);
                      }}
                      className="text-white/80 hover:text-tech-electric transition-colors duration-200 text-left py-2 text-lg font-medium"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-white/80 hover:text-tech-electric transition-colors duration-200 py-2 text-lg font-medium ${
                        location.pathname === item.href ? 'text-tech-electric' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                <div className="pt-4">
                  <Button 
                    className="w-full bg-tech-electric hover:bg-tech-electric/80 text-white border-0"
                    onClick={() => {
                      setIsMenuOpen(false);
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
