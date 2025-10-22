import { Badge } from "@/src/components/ui/badge"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Micro E-commerce automotivo",
    category: "Ecommerce",
    image: "/spaziosite.png",
    description: "Plataforma de vendas de peças automotivas com integração de pagamento e gestão de estoque",
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Confira Nossos Últimos Trabalhos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projetos que transformaram negócios locais em referências digitais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
