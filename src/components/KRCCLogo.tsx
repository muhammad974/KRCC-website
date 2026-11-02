import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LogoProps {
  variant?: 'header' | 'footer' | 'mark' | 'hero';
  className?: string;
  showSlogan?: boolean;
  isDark?: boolean;
}

export const KRCCLogo: React.FC<LogoProps> = ({
  variant = 'header',
  className = '',
  showSlogan = false,
  isDark = false,
}) => {
  const { language } = useLanguage();

  const logoSrc = '/assets/aistudio/new-logo-without_bg_85911b35.jpeg';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official KRCC Emblem Image */}
      <div
        className={`relative shrink-0 flex items-center justify-center overflow-hidden transition-transform duration-200 ${
          isDark
            ? 'bg-white p-1 rounded-xl shadow-md border border-neutral-700/50'
            : 'bg-white p-0.5 rounded-lg'
        }`}
      >
        <img
          src={logoSrc}
          alt="KHABEER AL RAIDA CONTRACTING COMPANY (KRCC) Official Logo"
          className={`object-contain ${
            variant === 'hero'
              ? 'w-14 h-14'
              : variant === 'mark'
              ? 'w-10 h-10'
              : 'w-12 h-12 md:w-14 md:h-14'
          }`}
        />
      </div>

      {variant !== 'mark' && (
        <div className="flex flex-col justify-center leading-tight">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-black tracking-wider text-2xl md:text-3xl text-slate-900">
              KRCC
            </span>
            <span className="text-[10px] uppercase font-black tracking-wider text-red-700 bg-red-100/80 px-1.5 py-0.5 rounded">
              KSA
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-900 text-white leading-none">
              {language === 'ar' ? 'منذ عام ٢٠٠٨' : 'SINCE 2008'}
            </span>
          </div>

          <span
            className={`text-xs md:text-sm font-extrabold tracking-tight mt-1 ${
              isDark ? 'text-neutral-100' : 'text-slate-900'
            }`}
          >
            KHABEER AL RAIDA CONTRACTING
          </span>

          <span
            className={`text-[10px] md:text-xs font-semibold tracking-wide ${
              isDark ? 'text-neutral-400' : 'text-slate-600'
            }`}
          >
            شركة خبير الرائدة للمقاولات
          </span>

          {showSlogan && (
            <span className="text-[9px] tracking-wider uppercase font-semibold text-red-700 mt-1">
              {language === 'ar' ? 'نبني اليوم لغدٍ أقوى' : 'BUILDING TODAY FOR A STRONGER TOMORROW'}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
