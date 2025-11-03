import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import HomeHero from './components/HomeHero.jsx';
import IndustriesReach from './components/IndustriesReach.jsx';
import ContactSection from './components/ContactSection.jsx';

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-cyan-100 selection:text-black">
      <style>{`
        html { scroll-behavior: smooth; }
        /* Reveal animations */
        [data-animate] { opacity: 0; transform: translateY(16px); transition: opacity .5s ease, transform .5s ease; }
        [data-animate].is-visible { opacity: 1; transform: translateY(0); }
        /* Subtle moving gradient */
        @keyframes gradientShift { 0%{transform: translate(0,0)} 50%{transform: translate(10px,-6px)} 100%{transform: translate(0,0)} }
        .animate-gradient { animation: gradientShift 8s ease-in-out infinite; }
        /* Shimmer button */
        .shimmer-button { position: relative; display: inline-flex; align-items: center; justify-content: center; gap:.5rem; padding:.875rem 1.1rem; border-radius:.75rem; font-weight:600; color:#0b0b0b; background:#fff; border:1px solid #e5e5e5; overflow:hidden; isolation:isolate;}
        .shimmer-button .button-content { position: relative; z-index: 2; }
        .shimmer-button .backdrop { position:absolute; inset:0; background:linear-gradient(90deg,#00BFFF, #6FE7F7); opacity:.08; z-index:0; }
        .shimmer-button .highlight { position:absolute; inset:-1px; background:radial-gradient(120px 120px at var(--mx,50%) var(--my,50%), rgba(111,231,247,.25), transparent 60%); z-index:1; transition:opacity .2s ease; opacity:0; pointer-events:none }
        .shimmer-button:hover .highlight { opacity:1; }
        .shimmer-button .spark-container { position:absolute; inset:-40%; transform: translateX(-60%); z-index:1; pointer-events:none }
        .shimmer-button .spark { width:120%; height:120%; transform: rotate(15deg); overflow:hidden }
        .shimmer-button .spark-inner { width:40%; height:140%; background: linear-gradient( to right, rgba(255,255,255,0) 0%, rgba(111,231,247,.9) 50%, rgba(255,255,255,0) 100% ); filter: blur(8px); animation: spark-move 2.6s ease-in-out infinite; }
        @keyframes spark-move { 0%{ transform: translateX(-120%) } 50%{ transform: translateX(60%) } 100%{ transform: translateX(140%) } }
        .shimmer-button:disabled { opacity:.7; cursor: not-allowed }
      `}</style>

      <Navbar />
      <main>
        <HomeHero />
        <IndustriesReach />
        <ContactSection />
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-12 gap-6" data-animate>
            <div className="col-span-12 md:col-span-6">
              <p className="font-semibold text-black">SVS Horizon Pvt Ltd</p>
              <p className="mt-2 text-neutral-600">Hyderabad, India • enquiry@svshorizontraders.com • +91 8179665999</p>
            </div>
            <div className="col-span-12 md:col-span-6 md:text-right">
              <nav className="inline-flex gap-4 text-neutral-600">
                <a href="#home" className="hover:text-black">Home</a>
                <a href="#about" className="hover:text-black">About</a>
                <a href="#industries-reach" className="hover:text-black">Industries</a>
                <a href="#contact" className="hover:text-black">Contact</a>
              </nav>
              <div className="mt-3 text-sm text-neutral-500">© {new Date().getFullYear()} SVS Horizon Pvt Ltd. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>

      <ScrollTop />
    </div>
  );
}

function ScrollTop() {
  useEffect(() => {
    const btn = document.getElementById('scrolltop');
    const onScroll = () => {
      if (!btn) return;
      if (window.scrollY > 400) btn.classList.remove('opacity-0', 'pointer-events-none');
      else btn.classList.add('opacity-0', 'pointer-events-none');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      id="scrolltop"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 inline-flex items-center justify-center h-10 w-10 rounded-full border border-neutral-200 bg-white shadow-sm text-black transition-opacity opacity-0 pointer-events-none"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
