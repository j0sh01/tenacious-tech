import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageToggle from '@/components/LanguageToggle';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

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

  const navItems: { name: string; href: string }[] = [
    { name: t('nav_home'), href: '/' },
    { name: t('nav_services'), href: '/services' },
    { name: t('nav_frappe'), href: '/frappe-solutions' },
    { name: t('nav_about'), href: '/about' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism backdrop-blur-xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with Tech Icon */}
            <Link to="/" className="flex items-center space-x-3 font-space font-bold text-lg sm:text-xl text-white hover:text-tech-electric transition-colors">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-tech-primary to-tech-accent rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white">
                  <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  <circle cx="8" cy="18" r="2" fill="currentColor"/>
                  <circle cx="16" cy="18" r="2" fill="currentColor"/>
                  <circle cx="12" cy="21" r="1" fill="currentColor"/>
                  <path d="M8 16v2M16 16v2M12 19v2" stroke="currentColor" strokeWidth="1" fill="none"/>
                </svg>
              </div>
              <span className="hidden sm:block">
                Tenacious<span className="text-tech-electric">Tech</span>
              </span>
              <span className="sm:hidden">
                T<span className="text-tech-electric">T</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-white/80 hover:text-tech-electric transition-colors duration-200 text-sm font-medium whitespace-nowrap ${
                    location.pathname === item.href ? 'text-tech-electric' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <LanguageToggle />
              <Button 
                className="bg-tech-electric hover:bg-tech-electric/80 text-white border-0 text-sm px-4 py-2"
                onClick={() => {
                  if (location.pathname === '/') {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/', { state: { scrollToContact: true } });
                  }
                }}
              >
                {t('nav_get_started')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <LanguageToggle />
              <button
                onClick={toggleMenu}
                className="text-white hover:text-tech-electric transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-16 md:top-20 left-0 right-0 bottom-0 glass-morphism backdrop-blur-xl border-t border-white/10 overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-white/80 hover:text-tech-electric transition-colors duration-200 py-3 text-lg font-medium border-b border-white/10 ${
                      location.pathname === item.href ? 'text-tech-electric' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button 
                    className="w-full bg-tech-electric hover:bg-tech-electric/80 text-white border-0"
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (location.pathname === '/') {
                        const element = document.getElementById('contact');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        navigate('/', { state: { scrollToContact: true } });
                      }
                    }}
                  >
                    {t('nav_get_started')}
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
