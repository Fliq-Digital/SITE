import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react"
import { env } from "../lib/env"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer({ isDark }: { isDark: boolean }) {
  return (
    <motion.footer
      id="contact"
      className="bg-card border-t border-border"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 -mt-10">
              <div className="relative -ml-20">
                <Image
                  src={isDark ? "/FliqTransparentDarkTheme.png" : "/FliqTransparentWhiteTheme.png"}
                  alt="Fliq Logo"
                  width={14}
                  height={14}
                  className="w-60 h-30 object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Transformando negócios locais em potências digitais.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Websites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Ecommerce
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Gestão de Mídias
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} />
                <a href={`mailto:${env.email}`}>{env.email}</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} />
                <a href={`https://wa.me/${env.phone}?text=${encodeURIComponent("Olá, vim pelo site e gostaria de conversar com um consultor!")}`}>
                  {env.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>Itu, SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Fliq. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a
              href={`https://www.instagram.com/${env.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Instagram size={20} className="text-muted-foreground hover:text-primary" />
            </a>
            <a
              href={`https://wa.me/${env.phone}?text=${encodeURIComponent("Olá, vim pelo site e gostaria de conversar com um consultor!")}`}
              target="_blank" rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 hover:bg-muted rounded-lg transition-colors">
              <MessageCircle size={20} className="text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
