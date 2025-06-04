
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-morphism py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="font-space font-bold text-2xl text-white">
          Tenacious<span className="text-tech-electric">Tech</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            Contact
          </button>
        </div>

        <Button className="bg-tech-blue hover:bg-tech-electric transition-all duration-300 hover-glow">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
