
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent Successfully! 🎉",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: ['Dar es Salaam', 'Tanzania'],
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: ['+255 748 624 706'],
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: ['info@tenacioustech.com', 'support@tenacioustech.com'],
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: ['Mon - Fri: 8:30 AM - 6:00 PM'],
      gradient: 'from-orange-500/20 to-red-500/20'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-6xl mb-6">
            Let's Build Something
            <span className="text-tech-electric block gradient-text">Amazing Together</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Get in touch with our team 
            and let's discuss how we can help your business thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Enhanced Contact Form */}
          <div className="interactive-card">
            <form onSubmit={handleSubmit} className="glass-morphism p-6 sm:p-8 rounded-2xl space-y-6">
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
                    className={`bg-white/5 border-white/20 text-white placeholder:text-white/50 transition-all duration-300 ${
                      errors.name ? 'border-red-500 shake' : 'focus:border-tech-electric'
                    }`}
                    placeholder="Your name"
                    disabled={isSubmitting}
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
                    className={`bg-white/5 border-white/20 text-white placeholder:text-white/50 transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'focus:border-tech-electric'
                    }`}
                    placeholder="your@email.com"
                    disabled={isSubmitting}
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
                  className={`bg-white/5 border-white/20 text-white placeholder:text-white/50 min-h-32 transition-all duration-300 ${
                    errors.message ? 'border-red-500' : 'focus:border-tech-electric'
                  }`}
                  placeholder="Tell us about your project..."
                  disabled={isSubmitting}
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                <div className="text-right text-xs text-white/50 mt-1">
                  {formData.message.length}/500
                </div>
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-tech-blue hover:bg-tech-electric transition-all duration-300 hover-glow hover:scale-105 py-3 text-lg btn-primary group relative overflow-hidden"
              >
                {isSubmitting ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  <>
                    <span className="flex items-center justify-center">
                      Send Message
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-6">
            <div className="glass-morphism p-6 sm:p-8 rounded-2xl interactive-card">
              <h3 className="font-space font-semibold text-2xl mb-6 text-white">
                Get in Touch
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className={`bg-gradient-to-br ${info.gradient} p-4 rounded-xl hover:scale-105 transition-transform duration-300`}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-tech-electric/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-tech-electric" />
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

            <div className="glass-morphism p-6 sm:p-8 rounded-2xl interactive-card">
              <h3 className="font-space font-semibold text-xl mb-4 text-white">
                Why Choose TenaciousTech?
              </h3>
              <ul className="space-y-3">
                {[
                  '24/7 Support & Maintenance',
                  'Certified Frappe Developers',
                  'Agile Development Process',
                  'Transparent Communication',
                  'Proven Track Record'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-white/80 text-sm hover:text-white hover:translate-x-2 transition-all duration-200">
                    <div className="w-2 h-2 bg-tech-electric rounded-full mr-3 animate-pulse" />
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
