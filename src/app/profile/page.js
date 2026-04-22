import Link from 'next/link';

export default function Profile() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col relative overflow-x-hidden">
      {/* TopAppBar */}
      <header className="bg-[#fafaf1]/80 backdrop-blur-md text-[#01261f] font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-xl sticky top-0 z-50 flex justify-between items-center px-6 py-4 w-full transition-opacity">
        <button aria-label="Menu" className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low hover:bg-surface-variant transition-colors">
          <span className="material-symbols-outlined text-primary">menu</span>
        </button>
        <span className="text-[#01261f] font-bold italic tracking-tighter -ml-8">Med-Vault</span>
        <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high border-2 border-surface flex items-center justify-center">
          <span className="material-symbols-outlined text-on-surface-variant text-sm">person</span>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 w-full max-w-2xl mx-auto pt-8 pb-32 px-6 relative z-10" style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M-10,50 Q100,120 200,30 T300,100\" stroke=\"%23c5eadf\" stroke-width=\"2\" fill=\"none\" opacity=\"0.4\" stroke-dasharray=\"10 5\" stroke-linecap=\"round\"/><path d=\"M-50,80 Q150,10 250,90 T350,50\" stroke=\"%23c5eadf\" stroke-width=\"1.5\" fill=\"none\" opacity=\"0.3\" stroke-linecap=\"round\"/></svg>')",
          backgroundSize: 'cover',
          backgroundPosition: 'top center'
      }}>
        {/* Profile Header */}
        <section className="flex flex-col items-center mt-8 mb-12 relative">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-surface-container-lowest shadow-[0_20px_40px_-10px_rgba(26,28,23,0.1)] mb-6">
            <img alt="Julian Reed" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHZCPn7NSZ2wu_mpVYu5uo2tcRmwuvX1JjcwapY_A8k-PEoefNVVP2qS9-v3U2fhpyClVhtCy7iDgZs-5tlguih_1U5vfdVySYWESX61Jmhdj7eqgYhU5-CtRU_zV5GO-i5NkVBdVcfIRM7YLW8ya5cYrhVU-wLHQVOp_GOoRWZG34gwXYor-quySTVe00p_hgF3vENghkwcWuNGh9AMfgpdFMs7uRdIDzgqMn7Gm99tfJAlXrkaJy8wLOAE2tH_IhRCoT7mQgldw" />
          </div>
          <h2 className="text-[2.5rem] font-bold tracking-tight text-on-surface leading-none mb-2 text-center">Julian Reed</h2>
          <div className="flex items-center space-x-3 mb-4">
            <span className="font-label text-[0.6875rem] uppercase tracking-[0.05em] font-semibold text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full">Patient ID: #29402</span>
          </div>
          <div className="flex items-center space-x-2 text-primary font-medium text-sm bg-primary-fixed/20 px-4 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-base text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <span>Verified Patient</span>
          </div>
        </section>

        {/* Menu Groups */}
        <div className="space-y-8">
          {/* Account Group */}
          <section className="bg-surface-container-low rounded-xl p-2 shadow-[0_10px_30px_rgba(26,28,23,0.02)]">
            <h3 className="font-label text-[0.6875rem] uppercase tracking-[0.05em] font-semibold text-on-surface-variant px-4 pt-4 pb-2">Account</h3>
            <div className="flex flex-col space-y-1">
              <button className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-bright transition-colors active:scale-[0.98]">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <span className="font-body text-base font-medium text-on-surface">Personal Info</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </button>
              <button className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-bright transition-colors active:scale-[0.98]">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">description</span>
                  </div>
                  <span className="font-body text-base font-medium text-on-surface">Medical Records</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </button>
              <button className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-bright transition-colors active:scale-[0.98]">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">health_and_safety</span>
                  </div>
                  <span className="font-body text-base font-medium text-on-surface">Insurance</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </button>
            </div>
          </section>

          {/* Preferences Group */}
          <section className="bg-surface-container-low rounded-xl p-2 shadow-[0_10px_30px_rgba(26,28,23,0.02)]">
            <h3 className="font-label text-[0.6875rem] uppercase tracking-[0.05em] font-semibold text-on-surface-variant px-4 pt-4 pb-2">Preferences</h3>
            <div className="flex flex-col space-y-1">
              {/* Language Selector (NEW) */}
              <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-bright transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">language</span>
                  </div>
                  <span className="font-body text-base font-medium text-on-surface">Language</span>
                </div>
                <select className="bg-transparent text-on-surface-variant border-none outline-none font-medium text-right pr-4 cursor-pointer focus:ring-0">
                  <option value="en">English (US)</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="ja">日本語</option>
                </select>
              </div>

              <button className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-bright transition-colors active:scale-[0.98]">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">notifications_active</span>
                  </div>
                  <span className="font-body text-base font-medium text-on-surface">Notifications</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </button>
              <button className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-bright transition-colors active:scale-[0.98]">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">lock</span>
                  </div>
                  <span className="font-body text-base font-medium text-on-surface">Security</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </button>
            </div>
          </section>

          {/* Support Group */}
          <section className="bg-surface-container-low rounded-xl p-2 shadow-[0_10px_30px_rgba(26,28,23,0.02)]">
            <h3 className="font-label text-[0.6875rem] uppercase tracking-[0.05em] font-semibold text-on-surface-variant px-4 pt-4 pb-2">Support</h3>
            <div className="flex flex-col space-y-1">
              <button className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-bright transition-colors active:scale-[0.98]">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">help</span>
                  </div>
                  <span className="font-body text-base font-medium text-on-surface">Help Center</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </button>
              <button className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-bright transition-colors active:scale-[0.98]">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">chat_bubble</span>
                  </div>
                  <span className="font-body text-base font-medium text-on-surface">Contact Us</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </button>
            </div>
          </section>

          {/* Logout Button */}
          <div className="pt-6 pb-8 flex justify-center">
            <button className="text-error font-medium flex items-center space-x-2 border-b-2 border-error pb-1 hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined text-sm">logout</span>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="bg-[#fafaf1]/80 backdrop-blur-xl text-[#01261f] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-widest fixed bottom-0 left-0 w-full rounded-t-[2.5rem] z-50 no-border shadow-[0_-4px_40px_rgba(26,28,23,0.05)] hover:text-[#01261f] transition-colors flex justify-around items-center px-8 pb-8 pt-4">
        {/* Inactive Tab: Home */}
        <Link className="flex flex-col items-center justify-center text-[#1a1c17]/40 group hover:text-primary transition-colors" href="/">
          <span className="material-symbols-outlined text-2xl mb-1">home_health</span>
          <span>Home</span>
        </Link>

        {/* Inactive Tab: Vault */}
        <Link className="flex flex-col items-center justify-center text-[#1a1c17]/40 group hover:text-primary transition-colors" href="/vault">
          <span className="material-symbols-outlined text-2xl mb-1">folder_open</span>
          <span>Records</span>
        </Link>

        {/* Inactive Tab: Visits */}
        <a className="flex flex-col items-center justify-center text-[#1a1c17]/40 group hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined text-2xl mb-1">event</span>
          <span>Visits</span>
        </a>

        {/* Active Tab: Profile */}
        <Link className="flex flex-col items-center justify-center text-[#01261f] relative after:content-[''] after:absolute after:-bottom-1 after:w-1 after:h-1 after:bg-[#f6e232] after:rounded-full group" href="/profile">
          <span className="material-symbols-outlined text-2xl mb-1" style={{ fontVariationSettings: '"FILL" 1' }}>person</span>
          <span>Profile</span>
        </Link>
      </nav>
    </div>
  );
}
