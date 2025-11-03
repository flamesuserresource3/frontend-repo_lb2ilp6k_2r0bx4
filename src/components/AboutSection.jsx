import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <h2 className="md:col-span-4 text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900" data-animate="fade-right">
            About
          </h2>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-3" data-animate="fade-up">
              <h3 className="text-lg font-medium text-neutral-900">International Typographic Style</h3>
              <p className="text-neutral-600 leading-relaxed">
                We design with grid discipline, generous margins, and modern type. Every element aligns to a clear rhythm.
              </p>
            </div>
            <div className="space-y-3" data-animate="fade-up" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-lg font-medium text-neutral-900">Purposeful Restraint</h3>
              <p className="text-neutral-600 leading-relaxed">
                Minimal color, maximum clarity. Content comes forward with subtle motion and balanced whitespace.
              </p>
            </div>
            <div className="space-y-3" data-animate="fade-up" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-lg font-medium text-neutral-900">Responsive by Design</h3>
              <p className="text-neutral-600 leading-relaxed">
                A fluid grid adapts seamlessly from mobile to desktop while preserving consistent visual structure.
              </p>
            </div>
            <div className="space-y-3" data-animate="fade-up" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-lg font-medium text-neutral-900">Accessible Details</h3>
              <p className="text-neutral-600 leading-relaxed">
                High contrast, readable sizes, and keyboard accessible controls for an inclusive experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
