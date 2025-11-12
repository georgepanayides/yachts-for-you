export default function HomeHero() {
    return(
    <section
      className="relative flex h-screen w-full items-end p-16"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/home-hero-yacht-v2.png)' }}
        aria-hidden="true"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl flex flex-col gap-3">
        <h1 className="text-7xl font-extralight uppercase tracking-tight text-off-white">
          Luxury Yacht Charters In Dubai
        </h1>
        <p className="text-md font-normal text-off-white/90 leading-relaxed">
          Curated charters, bespoke journeys, and unparalleled service. Elevate every moment at sea.
        </p>
      </div>

      {/* Bottom gradient fade */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-dark/80 to-transparent"
          aria-hidden="true"
        />
    </section>
    )
}