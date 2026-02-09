import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MessageCircle, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" ref={ref} className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-deep-blue-dark/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Contáctanos
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            ¿Listo para{" "}
            <span className="text-gradient">comenzar</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-3xl p-8 md:p-10 border border-border">
              <h3 className="text-xl font-display font-bold mb-6">
                Envíanos un mensaje
              </h3>
              
              <form
                action="mailto:contacto@diffcode.com.pe"
                method="post"
                encType="text/plain"
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nombre
                    </label>
                    <Input
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Empresa (opcional)
                  </label>
                  <Input
                    name="empresa"
                    type="text"
                    placeholder="Nombre de tu empresa"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Descripción del Proyecto
                  </label>
                  <Textarea
                    name="descripcion"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={5}
                    required
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="btn-cta rounded-full w-full py-6"
                >
                  Enviar Mensaje
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {/* Email */}
              <a
                href="mailto:contacto@diffcode.com.pe"
                className="flex items-start gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold mb-1 group-hover:text-primary transition-colors">
                    Email
                  </h4>
                  <p className="text-muted-foreground">
                    contacto@diffcode.com.pe
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/51946231973"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold mb-1 group-hover:text-primary transition-colors">
                    WhatsApp
                  </h4>
                  <p className="text-muted-foreground">+51 946 231 973</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+51946231973"
                className="flex items-start gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold mb-1 group-hover:text-primary transition-colors">
                    Teléfono
                  </h4>
                  <p className="text-muted-foreground">+51 946 231 973</p>
                </div>
              </a>

              {/* Website */}
              <a
                href="https://www.diffcode.com.pe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold mb-1 group-hover:text-primary transition-colors">
                    Sitio Web
                  </h4>
                  <p className="text-muted-foreground">www.diffcode.com.pe</p>
                </div>
              </a>
            </div>

            {/* CTA Box */}
            <div className="mt-12 glass rounded-2xl p-6 border border-primary/30">
              <p className="text-sm text-muted-foreground mb-4">
                ¿Prefieres una llamada directa?
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-primary/50 hover:bg-primary/10"
              >
                <a
                  href="https://wa.me/51946231973"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Agendar Reunión por WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
