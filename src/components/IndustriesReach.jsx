export default function IndustriesReach() {
  const cards = [
    { title: 'Textiles', desc: 'Recycled cotton bales, fibers, and yarn for global mills.' },
    { title: 'Exports', desc: 'End-to-end sourcing and logistics from India to the world.' },
    { title: 'Agriculture', desc: 'Pure Indian spices and agro commodities with strict QA.' },
    { title: 'Sustainability', desc: 'Partnerships with audited facilities and circular practices.' },
  ];

  const destinations = [
    { name: 'India', cx: 520, cy: 260 },
    { name: 'UAE', cx: 500, cy: 270 },
    { name: 'Europe', cx: 420, cy: 210 },
    { name: 'USA', cx: 160, cy: 240 },
  ];

  return (
    <section id="industries-reach" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div id="about" className="col-span-12" data-animate>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">About SVS Horizon</h2>
            <p className="mt-4 text-neutral-700 max-w-3xl leading-relaxed">
              SVS Horizon Pvt Ltd is a Hyderabad-based export company specializing in recycled cotton, textile waste, and authentic Indian spices. We enable sustainable trade with reliable sourcing, strict quality control, and transparent partnerships.
            </p>
          </div>

          <div className="col-span-12" data-animate>
            <h3 className="text-xl font-semibold text-black">Industries We Serve</h3>
            <div className="mt-6 grid grid-cols-12 gap-6">
              {cards.map((c) => (
                <div key={c.title} className="col-span-12 sm:col-span-6 lg:col-span-3">
                  <div className="h-full rounded-xl border border-neutral-200 p-6 hover:shadow-sm transition-shadow group">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-black">{c.title}</h4>
                      <span className="h-2 w-2 rounded-full bg-cyan-400 mt-1 group-hover:scale-125 transition-transform" />
                    </div>
                    <p className="mt-3 text-neutral-700 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6" data-animate>
            <h3 className="text-xl font-semibold text-black">Our Reach</h3>
            <p className="mt-4 text-neutral-700 max-w-xl">Active export lanes across India, UAE, Europe, and USA.</p>
            <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-4">
              <svg viewBox="0 0 640 360" className="w-full h-auto">
                <rect x="1" y="1" width="638" height="358" rx="12" className="fill-white stroke-neutral-200" />
                <g className="text-neutral-300">
                  {[...Array(10)].map((_, i) => (
                    <line key={`v-${i}`} x1={(i + 1) * 58} y1="20" x2={(i + 1) * 58} y2="340" stroke="currentColor" strokeWidth="0.5" />
                  ))}
                  {[...Array(6)].map((_, i) => (
                    <line key={`h-${i}`} x1="20" y1={(i + 1) * 54} x2="620" y2={(i + 1) * 54} stroke="currentColor" strokeWidth="0.5" />
                  ))}
                </g>
                {destinations.map((d) => (
                  <g key={d.name}>
                    <circle cx={d.cx} cy={d.cy} r="6" className="fill-cyan-400" />
                    <text x={d.cx + 10} y={d.cy + 4} className="fill-black text-[10px]">{d.name}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6" data-animate>
            <h3 className="text-xl font-semibold text-black">Focus Segments</h3>
            <ul className="mt-4 space-y-3 text-neutral-800">
              <li id="cotton" className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                <div>
                  <p className="font-medium">Recycled Cotton & Textile Waste</p>
                  <p className="text-neutral-600">Waste → Fiber → Yarn → Export, with GOTS/RCS standards.</p>
                  <a href="#contact" className="mt-3 inline-flex shimmer-button">
                    <div className="spark-container"><div className="spark"><div className="spark-inner"></div></div></div>
                    <span className="button-content">Get Sample Quote</span>
                    <div className="highlight"></div>
                    <div className="backdrop"></div>
                  </a>
                </div>
              </li>
              <li id="spices" className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                <div>
                  <p className="font-medium">Spices & Agro Products</p>
                  <p className="text-neutral-600">Turmeric, Chillies, Cardamom, Cumin, Black Pepper and more.</p>
                  <a href="#contact" className="mt-3 inline-flex shimmer-button">
                    <div className="spark-container"><div className="spark"><div className="spark-inner"></div></div></div>
                    <span className="button-content">Request Price List</span>
                    <div className="highlight"></div>
                    <div className="backdrop"></div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
