import { Button } from "@/src/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { env } from "../lib/env"

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-20 md:py-32 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-border relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium flex items-center gap-2">
            <Zap size={16} />
            Transforme seu negócio agora
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Entre em contato conosco e descubra como podemos levar seu negócio para o próximo nível digital.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground cursor-pointer"
            onClick={() => {
              const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta para discutir como a Fliq pode transformar meu negócio digital.")
              const whatsappUrl = `https://wa.me/${env.phone}?text=${message}`
              window.open(whatsappUrl, '_blank')
            }}
          >
            Falar com um especialista
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-8">Responderemos em até 24 horas</p>
      </div>
    </section>
  )
}
