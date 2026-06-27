import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-dark-900" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src="./assets/logo.png" alt="" />
            </div>
            <span className="text-white font-semibold text-2xl hidden sm:block">
              Jubair Alam
            </span>
          </a>

          {/* Center */}
          <p className="text-slate-500 text-sm text-center flex items-center gap-1">
            © {new Date().getFullYear()} All Rights Reserved by Jubair Alam.
          </p>

          {/* Right */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-dark-500 hover:bg-accent/10 border border-white/5 hover:border-accent/20 flex items-center justify-center text-slate-400 hover:text-accent transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}