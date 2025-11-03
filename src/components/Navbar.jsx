import { useEffect, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handler = () => {
      const sections = ['home', 'about', 'industries-reach', 'contact'];
      let current = 'home';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = id;
        }
      });
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const LinkItem = ({ href, label }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className={`px-2 py-1 transition-colors relative group ${active === href.replace('#', '') ? 'text-black' : 'text-neutral-600'}`}
    >
      <span>{label}</span>
      <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-cyan-400 transition-all group-hover:w-full" />
    </a>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight text-xl text-black">SVS Horizon</a>

          <div className="hidden md:flex items-center gap-6">
            <LinkItem href="#home" label="Home" />
            <LinkItem href="#about" label="About" />
            <LinkItem href="#industries-reach" label="Industries" />
            <LinkItem href="#contact" label="Contact" />
            <a href="#contact" className="shimmer-button">
              <div className="spark-container"><div className="spark"><div className="spark-inner"></div></div></div>
              <span className="button-content">Partner With Us</span>
              <div className="highlight"></div>
              <div className="backdrop"></div>
            </a>
          </div>

          <button
            aria-label="Toggle Menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded border border-neutral-200"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Open Menu</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-black transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-black transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-black transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-3 grid gap-3">
            <LinkItem href="#home" label="Home" />
            <LinkItem href="#about" label="About" />
            <LinkItem href="#industries-reach" label="Industries" />
            <LinkItem href="#contact" label="Contact" />
            <a href="#contact" className="shimmer-button w-full text-center">
              <div className="spark-container"><div className="spark"><div className="spark-inner"></div></div></div>
              <span className="button-content">Partner With Us</span>
              <div className="highlight"></div>
              <div className="backdrop"></div>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
