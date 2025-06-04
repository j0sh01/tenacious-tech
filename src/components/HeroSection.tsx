
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full bg-tech-blue/10 animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '10%',
          }}
        />
        <div 
          className="absolute w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 rounded-full bg-tech-electric/10 animate-float"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
            top: '60%',
            right: '15%',
            animationDelay: '1s',
          }}
        />
        <div 
          className="absolute w-56 sm:w-68 lg:w-80 h-56 sm:h-68 lg:h-80 rounded-full bg-purple-500/10 animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px)`,
            bottom: '20%',
            left: '60%',
            animationDelay: '2s',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-space font-bold text-4xl sm:text-6xl lg:text-8xl mb-6 leading-tight">
            Building
            <span className="bg-gradient-to-r from-tech-blue to-tech-electric bg-clip-text text-transparent block">
              Tomorrow's
            </span>
            Solutions
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            We specialize in cutting-edge Frappe-based solutions, innovative mobile applications, 
            and custom systems that drive digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-tech-blue hover:bg-tech-electric transition-all duration-300 hover-glow text-lg px-6 sm:px-8 py-4 w-full sm:w-auto"
              >
                Start Your Project
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 transition-all duration-300 text-lg px-6 sm:px-8 py-4 w-full sm:w-auto"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </button>
    </section>
  );
};

export default HeroSection;
