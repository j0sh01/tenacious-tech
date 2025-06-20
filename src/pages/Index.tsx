import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.scrollToContact) {
      const element = document.getElementById('contact');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);
  return (
    <div className="min-h-screen">
      <SEO
        title="TenaciousTech - Innovative Software Solutions"
        description="TenaciousTech specializes in cutting-edge Frappe-based solutions, mobile applications, and custom systems. Transform your business with innovative technology solutions in Tanzania."
        keywords="Frappe development, ERPNext, mobile app development, custom software solutions, Tanzania software company, Dar es Salaam tech, business automation"
        url="https://tenacioustech.com"
      />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
