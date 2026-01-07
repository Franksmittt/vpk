"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer 
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, rgba(35, 31, 32, 1) 0%, rgba(35, 31, 32, 0.95) 100%)",
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-12 md:mb-16">
          {/* Trust Signals */}
          <div>
            <div className="w-16 h-px bg-white/20 mb-6"></div>
            <h3 className="text-white font-heading text-sm mb-6 tracking-[0.15em] font-light">
              {t('certifications')}
            </h3>
            <div className="flex flex-wrap gap-4">
              <div className="text-white/60 font-montserrat text-xs uppercase tracking-[0.1em] font-light">
                SCI
              </div>
              <div className="text-white/60 font-montserrat text-xs uppercase tracking-[0.1em] font-light">
                DSC
              </div>
              <div className="text-white/60 font-montserrat text-xs uppercase tracking-[0.1em] font-light">
                WRSA
              </div>
              <div className="text-white/60 font-montserrat text-xs uppercase tracking-[0.1em] font-light">
                Fair Trade
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="w-16 h-px bg-white/20 mb-6"></div>
            <h3 className="text-white font-heading text-sm mb-6 tracking-[0.15em] font-light">
              {t('legal')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-white/60 hover:text-white transition-colors font-montserrat text-xs tracking-[0.05em] font-light"
                >
                  {t('privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/indemnity"
                  className="text-white/60 hover:text-white transition-colors font-montserrat text-xs tracking-[0.05em] font-light"
                >
                  {t('indemnity')}
                </Link>
              </li>
              <li>
                <Link
                  href="/paia"
                  className="text-white/60 hover:text-white transition-colors font-montserrat text-xs tracking-[0.05em] font-light"
                >
                  {t('paiaManual')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="w-16 h-px bg-white/20 mb-6"></div>
            <h3 className="text-white font-heading text-sm mb-6 tracking-[0.15em] font-light">
              {t('location')}
            </h3>
            <p className="text-white/60 font-montserrat text-xs leading-relaxed tracking-[0.05em] font-light">
              <span className="text-white/80 font-light">Vaalpenskraal Game Farm</span>
              <br />
              Thabazimbi, Limpopo
              <br />
              <span className="text-white/50">-24.5964, 27.4045</span>
            </p>
          </div>

          {/* Disclaimer */}
          <div>
            <div className="w-16 h-px bg-white/20 mb-6"></div>
            <h3 className="text-white font-heading text-sm mb-6 tracking-[0.15em] font-light">
              {t('taxAdvisory')}
            </h3>
            <p className="text-white/60 font-montserrat text-xs leading-relaxed tracking-[0.05em] font-light">
              US Clients: Please read our Section 170(h) Tax Advisory regarding
              conservation donations.
            </p>
          </div>
        </div>

        <div 
          className="border-t pt-8 text-center"
          style={{
            borderColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <p className="text-white/40 font-montserrat text-xs tracking-[0.1em] font-light">
            © {new Date().getFullYear()} Vaalpenskraal Game Farm, Thabazimbi. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
