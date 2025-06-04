
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.fade-in-element');
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '100+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-element opacity-0">
            <h2 className="font-space font-bold text-4xl md:text-6xl mb-6">
              Innovation Through
              <span className="text-tech-electric block">Technology</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              At TenaciousTech, we believe in pushing the boundaries of what's possible. 
              Our team of expert developers and designers work tirelessly to create solutions 
              that not only meet today's needs but anticipate tomorrow's challenges.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              From enterprise-grade Frappe applications to cutting-edge mobile experiences, 
              we combine technical excellence with creative innovation to deliver results 
              that exceed expectations.
            </p>
          </div>

          <div className="fade-in-element opacity-0">
            <div className="glass-morphism p-8 rounded-2xl">
              <h3 className="font-space font-semibold text-2xl mb-8 text-center">
                Our Impact
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-space font-bold text-3xl md:text-4xl text-tech-electric mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
