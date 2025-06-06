
import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Language {
  code: string;
  name: string;
  flag: string;
  googleCode: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸', googleCode: 'en' },
  { code: 'sw', name: 'Kiswahili', flag: '🇹🇿', googleCode: 'sw' },
];

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const LanguageToggle = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  const [isTranslateReady, setIsTranslateReady] = useState(false);

  useEffect(() => {
    // Initialize Google Translate
    const initializeGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,sw',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
        setIsTranslateReady(true);
      }
    };

    // Set up the callback function
    window.googleTranslateElementInit = initializeGoogleTranslate;

    // Load Google Translate script if not already loaded
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.head.appendChild(script);
    } else {
      initializeGoogleTranslate();
    }

    return () => {
      // Cleanup
      delete window.googleTranslateElementInit;
    };
  }, []);

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language.code);
    
    if (isTranslateReady && window.google && window.google.translate) {
      const translateElement = window.google.translate.TranslateElement();
      if (translateElement) {
        // Trigger translation
        const selectElement = document.querySelector('select.goog-te-combo') as HTMLSelectElement;
        if (selectElement) {
          selectElement.value = language.googleCode;
          selectElement.dispatchEvent(new Event('change'));
        }
      }
    }
  };

  return (
    <>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 px-0 text-white/70 hover:text-white hover:bg-white/10"
          >
            <Globe className="h-4 w-4" />
            <span className="sr-only">Toggle language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="glass-morphism border-white/10">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className={`flex items-center space-x-2 text-white/80 hover:text-white hover:bg-white/10 ${
                currentLanguage.code === language.code ? 'bg-white/10' : ''
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-sm">{language.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default LanguageToggle;
