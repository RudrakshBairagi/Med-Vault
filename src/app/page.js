"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* TopAppBar */}
      <header className={`bg-[#fafaf1]/80 backdrop-blur-md text-[#01261f] font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-xl fixed top-0 z-50 flex justify-between items-center px-6 py-4 w-full transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <button aria-label="Menu" className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low hover:bg-surface-variant transition-colors">
          <span className="material-symbols-outlined text-primary">menu</span>
        </button>
        <span className="text-[#01261f] font-bold italic tracking-tighter -ml-8">{t('h_title')}</span>
        <Link href="/profile" className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high border-2 border-surface flex items-center justify-center hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-on-surface-variant text-sm">person</span>
        </Link>
      </header>

      <main className="px-6 pt-24 pb-24 max-w-4xl mx-auto space-y-12">
        {/* Greeting */}
        <section className="pt-8 pb-4 mb-12 relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary-fixed/20 rounded-full blur-3xl -z-10"></div>
          <h1 className="leading-none tracking-[-0.02em] font-extrabold text-on-surface mb-2 text-[3.5rem]">
            {t('h_greeting')} <br /> <span className="text-primary italic font-serif font-medium relative z-10">Julian.</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md leading-relaxed mt-4">
            {t('h_sub_greeting')}
          </p>
        </section>

        {/* Dashboard Grid */}
        <section className="grid grid-cols-2 gap-4">
          {/* Upload New Tile */}
          <button className="bg-secondary-container rounded-xl p-6 flex flex-col justify-between items-start aspect-square relative overflow-hidden group hover:opacity-90 transition-opacity">
            <div className="bg-surface/30 p-3 rounded-full mb-4">
              <span className="material-symbols-outlined text-on-secondary-container text-3xl">upload_file</span>
            </div>
            <div className="text-left mt-auto z-10">
              <h3 className="text-lg font-bold text-on-secondary-container">{t('h_upload_new')}</h3>
              <p className="text-sm text-on-secondary-container/80 mt-1">{t('h_upload_desc')}</p>
            </div>
            {/* Organic shape */}
            <svg className="absolute top-[-20%] right-[-20%] w-[120%] h-[120%] text-white/20 -z-0 pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.7,-73.4C55.9,-65.8,67.6,-54.6,76.5,-41.4C85.4,-28.1,91.4,-14.1,89.6,-0.9C87.8,12.3,78.2,24.6,68.8,36.1C59.5,47.7,50.3,58.4,38.8,65.8C27.3,73.1,13.7,77,-0.5,77.8C-14.7,78.6,-29.4,76.4,-42.6,69.9C-55.8,63.4,-67.5,52.5,-75.7,39.6C-83.9,26.7,-88.7,11.8,-86.6,-2.3C-84.5,-16.4,-75.5,-29.7,-65.4,-41.1C-55.4,-52.5,-44.3,-62,-31.6,-68.8C-18.9,-75.6,-4.5,-79.8,9.7,-78.9C23.9,-78.1,42.7,-73.4,42.7,-73.4Z" fill="currentColor" transform="translate(100 100)"></path>
            </svg>
          </button>

          {/* View Vault Tile */}
          <Link href="/vault" className="bg-primary-container rounded-xl p-6 flex flex-col justify-between items-start aspect-square relative overflow-hidden group hover:opacity-90 transition-opacity block w-full text-left">
            <div className="bg-surface/20 p-3 rounded-full mb-4">
              <span className="material-symbols-outlined text-on-primary-container text-3xl">folder_open</span>
            </div>
            <div className="text-left mt-auto z-10">
              <h3 className="text-lg font-bold text-on-primary">{t('h_view_vault')}</h3>
              <p className="text-sm text-on-primary-container mt-1">{t('h_view_desc')}</p>
            </div>
            {/* Organic shape */}
            <svg className="absolute bottom-[-10%] left-[-10%] w-[100%] h-[100%] text-white/5 -z-0 pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.8,-63.9C52.7,-53.4,71.2,-48.5,82.4,-36.8C93.6,-25.1,97.5,-6.6,92.5,9.7C87.5,25.9,73.6,40,60.1,51.8C46.6,63.6,33.5,73.1,18.5,77.5C3.6,81.9,-13.2,81.2,-27.1,75.1C-41.1,69,-52.1,57.5,-63.2,44.9C-74.3,32.3,-85.4,18.7,-88.4,3.7C-91.5,-11.3,-86.5,-27.7,-76.3,-40.5C-66.2,-53.3,-50.9,-62.5,-35.8,-72.6C-20.6,-82.7,-5.7,-93.8,6.8,-92.4C19.3,-91.1,37.8,-63.9,37.8,-63.9Z" fill="currentColor" transform="translate(100 100)"></path>
            </svg>
          </Link>
        </section>

        {/* Medicine Tracker */}
        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <h2 className="text-[1.125rem] font-medium text-on-surface">{t('h_med_tracker')}</h2>
            <button className="text-sm font-bold text-primary">{t('h_view_all')}</button>
          </div>
          <div className="space-y-3">
            {/* Med 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-4 shadow-[0_4px_20px_rgba(26,28,23,0.02)] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <span className="material-symbols-outlined text-primary">medication</span>
                </div>
                <div>
                  <h3 className="font-bold text-on-surface">{t('h_med1_name')}</h3>
                  <p className="text-sm text-on-surface-variant">{t('h_med1_desc')}</p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center bg-primary text-on-primary">
                <span className="material-symbols-outlined text-[14px]">check</span>
              </div>
            </div>

            {/* Med 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-4 shadow-[0_4px_20px_rgba(26,28,23,0.02)] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-secondary-container/20 p-2 rounded-full">
                  <span className="material-symbols-outlined text-secondary">medication_liquid</span>
                </div>
                <div>
                  <h3 className="font-bold text-on-surface">{t('h_med2_name')}</h3>
                  <p className="text-sm text-on-surface-variant">{t('h_med2_desc')}</p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center">
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Scroll - Next Visit */}
        <section className="space-y-4">
          <h2 className="text-[1.125rem] font-medium text-on-surface">{t('h_next_visit')}</h2>
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 snap-x hide-scrollbar">
            {/* Card 1 */}
            <div className="min-w-[280px] bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_rgba(26,28,23,0.02)] snap-center relative overflow-hidden flex flex-col justify-between min-h-[160px]">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-surface-container-low p-2 rounded-full">
                  <span className="material-symbols-outlined text-primary">calendar_month</span>
                </div>
                <span className="text-[0.6875rem] uppercase tracking-[0.05em] font-bold text-on-surface-variant">{t('h_visit1_tag')}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface">{t('h_visit1_title')}</h3>
                <p className="text-sm text-on-surface-variant mt-1">{t('h_visit1_desc')}</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="min-w-[280px] bg-surface-container-low rounded-xl p-6 shadow-[0_4px_20px_rgba(26,28,23,0.02)] snap-center relative overflow-hidden flex flex-col justify-between min-h-[160px]">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-surface p-2 rounded-full">
                  <span className="material-symbols-outlined text-primary">science</span>
                </div>
                <span className="text-[0.6875rem] uppercase tracking-[0.05em] font-bold text-on-surface-variant">{t('h_visit2_tag')}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface">{t('h_visit2_title')}</h3>
                <p className="text-sm text-on-surface-variant mt-1">{t('h_visit2_desc')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="bg-[#fafaf1]/80 backdrop-blur-xl text-[#01261f] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-widest fixed bottom-0 left-0 w-full rounded-t-[2.5rem] z-50 no-border shadow-[0_-4px_40px_rgba(26,28,23,0.05)] hover:text-[#01261f] transition-colors flex justify-around items-center px-8 pb-8 pt-4">
        {/* Active Tab: Home */}
        <Link className="flex flex-col items-center justify-center text-[#01261f] relative after:content-[''] after:absolute after:-bottom-1 after:w-1 after:h-1 after:bg-[#f6e232] after:rounded-full group" href="/">
          <span className="material-symbols-outlined text-2xl mb-1" style={{ fontVariationSettings: '"FILL" 1' }}>home_health</span>
          <span>{t('nav_home')}</span>
        </Link>

        {/* Inactive Tabs */}
        <Link className="flex flex-col items-center justify-center text-[#1a1c17]/40 group hover:text-primary transition-colors" href="/vault">
          <span className="material-symbols-outlined text-2xl mb-1">folder_open</span>
          <span>{t('nav_records')}</span>
        </Link>
        <a className="flex flex-col items-center justify-center text-[#1a1c17]/40 group hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined text-2xl mb-1">event</span>
          <span>{t('nav_visits')}</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#1a1c17]/40 group hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined text-2xl mb-1">vital_signs</span>
          <span>{t('nav_health')}</span>
        </a>
      </nav>
    </>
  );
}
