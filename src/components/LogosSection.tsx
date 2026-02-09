const logos = [
  { src: "/logos/logo-empresa-1.svg", alt: "Empresa 1" },
  { src: "/logos/logo-empresa-2.svg", alt: "Empresa 2" },
  { src: "/logos/logo-empresa-3.svg", alt: "Empresa 3" },
  { src: "/logos/logo-empresa-4.svg", alt: "Empresa 4" },
];

export function LogosSection() {
  const marqueeLogos = [...logos, ...logos];

  return (
    <section id="clientes" className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Empresas aliadas
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Marcas que confían en{" "}
            <span className="text-gradient">Diffcode</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Un carrusel continuo con los logos de nuestros clientes y aliados.
          </p>
        </div>

        <div className="logo-marquee">
          <div className="logo-marquee-track">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="logo-marquee-item glass rounded-2xl px-6 py-4"
                aria-hidden={index >= logos.length}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
