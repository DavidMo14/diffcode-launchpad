import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/diffcode/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/diffcode_peru?igsh=MW1kdG13d2o5NXQxdQ==", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/share/17sHn5EeNy/?mibextid=wwXIfr", label: "Facebook" },
  { icon: Mail, href: "mailto:contacto@diffcode.com.pe", label: "Email" },
];

const footerLinks = [
  {
    title: "Servicios",
    links: [
      { name: "Desarrollo Web", href: "#servicios" },
      { name: "Software a Medida", href: "#servicios" },
      { name: "Apps Móviles", href: "#servicios" },
      { name: "Ciberseguridad", href: "#servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Nosotros", href: "#nosotros" },
      { name: "Proyectos", href: "#proyectos" },
      { name: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Términos", href: "#" },
      { name: "Privacidad", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold tracking-tight">
                <span className="text-foreground">DIFF</span>
                <span className="text-gradient">CODE</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Consultora en transformación digital. Soluciones tecnológicas 
              personalizadas que impulsan el crecimiento de tu empresa.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-bold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {section.title === "Legal" ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            type="button"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {link.name}
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{link.name}</DialogTitle>
                          </DialogHeader>
                          {link.name === "Términos" ? (
                            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                              <p>
                                DIFFCODE brinda servicios de consultoría, diseño y desarrollo de
                                software a medida. Los tiempos, alcance y entregables se detallan
                                en cada propuesta y contrato específico con el cliente.
                              </p>
                              <p>
                                El uso de nuestros servicios implica la aceptación de los acuerdos
                                de confidencialidad, propiedad intelectual y facturación definidos
                                para cada proyecto. Los pagos, cronogramas y garantías se establecen
                                por escrito antes del inicio de cada implementación.
                              </p>
                              <p>
                                Nos reservamos el derecho de actualizar estos términos para reflejar
                                mejoras en nuestros procesos y servicios. Para cualquier duda,
                                escríbenos a contacto@diffcode.com.pe.
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                              <p>
                                En DIFFCODE protegemos la información que compartes con nosotros.
                                Utilizamos tus datos para comunicarnos contigo, gestionar proyectos
                                y brindar soporte relacionado con nuestros servicios.
                              </p>
                              <p>
                                Aplicamos buenas prácticas de seguridad para resguardar la
                                información y no la compartimos con terceros sin autorización,
                                salvo requerimiento legal o para cumplir obligaciones contractuales.
                              </p>
                              <p>
                                Puedes solicitar la actualización o eliminación de tu información
                                escribiendo a contacto@diffcode.com.pe.
                              </p>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DIFFCODE. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            De la idea a la implementación 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
