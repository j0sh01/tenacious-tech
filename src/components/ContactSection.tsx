import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Send, Zap } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const [state, handleFormspreeSubmit] = useForm("xjkrgyek");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = t('contact_error_name_required', 'Name is required');
    if (!formData.email.trim()) newErrors.email = t('contact_error_email_required', 'Email is required');
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('contact_error_email_invalid', 'Email is invalid');
    if (!formData.message.trim()) newErrors.message = t('contact_error_message_required', 'Message is required');
    else if (formData.message.length < 10) newErrors.message = t('contact_error_message_short', 'Message must be at least 10 characters');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    await handleFormspreeSubmit(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: t('success_title'),
        description: t('success_desc'),
      });
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  }, [state.succeeded, t, toast]);

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact_visit_us', 'Visit Us'),
      content: [t('contact_location_city', 'Dar es Salaam'), t('contact_location_country', 'Tanzania')],
      gradient: 'from-tech-accent/20 to-tech-secondary/20'
    },
    {
      icon: Phone,
      title: t('contact_call_us', 'Call Us'),
      content: [t('contact_phone', '+255 748 624 706')],
      gradient: 'from-tech-secondary/20 to-tech-primary/20'
    },
    {
      icon: Mail,
      title: t('contact_email_us', 'Email Us'),
      content: [t('contact_email1', 'info@tenacioustech.com'), t('contact_email2', 'support@tenacioustech.com')],
      gradient: 'from-tech-primary/20 to-tech-accent/20'
    },
    {
      icon: Clock,
      title: t('contact_working_hours', 'Working Hours'),
      content: [t('contact_hours', 'Mon - Fri: 8:30 AM - 6:00 PM')],
      gradient: 'from-tech-accent/20 to-tech-primary/20'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-tech-secondary/20 border border-tech-secondary/30 rounded-full text-tech-secondary text-sm font-medium modern-card">
              {t('contact_tag', 'Contact Us')}
            </span>
          </div>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-6xl mb-6">
            {t('contact_heading', "Let's Create Something")}
            <span className="gradient-text block neon-glow">{t('contact_heading_accent', 'Extraordinary')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-tech-muted max-w-3xl mx-auto leading-relaxed">
            {t('contact_subtitle', "Ready to transform your vision into digital reality? Connect with our team and let's engineer the future together.")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="interactive-card">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6 tech-border modern-card">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="form-field">
                  <label htmlFor="name" className="block text-tech-light/80 mb-2 font-medium">
                    {t('name')} *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-tech-card border-tech-primary/30 text-black placeholder:text-tech-muted transition-all duration-300 ${
                      errors.name ? 'border-red-500' : 'focus:border-tech-primary focus:shadow-lg focus:shadow-tech-primary/20'
                    }`}
                    placeholder={t('contact_placeholder_name', 'Your name')}
                    disabled={state.submitting}
                  />
                  <ValidationError 
                    prefix={t('name')} 
                    field="name"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="form-field">
                  <label htmlFor="email" className="block text-tech-light/80 mb-2 font-medium">
                    {t('email')} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-tech-card border-tech-primary/30 text-black placeholder:text-tech-muted transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'focus:border-tech-primary focus:shadow-lg focus:shadow-tech-primary/20'
                    }`}
                    placeholder={t('contact_placeholder_email', 'your@email.com')}
                    disabled={state.submitting}
                  />
                  <ValidationError 
                    prefix={t('email')} 
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="message" className="block text-tech-light/80 mb-2 font-medium">
                  {t('message')} *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-tech-card border-tech-primary/30 text-black placeholder:text-tech-muted min-h-32 transition-all duration-300 ${
                    errors.message ? 'border-red-500' : 'focus:border-tech-primary focus:shadow-lg focus:shadow-tech-primary/20'
                  }`}
                  placeholder={t('contact_placeholder_message', 'Tell us about your vision...')}
                  disabled={state.submitting}
                />
                <ValidationError 
                  prefix={t('message')} 
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                <div className="text-right text-xs text-tech-muted mt-1">
                  {formData.message.length}/500
                </div>
              </div>
              <Button 
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-tech-primary to-tech-accent hover:from-tech-accent hover:to-tech-secondary transition-all duration-300 tech-glow py-3 text-lg btn-primary group relative overflow-hidden modern-card border-0"
              >
                {state.submitting ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  <span className="flex items-center justify-center">
                    {t('send')}
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl interactive-card tech-border modern-card">
              <h3 className="font-space font-semibold text-2xl mb-6 text-tech-light flex items-center">
                <Zap className="w-6 h-6 mr-2 text-tech-primary" />
                {t('contact_get_in_touch', 'Get in Touch')}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className={`bg-gradient-to-br ${info.gradient} p-4 rounded-xl hover:scale-105 transition-transform duration-300 tech-glow`}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-tech-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-tech-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-tech-light mb-2">{info.title}</h4>
                        {info.content.map((item, itemIndex) => (
                          <p key={itemIndex} className="text-tech-muted text-sm">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl interactive-card tech-border modern-card">
              <h3 className="font-space font-semibold text-xl mb-4 text-tech-light">
                {t('contact_why_choose', 'Why Choose TenaciousTech?')}
              </h3>
              <ul className="space-y-3">
                {[
                  t('contact_why_support', '24/7 Support'),
                  t('contact_why_architects', 'Certified Architects'),
                  t('contact_why_agile', 'Agile Process'),
                  t('contact_why_communication', 'Transparent Communication'),
                  t('contact_why_excellence', 'Proven Excellence')
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-tech-muted text-sm hover:text-tech-light hover:translate-x-2 transition-all duration-200">
                    <div className="w-2 h-2 bg-tech-primary rounded-full mr-3 animate-pulse" />
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
