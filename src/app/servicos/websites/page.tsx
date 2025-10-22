"use client"

import { useState, useEffect } from "react"
import Header from "@/src/components/header"
import Footer from "@/src/components/footer"
import WhatsAppButton from "@/src/components/whatsapp-button"
import { Button } from "@/src/components/ui/button"
import { ArrowRight, Check, Zap, Shield, Smartphone } from "lucide-react"
import { env } from "@/src/lib/env"

export default function WebsitesPage() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const isDarkMode = savedTheme ? savedTheme === "dark" : true
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Websites que convertem</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Criamos websites modernos, responsivos e otimizados para SEO que transformam visitantes em clientes.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground cursor-pointer"
              onClick={() => {
                const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para desenvolvimento de website.")
                const whatsappUrl = `https://wa.me/${env.phone}?text=${message}`
                window.open(whatsappUrl, '_blank')
              }}
            >
              Solicitar orçamento
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">O que você ganha com nossos websites</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                    <Smartphone className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Design Responsivo</h3>
                  <p className="text-muted-foreground">
                    Seu website funciona perfeitamente em todos os dispositivos: desktop, tablet e mobile.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                    <Zap className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance Otimizada</h3>
                  <p className="text-muted-foreground">
                    Carregamento rápido e otimizado para melhor experiência do usuário e ranking no Google.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                    <Shield className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Segurança Garantida</h3>
                  <p className="text-muted-foreground">
                    SSL, backups automáticos e proteção contra ataques para manter seus dados seguros.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6">Incluso no pacote:</h3>
                <ul className="space-y-3">
                  {[
                    "Design personalizado e moderno",
                    "Otimização SEO completa",
                    "Integração com redes sociais",
                    "Formulário de contato",
                    "Google Analytics",
                    "Certificado SSL",
                    "Suporte técnico 24/7",
                    "Atualizações e manutenção",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="text-primary" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Como funciona nosso processo</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Briefing", desc: "Entendemos suas necessidades e objetivos" },
              { step: "2", title: "Design", desc: "Criamos o design personalizado do seu site" },
              { step: "3", title: "Desenvolvimento", desc: "Desenvolvemos com as melhores tecnologias" },
              { step: "4", title: "Lançamento", desc: "Publicamos e otimizamos seu website" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-background border border-border rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para ter um website incrível?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entre em contato conosco e vamos criar a presença digital perfeita para seu negócio.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground cursor-pointer"
            onClick={() => {
              const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de websites da Fliq.")
              const whatsappUrl = `https://wa.me/${env.phone}?text=${message}`
              window.open(whatsappUrl, '_blank')
            }}
          >
            Fale com a gente
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <Footer isDark={isDark} />
      <WhatsAppButton />
    </div>
  )
}
