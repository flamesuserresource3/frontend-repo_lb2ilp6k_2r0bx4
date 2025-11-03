export default function HomeHero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-32 opacity-[0.6] bg-[radial-gradient(ellipse_at_top_left,rgba(111,231,247,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(0,191,255,0.12),transparent_40%)] animate-gradient" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid grid-cols-12 gap-y-10 gap-x-8 items-center">
          <div className="col-span-12 md:col-span-7" data-animate>
            <p className="uppercase tracking-[0.2em] text-xs text-neutral-500">SVS Horizon Pvt Ltd</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-black max-w-3xl">
              Building Global Trade Through Sustainable Innovation.
            </h1>
            <p className="mt-6 text-neutral-700 max-w-2xl leading-relaxed">
              Professional Indian export house focused on recycled cotton, authentic spices, and sustainable manufacturing partnerships. Global reach with Indian reliability.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#cotton" className="shimmer-button">
                <div className="spark-container"><div className="spark"><div className="spark-inner"></div></div></div>
                <span className="button-content">Explore Recycled Cotton</span>
                <div className="highlight"></div>
                <div className="backdrop"></div>
              </a>
              <a href="#spices" className="shimmer-button">
                <div className="spark-container"><div className="spark"><div className="spark-inner"></div></div></div>
                <span className="button-content">Discover Spices</span>
                <div className="highlight"></div>
                <div className="backdrop"></div>
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5" data-animate>
            <div className="aspect-[4/3] w-full rounded-xl border border-neutral-200 bg-white shadow-sm flex items-center justify-center">
              <div className="text-center px-8">
                <p className="text-sm uppercase tracking-widest text-neutral-500">Sustainable Focus</p>
                <p className="mt-3 text-neutral-800">Recycled Textiles • Organic Spices • Responsible Partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
