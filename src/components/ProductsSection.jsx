import React from 'react';

const products = [
  { title: 'Grid System Kit', desc: 'A modular layout framework for precision interfaces.' },
  { title: 'Type Scale Set', desc: 'Calibrated typographic ramp for clarity and rhythm.' },
  { title: 'Motion Micro Pack', desc: 'Subtle transitions that reinforce hierarchy.' },
  { title: 'Icon Essentials', desc: 'Neutral, adaptable icons designed for Swiss interfaces.' },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 md:py-32 bg-[#F9F9F9]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900" data-animate="fade-left">
            Products
          </h2>
          <a href="#contact" className="hidden md:inline-flex shimmer-button" data-animate="fade-in">
            <div className="spark-container"><div className="spark"><div className="spark-inner"></div></div></div>
            <span className="button-content">Contact Sales</span>
            <div className="highlight"></div>
            <div className="backdrop"></div>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <article
              key={p.title}
              className="group border border-neutral-200 bg-white rounded-xl p-6 flex flex-col justify-between min-h-[220px] transition-transform will-change-transform"
              data-animate="fade-up"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">{p.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{p.desc}</p>
              </div>
              <div className="mt-6 flex gap-3">
                <a href="#contact" className="shimmer-button">
                  <div className="spark-container"><div className="spark"><div className="spark-inner"></div></div></div>
                  <span className="button-content">Learn More</span>
                  <div className="highlight"></div>
                  <div className="backdrop"></div>
                </a>
                <a href="#contact" className="shimmer-button">
                  <div className="spark-container"><div className="spark"><div className="spark-inner"></div></div></div>
                  <span className="button-content">Buy Now</span>
                  <div className="highlight"></div>
                  <div className="backdrop"></div>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
