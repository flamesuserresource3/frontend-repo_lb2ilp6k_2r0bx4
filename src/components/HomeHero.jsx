import React from 'react';

export default function HomeHero() {
  return (
    <section id="home" className="pt-28 md:pt-32 bg-[#F9F9F9]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[60vh] md:min-h-[70vh]">
          <div className="md:col-span-7" data-animate="fade-up">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-neutral-900">
              Precision. Grid. Clarity.
            </h1>
            <p className="mt-6 max-w-xl text-neutral-600 text-lg md:text-xl leading-relaxed">
              A Swiss-style interface that celebrates white space, bold typography, and strict alignment.
            </p>
            <div className="mt-10">
              <a href="#products" className="shimmer-button">
                <div className="spark-container">
                  <div className="spark"><div className="spark-inner"></div></div>
                </div>
                <span className="button-content">Explore More</span>
                <div className="highlight"></div>
                <div className="backdrop"></div>
              </a>
            </div>
          </div>
          <div className="md:col-span-5" data-animate="fade-in">
            <div className="aspect-[4/3] rounded-xl border border-neutral-200 bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
