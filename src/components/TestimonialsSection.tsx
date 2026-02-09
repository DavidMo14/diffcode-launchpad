import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Victor Castillo",
    role: "Gerente de MERCourier",
    company: "MERCourier",
    quote:
      "El sistema de courier que desarrolló DIFFCODE transformó completamente nuestra operación. Ahora tenemos visibilidad total de nuestras entregas y hemos reducido los tiempos de respuesta en un 40%.",
    image: "VC",
    rating: 5,
  },
  {
    name: "Daniel Quincho",
    role: "Gerente de Gadget Perú",
    company: "Gadget Perú",
    quote:
      "Implementar el CRM personalizado fue la mejor decisión. Pasamos de gestionar todo en hojas de cálculo a tener un sistema que nos da control total sobre nuestros clientes y ventas.",
    image: "DQ",
    rating: 5,
  },
  {
    name: "Gilmer Garay",
    role: "Gerente de JG3 Contrucciones",
    company: "JG3 Contrucciones",
    quote:
      "El equipo de DIFFCODE entendió perfectamente nuestras necesidades desde el primer día. El sistema que desarrollaron superó nuestras expectativas en calidad y tiempo de entrega.",
    image: "GG",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Lo que dicen nuestros{" "}
            <span className="text-gradient">clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Historias de éxito de empresas que confiaron en nosotros para su transformación digital.
          </p>
        </motion.div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="relative"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.name}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group h-full"
                >
                  <div className="h-full glass rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-500 flex flex-col">
                    <div className="mb-6">
                      <Quote className="w-10 h-10 text-primary/30" />
                    </div>

                    <p className="text-foreground/90 leading-relaxed flex-grow mb-6">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="font-display font-bold text-primary">
                          {testimonial.image}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6 md:-left-10" />
          <CarouselNext className="-right-6 md:-right-10" />
        </Carousel>
      </div>
    </section>
  );
}
