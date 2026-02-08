import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Globe,
  Shield,
  Smartphone,
  Workflow,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desarrollo de Software",
    description:
      "Aplicaciones personalizadas 100% adaptadas a tus procesos. CRM, ERP, sistemas de logística y más con metodologías ágiles.",
    features: ["Desarrollo Ágil", "Arquitectura Escalable", "Mantenimiento Post-implementación"],
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Sitios web modernos, responsivos y optimizados para buscadores. Landing pages, tiendas online y plataformas corporativas.",
    features: ["SEO Optimizado", "Diseño Responsivo", "Alta Performance"],
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description:
      "Pentesting y auditorías de seguridad para proteger tus aplicaciones. Identificamos vulnerabilidades antes que los atacantes.",
    features: ["Pentesting Web", "Auditorías de Seguridad", "Informes Ejecutivos"],
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description:
      "Aplicaciones nativas e híbridas para Android e iOS. Diseño intuitivo y experiencia de usuario excepcional.",
    features: ["iOS & Android", "UI/UX Profesional", "Integración Backend"],
  },
  {
    icon: Workflow,
    title: "Automatización",
    description:
      "Optimiza tus operaciones automatizando tareas repetitivas. Conectamos tus herramientas y sistemas para mayor eficiencia.",
    features: ["Flujos Personalizados", "Integración de APIs", "Dashboards en Tiempo Real"],
  },
  {
    icon: BarChart3,
    title: "Estrategia Digital",
    description:
      "Consultoría en transformación digital. Te acompañamos en cada etapa para optimizar procesos y acelerar tu crecimiento.",
    features: ["Análisis de Procesos", "Roadmap Digital", "Acompañamiento Continuo"],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" ref={ref} className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Soluciones que impulsan tu{" "}
            <span className="text-gradient">negocio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos un ecosistema completo de servicios tecnológicos diseñados 
            para llevar tu empresa al siguiente nivel digital.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card rounded-2xl p-6 md:p-8 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
