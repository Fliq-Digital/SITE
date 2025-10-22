import { Globe, ShoppingCart, Share2 } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Websites",
    description:
      "Websites modernos, responsivos e otimizados para conversão. Seu negócio merece uma presença digital de qualidade.",
    features: ["Design responsivo", "SEO otimizado", "Performance rápida"],
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce",
    description: "Plataformas de vendas completas com integração de pagamento, gestão de estoque e análise de vendas.",
    features: ["Integração de pagamento", "Gestão de estoque", "Relatórios de vendas"],
  },
  {
    icon: Share2,
    title: "Gestão de Mídias",
    description: "Estratégia completa de redes sociais, criação de conteúdo e gerenciamento de campanhas digitais.",
    features: ["Planejamento estratégico", "Criação de conteúdo", "Análise de resultados"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar seu negócio local em uma potência digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <Icon className="text-primary" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
