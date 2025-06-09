
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Zap, Code, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const typingTexts = [
    "Next-Gen Solutions",
    "Digital Innovation", 
    "Tech Excellence",
    "Smart Systems"
  ];

  const animatedText = useTypingAnimation(typingTexts, 150, 3000);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const timer = setTimeout(() => setIsLoaded(true), 300);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 127, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 127, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated tech elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-tech-primary/30 to-tech-accent/30 animate-float-slow blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '10%',
          }}
        />
        <div 
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-tech-accent/30 to-tech-secondary/30 animate-float-slow blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
            top: '60%',
            right: '15%',
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-tech-secondary/30 to-tech-primary/30 animate-float-slow blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px)`,
            bottom: '20%',
            left: '60%',
            animationDelay: '4s',
          }}
        />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Zap className="absolute w-8 h-8 text-tech-primary/30 animate-float-slow" style={{ top: '20%', left: '20%', animationDelay: '1s' }} />
        <Code className="absolute w-6 h-6 text-tech-accent/30 animate-float-slow" style={{ top: '70%', right: '30%', animationDelay: '3s' }} />
        <Cpu className="absolute w-10 h-10 text-tech-secondary/30 animate-float-slow" style={{ bottom: '30%', left: '80%', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-tech-primary/20 border border-tech-primary/30 rounded-full text-tech-primary text-sm font-medium tech-glow">
              Pioneering Digital Innovation
            </span>
          </div>
          
          <h1 className="font-space font-bold text-4xl sm:text-6xl lg:text-8xl mb-6 leading-tight">
            Building
            <span className="gradient-text block min-h-[1.2em] neon-glow">
              {animatedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-tech-muted mb-8 max-w-4xl mx-auto leading-relaxed px-4 transition-all duration-700 delay-300">
            We architect cutting-edge Frappe ecosystems, craft immersive mobile experiences, 
            and engineer custom systems that redefine digital boundaries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 transition-all duration-700 delay-500">
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-tech-primary to-tech-accent hover:from-tech-accent hover:to-tech-secondary transition-all duration-300 tech-glow text-lg px-8 py-4 w-full sm:w-auto group modern-card border-0"
              >
                <span className="group-hover:scale-110 transition-transform flex items-center">
                  Launch Project <Zap className="w-4 h-4 ml-2" />
                </span>
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button 
                variant="outline" 
                size="lg"
                className="border-tech-primary/50 text-tech-light hover:bg-tech-primary/20 hover:border-tech-primary transition-all duration-300 text-lg px-8 py-4 w-full sm:w-auto group modern-card"
              >
                <span className="group-hover:scale-110 transition-transform flex items-center">
                  Explore Work <Code className="w-4 h-4 ml-2" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tech scroll indicator */}
      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform group"
      >
        <div className="w-8 h-12 border-2 border-tech-primary/50 rounded-full flex justify-center group-hover:border-tech-primary transition-colors tech-border">
          <ChevronDown className="w-4 h-4 text-tech-primary/60 mt-2 group-hover:text-tech-primary transition-colors" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
