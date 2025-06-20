import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-tech-dark text-white px-4">
      <h1 className="text-7xl font-extrabold mb-4 text-tech-electric drop-shadow-lg">404</h1>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t('notfound_title', "Oops! This page doesn't exist.")}</h2>
      <p className="text-lg mb-8 max-w-xl text-center">{t('notfound_desc', "We couldn't find the page you were looking for. But TenaciousTech is ready to build a custom solution for your business needs!")}</p>
      <Link to="/services" className="bg-tech-electric hover:bg-tech-primary text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300">{t('hero_cta')}</Link>
      <Link to="/" className="mt-4 text-tech-electric underline hover:text-tech-primary transition-all">{t('notfound_home', 'Back to Home')}</Link>
    </div>
  );
};

export default NotFound;
