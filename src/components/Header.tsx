import { useState, useEffect } from 'react';
import MarsLogo from './MarsLogo';
import './Header.css';

const NAV_LINKS = [
  { label: 'Можливості', href: '#features' },
  { label: 'Тарифи', href: '#pricing' },
  { label: 'Чат', href: '#chat' },
  { label: 'Контакти', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#" className="header__brand">
          <MarsLogo size="md" />
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header__nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#pricing" className="header__cta" onClick={() => setMenuOpen(false)}>
            Почати
          </a>
        </nav>

        <button
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
