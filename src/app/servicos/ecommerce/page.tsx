"use client"

import { useState, useEffect } from "react"
import Header from "@/src/components/header"
import Footer from "@/src/components/footer"
import WhatsAppButton from "@/src/components/whatsapp-button"
import { Button } from "@/src/components/ui/button"
import { ArrowRight, Check, ShoppingCart, TrendingUp, Lock } from "lucide-react"
import { env } from "@/src/lib/env"

export default function EcommercePage() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const isDarkMode = savedTheme ? savedTheme === "dark" : true
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Ecommerce que vende</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Plataformas de vendas online completas, integradas com pagamento, estoque e logística.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground cursor-pointer"
              onClick={() => {
                const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para desenvolvimento de ecommerce.")
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Potencialize suas vendas online</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                    <ShoppingCart className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Carrinho de Compras Inteligente</h3>
                  <p className="text-muted-foreground">
                    Sistema de carrinho otimizado que reduz abandono e aumenta conversão de vendas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                    <TrendingUp className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Gestão de Estoque</h3>
                  <p className="text-muted-foreground">
                    Controle automático de estoque, alertas de reposição e sincronização em tempo real.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                    <Lock className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pagamentos Seguros</h3>
                  <p className="text-muted-foreground">
                    Integração com Mercado Pago, Vindi e outros gateways com criptografia de ponta a ponta.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6">Recursos inclusos:</h3>
                <ul className="space-y-3">
                  {[
                    "Catálogo de produtos ilimitado",
                    "Múltiplas formas de pagamento",
                    "Gestão de pedidos automatizada",
                    "Integração com transportadoras",
                    "Cupons e promoções",
                    "Relatórios de vendas",
                    "Avaliações de clientes",
                    "Email marketing integrado",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Implementação do seu ecommerce</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Análise", desc: "Estudamos seu negócio e concorrência" },
              { step: "2", title: "Estrutura", desc: "Criamos a arquitetura da loja" },
              { step: "3", title: "Integração", desc: "Conectamos pagamentos e logística" },
              { step: "4", title: "Lançamento", desc: "Publicamos e otimizamos vendas" },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comece a vender online agora</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Transforme seu negócio em uma loja online profissional e lucrativa.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground cursor-pointer"
            onClick={() => {
              const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de ecommerce da Fliq.")
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
