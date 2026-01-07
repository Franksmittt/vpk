"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { languages, Language } from "@/lib/i18n/translations";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/hunt', label: 'The Hunt' },
    { href: '/journey', label: 'The Journey' },
    { href: '/sanctuary', label: 'Sanctuary' },
    { href: '/species', label: 'Species' },
    { href: '/impact', label: 'Impact' },
    { href: '/trust', label: 'Trust & Logistics' },
    { href: '/reserve', label: 'Reserve' },
  ];

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsDesktopMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    }

    if (isLanguageMenuOpen || isDesktopMenuOpen || isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageMenuOpen, isDesktopMenuOpen, isMobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen || isDesktopMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isDesktopMenuOpen]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  const currentLanguage = languages.find(l => l.code === language) || languages[0];

  return (
    <header
      className="fixed top-0 left-0 w-full z-[1000]"
      style={{
        background: "rgba(35, 31, 32, 0.25)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 h-20 md:h-24">
        {/* Left Section: Menu + Phone */}
        <div className="flex items-center gap-6 md:gap-10">
          {/* Menu Group */}
          <div className="flex items-center gap-2 relative" ref={menuRef}>
            <button
              className="text-white hover:opacity-80 transition-opacity flex items-center gap-2"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setIsDesktopMenuOpen(!isDesktopMenuOpen);
              }}
              aria-label="Menu"
            >
              <svg
                className={`w-5 h-5 transition-transform ${isMobileMenuOpen || isDesktopMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                {isMobileMenuOpen || isDesktopMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
              <span className="text-white font-montserrat text-xs uppercase tracking-wide hidden sm:inline">
                {t('menu')}
              </span>
            </button>

            {/* Desktop Menu Dropdown */}
            {isDesktopMenuOpen && (
              <div 
                className="hidden lg:block absolute top-full left-0 mt-4 min-w-[240px] z-50"
                style={{
                  background: "rgba(35, 31, 32, 0.95)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <nav className="py-2">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsDesktopMenuOpen(false)}
                      className="block px-6 py-3 text-white font-montserrat text-xs uppercase tracking-wide hover:bg-white/10 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="h-px bg-white/10 my-2"></div>
                  <a
                    href="tel:+27123456789"
                    onClick={() => setIsDesktopMenuOpen(false)}
                    className="block px-6 py-3 text-white/80 font-montserrat text-xs uppercase tracking-wide hover:bg-white/10 transition-colors"
                  >
                    +27-12345-6789
                  </a>
                </nav>
              </div>
            )}
          </div>

          {/* Phone Group */}
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <a
              href="tel:+27123456789"
              className="text-white font-montserrat text-xs uppercase tracking-wide hover:opacity-80 transition-opacity hidden md:inline"
            >
              +27-12345-6789
            </a>
          </div>
        </div>

        {/* Center Section: Brand Logo (Stacked) */}
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center hover:opacity-80 transition-opacity"
        >
          <span className="text-white font-heading text-lg md:text-2xl uppercase tracking-[1px]">
            VAALPENSKRAAL
          </span>
          <span className="text-white/80 font-montserrat text-[9px] md:text-[10px] uppercase tracking-[2px]">
            LUXURY GAME RESERVE
          </span>
        </Link>

        {/* Right Section: Language + CTA */}
        <div className="flex items-center gap-6 md:gap-10">
          {/* Language Selector */}
          <div className="relative" ref={languageMenuRef}>
            <button 
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="flex items-center gap-1 text-white font-montserrat text-xs uppercase font-semibold hover:opacity-80 transition-opacity"
              aria-label="Select Language"
            >
              <span>{currentLanguage.code.toUpperCase()}</span>
              <svg
                className={`w-3 h-3 transition-transform ${isLanguageMenuOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            {/* Language Dropdown */}
            {isLanguageMenuOpen && (
              <div 
                className="absolute top-full right-0 mt-2 min-w-[160px] z-50"
                style={{
                  background: "rgba(35, 31, 32, 0.95)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-3 text-white font-montserrat text-xs uppercase tracking-wide hover:bg-white/10 transition-colors flex items-center gap-3 ${
                      language === lang.code ? 'bg-white/5' : ''
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                    {language === lang.code && (
                      <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <Link 
            href="/reserve"
            className="text-white font-montserrat text-xs uppercase font-semibold hover:underline transition-all hidden sm:inline"
          >
            Request Quote
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-espresso/98 backdrop-blur-md z-40 pt-24 overflow-y-auto">
          <div className="container mx-auto px-6 py-8 space-y-1">
            <nav className="space-y-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-4 text-white font-montserrat text-sm uppercase tracking-wide hover:bg-white/10 transition-colors border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
              <a
                href="tel:+27123456789"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white/80 font-montserrat text-sm uppercase tracking-wide hover:opacity-80 transition-opacity"
              >
                +27-12345-6789
              </a>
              <Link
                href="/reserve"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 bg-signal-orange text-canvas-cream font-montserrat text-sm uppercase tracking-wide font-semibold text-center rounded"
              >
                {t('bookYourSafari')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
