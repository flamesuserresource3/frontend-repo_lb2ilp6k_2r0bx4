import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import HomeHero from './components/HomeHero.jsx';
import AboutSection from './components/AboutSection.jsx';
import ProductsSection from './components/ProductsSection.jsx';

function App() {
  // Intersection Observer for subtle reveal animations
  useEffect(() => {
    const els = document.querySelectorAll('[data-animate]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="font-sans text-neutral-900 bg-white selection:bg-cyan-100 selection:text-neutral-900">
      <Navbar />
      <main className="scroll-smooth">
        <HomeHero />
        <AboutSection />
        <ProductsSection />

        {/* Contact */}
        <section id="contact" className="py-24 md:py-32 bg-white">
          <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <h2 className="md:col-span-4 text-2xl md:text-3xl font-semibold tracking-tight" data-animate="fade-right">
              Contact
            </h2>
            <div className="md:col-span-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 border border-neutral-200 rounded-xl p-6 bg-[#F9F9F9]"
                data-animate="fade-up"
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm tracking-wide uppercase text-neutral-700">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="h-11 rounded-md border border-neutral-300 bg-white px-3 outline-none focus:ring-2 focus:ring-cyan-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm tracking-wide uppercase text-neutral-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="h-11 rounded-md border border-neutral-300 bg-white px-3 outline-none focus:ring-2 focus:ring-cyan-300"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="message" className="text-sm tracking-wide uppercase text-neutral-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="rounded-md border border-neutral-300 bg-white p-3 outline-none focus:ring-2 focus:ring-cyan-300"
                  />
                </div>
                <div className="sm:col-span-2 flex items-center gap-4">
                  <button type="submit" className="shimmer-button">
                    <div className="spark-container"><div className="spark"><div className="spark-inner"></div></div></div>
                    <span className="button-content">Submit</span>
                    <div className="highlight"></div>
                    <div className="backdrop"></div>
                  </button>
                  <p className="text-neutral-500 text-sm">We typically reply within 1 business day.</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-[#F9F9F9]">
        <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="font-semibold">SwissBrand</p>
            <p className="text-neutral-600 mt-2 max-w-xs">
              Minimal interfaces with a typographic backbone and disciplined grids.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#products" className="hover:underline">Products</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#" aria-label="Twitter" className="hover:underline">Twitter</a></li>
              <li><a href="#" aria-label="LinkedIn" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" aria-label="Dribbble" className="hover:underline">Dribbble</a></li>
              <li><a href="#" aria-label="GitHub" className="hover:underline">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-neutral-500">
            © {new Date().getFullYear()} SwissBrand. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Global Styles for Shimmer Button and Animations */}
      <style>{`
        html { scroll-behavior: smooth; }
        :root {
          --shimmer-bg: #0ea5e9; /* cyan-500 */
          --shimmer-fg: #22d3ee; /* cyan-400 */
          --shimmer-text: #0b1220; /* near-black for contrast */
        }
        /* Reveal animations */
        [data-animate] { opacity: 0; transform: translateY(8px); transition: opacity .6s ease, transform .6s ease; }
        [data-animate].in-view { opacity: 1; transform: none; }
        [data-animate="fade-right"] { transform: translateX(-12px); }
        [data-animate="fade-left"] { transform: translateX(12px); }
        [data-animate="fade-in"] { transform: scale(.98); }

        /* Shimmer Button Styles */
        .shimmer-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: .5rem;
          padding: .875rem 1.1rem;
          border-radius: .75rem;
          font-weight: 600;
          letter-spacing: .02em;
          color: white;
          text-decoration: none;
          isolation: isolate;
          transition: transform .2s ease;
          overflow: hidden;
        }
        .shimmer-button .backdrop {
          position: absolute; inset: 0; border-radius: .75rem;
          background: linear-gradient(180deg, rgba(14,165,233,1), rgba(6,182,212,1));
          opacity: 1; z-index: -1;
        }
        .shimmer-button .highlight {
          position: absolute; inset: 0; border-radius: .75rem;
          background: linear-gradient(120deg, rgba(255,255,255,.35) 0%, rgba(255,255,255,0) 40%);
          mix-blend-mode: soft-light;
          pointer-events: none;
          animation: sweep 2.4s linear infinite;
        }
        .shimmer-button .button-content { position: relative; z-index: 1; }
        .shimmer-button:hover { transform: translateY(-1px); }
        .shimmer-button:active { transform: translateY(0); }

        .spark-container { position: absolute; inset: -40%; z-index: 0; }
        .spark { position: absolute; width: 160%; height: 160%; left: -30%; top: -30%; overflow: hidden; }
        .spark-inner {
          position: absolute; width: 40%; height: 40%; border-radius: 9999px;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.9), rgba(255,255,255,0));
          filter: blur(6px);
          animation: float 4s ease-in-out infinite, orbit 6s linear infinite;
        }

        @keyframes sweep { from { transform: translateX(-100%); } to { transform: translateX(100%); } }
        @keyframes float { 0%,100% { transform: translate(0,0); } 50% { transform: translate(6%, -6%); } }
        @keyframes orbit { from { left: -20%; top: 0; } to { left: 120%; top: 0; } }
      `}</style>
    </div>
  );
}

export default App;
