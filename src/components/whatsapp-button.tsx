import { MessageCircle } from "lucide-react"
import { env } from "../lib/env"

export default function WhatsAppButton() {
  const phoneNumber = env.phone
  const message = "Olá! Gostaria de saber mais sobre os serviços da Fliq Digital."

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse"
      aria-label="Abrir WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}
