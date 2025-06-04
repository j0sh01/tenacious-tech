
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: ['123 Innovation Street', 'Tech City, TC 12345']
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: ['hello@tenacioustech.com', 'support@tenacioustech.com']
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM']
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-6xl mb-6">
            Let's Build Something
            <span className="text-tech-electric block">Amazing Together</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Get in touch with our team 
            and let's discuss how we can help your business thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="glass-morphism p-6 sm:p-8 rounded-2xl space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 min-h-32"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-tech-blue hover:bg-tech-electric transition-all duration-300 hover-glow py-3 text-lg"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="glass-morphism p-6 sm:p-8 rounded-2xl">
              <h3 className="font-space font-semibold text-2xl mb-6 text-white">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
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
                ))}
              </div>
            </div>

            <div className="glass-morphism p-6 sm:p-8 rounded-2xl">
              <h3 className="font-space font-semibold text-xl mb-4 text-white">
                Why Choose TenaciousTech?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-white/80 text-sm">
                  <div className="w-2 h-2 bg-tech-electric rounded-full mr-3" />
                  24/7 Support & Maintenance
                </li>
                <li className="flex items-center text-white/80 text-sm">
                  <div className="w-2 h-2 bg-tech-electric rounded-full mr-3" />
                  Certified Frappe Developers
                </li>
                <li className="flex items-center text-white/80 text-sm">
                  <div className="w-2 h-2 bg-tech-electric rounded-full mr-3" />
                  Agile Development Process
                </li>
                <li className="flex items-center text-white/80 text-sm">
                  <div className="w-2 h-2 bg-tech-electric rounded-full mr-3" />
                  Transparent Communication
                </li>
                <li className="flex items-center text-white/80 text-sm">
                  <div className="w-2 h-2 bg-tech-electric rounded-full mr-3" />
                  Proven Track Record
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
