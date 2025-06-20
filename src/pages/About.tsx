import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const stats = [
    { number: '60+', label: t('about_stats_projects') },
    { number: '30+', label: t('about_stats_clients') },
    { number: '3+', label: t('about_stats_years') },
    { number: '24/7', label: t('about_stats_support') },
  ];

  return (
    <div className="min-h-screen bg-tech-dark text-white">
      <Navigation />
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div>
              <h2 className="font-space font-bold text-2xl sm:text-3xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6">
                {t('about_title')}
                <span className="text-tech-primary block">{t('about_tech')}</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-tech-light/80 mb-4 sm:mb-6 leading-relaxed">
                {t('about_desc1')}
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-tech-muted mb-6 sm:mb-8 leading-relaxed">
                {t('about_desc2')}
              </p>
            </div>
            <div>
              <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl">
                <h3 className="font-space font-semibold text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-center">
                  {t('about_impact')}
                </h3>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="font-space font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-tech-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-tech-light/80 text-xs sm:text-sm">
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
      <section className="py-16 sm:py-20 bg-tech-dark text-white border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-space font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 text-tech-primary">{t('about_capabilities', 'Our Capabilities')}</h3>
            <p className="text-lg sm:text-xl text-tech-light/80 mb-6 leading-relaxed">
              {t('about_capabilities_desc', 'As a forward-thinking technology company, TenaciousTech delivers more than just software. We are passionate about leveraging the latest advancements in technology to solve real-world business challenges.')}
            </p>
            <ul className="text-left text-base sm:text-lg text-tech-muted mb-8 leading-relaxed space-y-4 mx-auto max-w-2xl">
              <li><span className="text-tech-electric font-semibold">AI Integration & Automation:</span> {t('about_capabilities_ai', 'We build intelligent systems that automate workflows, enhance decision-making, and drive efficiency using artificial intelligence and machine learning.')}</li>
              <li><span className="text-tech-electric font-semibold">Data Expertise:</span> {t('about_capabilities_data', 'Our team works with data of all kinds—structured, unstructured, big data, and real-time analytics—to unlock insights and power your business growth.')}</li>
              <li><span className="text-tech-electric font-semibold">Custom Digital Solutions:</span> {t('about_capabilities_custom', 'From ERP and mobile apps to cloud and API integrations, we tailor every solution to your unique requirements.')}</li>
              <li><span className="text-tech-electric font-semibold">Continuous Innovation:</span> {t('about_capabilities_innovation', 'We stay ahead of the curve, adopting new technologies and best practices to ensure your business remains competitive in a rapidly evolving digital landscape.')}</li>
            </ul>
            <p className="text-base sm:text-lg text-tech-light/70">{t('about_capabilities_cta', 'Ready to transform your business with technology?')} <span className="text-tech-electric font-semibold">{t('contact')}</span> {t('about_capabilities_cta2', 'to discuss your next project.')}</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About; 