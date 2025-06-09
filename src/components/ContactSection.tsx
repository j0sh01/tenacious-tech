
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Send, Zap } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  
  const [state, handleFormspreeSubmit] = useForm("xjkrgyek");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    await handleFormspreeSubmit(e);
  };

  if (state.succeeded) {
    toast({
      title: "Message Sent Successfully! 🎉",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: ['Dar es Salaam', 'Tanzania'],
      gradient: 'from-cyber-blue/20 to-cyber-green/20'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: ['+255 748 624 706'],
      gradient: 'from-cyber-green/20 to-cyber-purple/20'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: ['info@tenacioustech.com', 'support@tenacioustech.com'],
      gradient: 'from-cyber-purple/20 to-cyber-pink/20'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: ['Mon - Fri: 8:30 AM - 6:00 PM'],
      gradient: 'from-cyber-pink/20 to-cyber-blue/20'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyber-green/20 border border-cyber-green/30 rounded-full text-cyber-green text-sm font-medium neo-brutalism">
              🚀 Ready to Launch?
            </span>
          </div>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-6xl mb-6">
            Let's Create Something
            <span className="gradient-text block neon-text">Extraordinary</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your vision into digital reality? Connect with our cyber-architects 
            and let's engineer the future together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="interactive-card">
            <form onSubmit={handleSubmit} className="glass-morphism p-8 rounded-2xl space-y-6 tech-border neo-brutalism">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="form-field">
                  <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-white/5 border-cyber-purple/30 text-white placeholder:text-white/40 transition-all duration-300 ${
                      errors.name ? 'border-red-500' : 'focus:border-cyber-purple focus:shadow-lg focus:shadow-cyber-purple/20'
                    }`}
                    placeholder="Your name"
                    disabled={state.submitting}
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="form-field">
                  <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-white/5 border-cyber-purple/30 text-white placeholder:text-white/40 transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'focus:border-cyber-purple focus:shadow-lg focus:shadow-cyber-purple/20'
                    }`}
                    placeholder="your@email.com"
                    disabled={state.submitting}
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-white/5 border-cyber-purple/30 text-white placeholder:text-white/40 min-h-32 transition-all duration-300 ${
                    errors.message ? 'border-red-500' : 'focus:border-cyber-purple focus:shadow-lg focus:shadow-cyber-purple/20'
                  }`}
                  placeholder="Tell us about your vision..."
                  disabled={state.submitting}
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                <div className="text-right text-xs text-white/50 mt-1">
                  {formData.message.length}/500
                </div>
              </div>
              <Button 
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-cyber-purple to-cyber-blue hover:from-cyber-blue hover:to-cyber-green transition-all duration-300 cyber-glow py-3 text-lg btn-primary group relative overflow-hidden neo-brutalism border-0"
              >
                {state.submitting ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="glass-morphism p-8 rounded-2xl interactive-card tech-border neo-brutalism">
              <h3 className="font-space font-semibold text-2xl mb-6 text-white flex items-center">
                <Zap className="w-6 h-6 mr-2 text-cyber-purple" />
                Get in Touch
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className={`bg-gradient-to-br ${info.gradient} p-4 rounded-xl hover:scale-105 transition-transform duration-300 cyber-glow`}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cyber-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-cyber-purple" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">{info.title}</h4>
                        {info.content.map((item, itemIndex) => (
                          <p key={itemIndex} className="text-white/70 text-sm">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-morphism p-8 rounded-2xl interactive-card tech-border neo-brutalism">
              <h3 className="font-space font-semibold text-xl mb-4 text-white">
                Why Choose TenaciousTech?
              </h3>
              <ul className="space-y-3">
                {[
                  '24/7 Cyber Support',
                  'Certified Tech Architects',
                  'Agile Innovation Process',
                  'Transparent Communication',
                  'Proven Digital Mastery'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-white/70 text-sm hover:text-white hover:translate-x-2 transition-all duration-200">
                    <div className="w-2 h-2 bg-cyber-purple rounded-full mr-3 animate-pulse" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
