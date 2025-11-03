import React from 'react';

export default function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold tracking-tight text-neutral-900 text-lg">
          SwissBrand
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-neutral-700 hover:text-neutral-900 transition-colors text-sm tracking-wide uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex shimmer-button" aria-label="Get in touch">
          <div className="spark-container">
            <div className="spark">
              <div className="spark-inner"></div>
            </div>
          </div>
          <span className="button-content">Contact</span>
          <div className="highlight"></div>
          <div className="backdrop"></div>
        </a>
      </nav>
    </header>
  );
}
