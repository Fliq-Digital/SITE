import { Button } from "@/src/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Counter from "./counter"
import { env } from "../lib/env"

interface HeroProps {
  isDark: boolean
}

export default function Hero({ isDark }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium flex items-center gap-2">
                <Sparkles size={16} />
                Transformando negócios locais
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Sua presença digital começa aqui
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Criamos websites incríveis, gerenciamos seu ecommerce e potencializamos suas redes sociais. Tudo que seu
              negócio precisa para crescer online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground cursor-pointer"
                onClick={() => {
                  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Fliq para transformar meu negócio digital.")
                  const whatsappUrl = `https://wa.me/${env.phone}?text=${message}`
                  window.open(whatsappUrl, '_blank')
                }}
              >
                Começar agora
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              {/* <div>
                <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  <Counter end={20} suffix="+" />
                </p>
                <p className="text-sm text-muted-foreground">Projetos</p>
              </div> */}
              <div>
                <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  <Counter end={100} suffix="%" />
                </p>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
              <div>
                <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  <Counter end={2} suffix="+" />
                </p>
                <p className="text-sm text-muted-foreground">Anos</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 h-full flex items-center justify-center p-8">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={isDark ? "/photoLp.png" : "/photoLpLight.png"}
                  alt="Fliq Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
