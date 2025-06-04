
const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="font-space font-bold text-2xl text-white mb-4">
              Tenacious<span className="text-tech-electric">Tech</span>
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Pioneering the future of software development with innovative Frappe solutions, 
              mobile applications, and custom systems.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li>Frappe Development</li>
              <li>Mobile Apps</li>
              <li>Custom Systems</li>
              <li>Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-white/70">
              <li>hello@tenacioustech.com</li>
              <li>+1 (555) 123-4567</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 TenaciousTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
