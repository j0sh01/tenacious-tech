
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
    "Cyber Innovation", 
    "Digital Evolution",
    "Tech Mastery"
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
      {/* Cyber grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated cyber elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyber-purple/30 to-cyber-blue/30 animate-float-cyber blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '10%',
          }}
        />
        <div 
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-cyber-blue/30 to-cyber-green/30 animate-float-cyber blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
            top: '60%',
            right: '15%',
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-cyber-green/30 to-cyber-pink/30 animate-float-cyber blur-3xl"
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
        <Zap className="absolute w-8 h-8 text-cyber-purple/30 animate-float-cyber" style={{ top: '20%', left: '20%', animationDelay: '1s' }} />
        <Code className="absolute w-6 h-6 text-cyber-blue/30 animate-float-cyber" style={{ top: '70%', right: '30%', animationDelay: '3s' }} />
        <Cpu className="absolute w-10 h-10 text-cyber-green/30 animate-float-cyber" style={{ bottom: '30%', left: '80%', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyber-purple/20 border border-cyber-purple/30 rounded-full text-cyber-purple text-sm font-medium neo-brutalism">
              🚀 Pioneering Digital Innovation
            </span>
          </div>
          
          <h1 className="font-space font-bold text-4xl sm:text-6xl lg:text-8xl mb-6 leading-tight">
            Building
            <span className="gradient-text block min-h-[1.2em] neon-text">
              {animatedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/70 mb-8 max-w-4xl mx-auto leading-relaxed px-4 transition-all duration-700 delay-300">
            We architect cutting-edge Frappe ecosystems, craft immersive mobile experiences, 
            and engineer custom systems that redefine digital boundaries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 transition-all duration-700 delay-500">
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyber-purple to-cyber-blue hover:from-cyber-blue hover:to-cyber-green transition-all duration-300 cyber-glow text-lg px-8 py-4 w-full sm:w-auto group neo-brutalism border-0"
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
                className="border-cyber-purple/50 text-white hover:bg-cyber-purple/20 hover:border-cyber-purple transition-all duration-300 text-lg px-8 py-4 w-full sm:w-auto group neo-brutalism"
              >
                <span className="group-hover:scale-110 transition-transform flex items-center">
                  Explore Work <Code className="w-4 h-4 ml-2" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced cyber scroll indicator */}
      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform group"
      >
        <div className="w-8 h-12 border-2 border-cyber-purple/50 rounded-full flex justify-center group-hover:border-cyber-purple transition-colors tech-border">
          <ChevronDown className="w-4 h-4 text-cyber-purple/60 mt-2 group-hover:text-cyber-purple transition-colors" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
