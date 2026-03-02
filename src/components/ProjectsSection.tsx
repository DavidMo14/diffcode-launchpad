import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  FileText,
  Package,
  MapPin,
  Truck,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CRM Empresarial",
    subtitle: "Sistema de Gestión de Clientes",
    description:
      "Plataforma integral para la gestión comercial de empresas. Control total de clientes, cotizaciones y pedidos en una sola herramienta.",
    features: [
      { icon: Users, text: "Gestión de Clientes" },
      { icon: FileText, text: "Cotizaciones Digitales" },
      { icon: Package, text: "Control de Pedidos" },
      { icon: CheckCircle2, text: "Reportes en Tiempo Real" },
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    accentColor: "bg-blue-500",
  },
  {
    title: "Sistema Logístico",
    subtitle: "Plataforma de Courier",
    description:
      "Solución completa para empresas de courier y logística. Seguimiento en tiempo real, optimización de rutas y gestión de entregas.",
    features: [
      { icon: MapPin, text: "Tracking en Tiempo Real" },
      { icon: Truck, text: "Optimización de Rutas" },
      { icon: Clock, text: "Gestión de Entregas" },
      { icon: CheckCircle2, text: "Dashboard Operativo" },
    ],
    gradient: "from-emerald-500/20 to-teal-500/20",
    accentColor: "bg-emerald-500",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-blue/30 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Proyectos que{" "}
            <span className="text-gradient">transforman</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluciones reales que hemos desarrollado para empresas que confían en nosotros.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className={`relative rounded-3xl p-8 md:p-10 overflow-hidden glass border border-border hover:border-primary/30 transition-all duration-500`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className={`w-3 h-3 rounded-full ${project.accentColor}`} />
                    <span className="text-sm font-medium text-muted-foreground">
                      {project.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {project.features.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-center gap-3 p-3 rounded-xl bg-background/50"
                      >
                        <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="group/btn hover:bg-primary/10 p-0 h-auto font-semibold"
                  >
                    Ver más detalles
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
