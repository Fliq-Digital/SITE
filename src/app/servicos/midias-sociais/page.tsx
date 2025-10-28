"use client"

import { useState, useEffect } from "react"
import Header from "@/src/components/header"
import Footer from "@/src/components/footer"
import WhatsAppButton from "@/src/components/whatsapp-button"
import { StructuredData, serviceSchema } from "@/src/components/structured-data"
import { SEOHead } from "@/src/components/seo-head"
import { Button } from "@/src/components/ui/button"
import { ArrowRight, Check, BarChart3, Users, Zap } from "lucide-react"
import { env } from "@/src/lib/env"

export default function MidiasSociaisPage() {
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

  const socialMediaServiceSchema = serviceSchema(
    "Gestão de Mídias Sociais",
    "Estratégias completas para crescer sua presença nas redes sociais e engajar seu público.",
    "https://fliqdigital.com.br/servicos/midias-sociais"
  )

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SEOHead
        title="Gestão de Mídias Sociais | Marketing Digital | Fliq"
        description="Estratégias completas para crescer sua presença nas redes sociais e engajar seu público. Gestão profissional de Instagram, Facebook, LinkedIn e outras plataformas."
        keywords={[
          "gestão de mídias sociais",
          "marketing digital",
          "social media",
          "gestão de redes sociais",
          "community management",
          "criação de conteúdo",
          "campanhas sociais",
          "engajamento digital"
        ]}
        image="/photoLp.png"
        url="https://fliqdigital.com.br/servicos/midias-sociais"
      />
      <StructuredData data={socialMediaServiceSchema} />
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Gestão de Mídias Sociais</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estratégias completas para crescer sua presença nas redes sociais e engajar seu público.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground cursor-pointer"
              onClick={() => {
                const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para gestão de mídias sociais.")
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Cresça nas redes sociais</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                    <BarChart3 className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Estratégia Personalizada</h3>
                  <p className="text-muted-foreground">
                    Planejamento estratégico baseado em dados e análise do seu público-alvo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                    <Users className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Engajamento Autêntico</h3>
                  <p className="text-muted-foreground">
                    Criamos conteúdo que conecta com seu público e gera interações reais.
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
                  <h3 className="text-xl font-bold mb-2">Campanhas Impactantes</h3>
                  <p className="text-muted-foreground">
                    Campanhas criativas que geram resultados e aumentam suas vendas.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6">Serviços inclusos:</h3>
                <ul className="space-y-3">
                  {[
                    "Planejamento de conteúdo mensal",
                    "Criação de posts e stories",
                    "Gestão de comentários e mensagens",
                    "Análise de métricas e relatórios",
                    "Campanhas de publicidade paga",
                    "Criação de reels e vídeos",
                    "Community management",
                    "Consultoria estratégica",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nossa metodologia</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Auditoria", desc: "Analisamos suas redes atuais" },
              { step: "2", title: "Estratégia", desc: "Criamos plano de crescimento" },
              { step: "3", title: "Execução", desc: "Implementamos conteúdo e campanhas" },
              { step: "4", title: "Otimização", desc: "Medimos e melhoramos resultados" },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforme suas redes sociais</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Deixe a gente cuidar de suas mídias sociais enquanto você foca no seu negócio.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground cursor-pointer"
            onClick={() => {
              const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de gestão de mídias sociais da Fliq.")
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
