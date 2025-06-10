
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  
  // Service-related words for typing animation
  const serviceWords = [
    'Frappe Development',
    'Mobile Applications', 
    'Custom Systems',
    'ERP Solutions',
    'API Integrations',
    'Cloud Infrastructure'
  ];
  
  const typedText = useTypingAnimation(serviceWords, 150, 2000);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.fade-in-element');
      elements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="min-h-screen relative overflow-hidden flex items-center pt-16 md:pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-dark via-tech-darker to-tech-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-tech-primary rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-tech-accent rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-tech-secondary rounded-full animate-pulse delay-2000" />
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-tech-primary rounded-full animate-pulse delay-500" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <div className="fade-in-element opacity-0 mb-6 sm:mb-8">
            <h1 className="font-space font-bold text-3xl sm:text-5xl lg:text-7xl xl:text-8xl leading-tight">
              <span className="block text-tech-light">TenaciousTech</span>
              <span className="block gradient-text neon-glow mt-2">
                Innovation Through Technology
              </span>
            </h1>
          </div>

          {/* Typing Animation Section */}
          <div className="fade-in-element opacity-0 mb-6 sm:mb-8">
            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-space font-semibold text-tech-primary mb-4">
              We specialize in{' '}
              <span className="text-tech-accent border-r-2 border-tech-accent animate-pulse">
                {typedText}
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <div className="fade-in-element opacity-0 mb-8 sm:mb-12">
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-tech-muted max-w-4xl mx-auto leading-relaxed px-4">
              We deliver cutting-edge Frappe-based solutions, mobile applications, 
              and custom systems that transform businesses and drive digital innovation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-element opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
            <Link to="/services">
              <button className="w-full sm:w-auto bg-gradient-to-r from-tech-primary to-tech-accent hover:from-tech-accent hover:to-tech-secondary transition-all duration-300 tech-glow px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-tech-light font-medium inline-flex items-center justify-center group modern-card border-0 text-base sm:text-lg">
                Explore Our Services
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <button className="w-full sm:w-auto glass-card border border-tech-primary/30 hover:border-tech-primary/60 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-tech-light font-medium inline-flex items-center justify-center group modern-card text-base sm:text-lg">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="fade-in-element opacity-0 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              { number: '100+', label: 'Projects Delivered' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-space font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-tech-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-tech-light/60 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-tech-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tech-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
