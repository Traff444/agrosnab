import { useState, useEffect } from 'react';
import { Sprout, Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`header ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="header-container max-w-[1200px] mx-auto px-4 md:px-6 py-3.5 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sprout className="w-7 h-7 md:w-8 md:h-8 text-color-accent" strokeWidth={1.8} />
          <span className="header-logo font-heading font-bold text-lg md:text-xl">АгроСнаб</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <button
            onClick={() => scrollToSection('catalog')}
            className="nav-link text-sm font-medium transition-colors duration-200"
          >
            Ассортимент
          </button>
          <button
            onClick={() => scrollToSection('how-to-order')}
            className="nav-link text-sm font-medium transition-colors duration-200"
          >
            Как заказать
          </button>
          <button
            onClick={() => scrollToSection('terms')}
            className="nav-link text-sm font-medium transition-colors duration-200"
          >
            Условия
          </button>
          <button
            onClick={() => scrollToSection('delivery')}
            className="nav-link text-sm font-medium transition-colors duration-200"
          >
            Доставка
          </button>
          <button
            onClick={() => scrollToSection('contacts')}
            className="nav-link text-sm font-medium transition-colors duration-200"
          >
            Контакты
          </button>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="header-menu-btn md:hidden p-1"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu md:hidden border-t">
          <nav className="px-6 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('catalog')}
              className="mobile-nav-link text-sm transition-colors text-left"
            >
              Ассортимент
            </button>
            <button
              onClick={() => scrollToSection('how-to-order')}
              className="mobile-nav-link text-sm transition-colors text-left"
            >
              Как заказать
            </button>
            <button
              onClick={() => scrollToSection('terms')}
              className="mobile-nav-link text-sm transition-colors text-left"
            >
              Условия
            </button>
            <button
              onClick={() => scrollToSection('delivery')}
              className="mobile-nav-link text-sm transition-colors text-left"
            >
              Доставка
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="mobile-nav-link text-sm transition-colors text-left"
            >
              Контакты
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
