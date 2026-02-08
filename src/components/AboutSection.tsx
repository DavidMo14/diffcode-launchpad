import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Shield, HeartHandshake, Clock, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Garantía",
    description:
      "Nos comprometemos con la calidad de cada solución. Todos nuestros desarrollos cuentan con garantía post-implementación.",
  },
  {
    icon: HeartHandshake,
    title: "Compromiso",
    description:
      "Comunicación clara en cada etapa, cumplimiento de plazos y visibilidad constante del avance de tu proyecto.",
  },
  {
    icon: Clock,
    title: "Soporte",
    description:
      "Planes de soporte mensual con atención prioritaria, mantenimiento correctivo y asistencia técnica personalizada.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-blue/20 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              ¿Quiénes Somos?
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Tu socio en{" "}
              <span className="text-gradient">transformación digital</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Somos un equipo de profesionales con experiencia que te ayuda con la 
              transición digital de tu empresa en esta nueva era tecnológica mediante 
              soluciones digitales personalizadas.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">Misión</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Brindar soluciones tecnológicas personalizadas que impulsen la 
                    transformación digital, optimizando procesos y fortaleciendo la 
                    seguridad informática.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">Visión</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ser una consultora tecnológica de referencia, reconocida por la 
                    calidad, innovación y efectividad de nuestras soluciones digitales.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="glass rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
