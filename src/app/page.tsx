"use client"

import { useState, useEffect } from "react"
import Header from "@/src/components/header"
import Hero from "@/src/components/hero"
import Services from "@/src/components/services"
import ClientsCarousel from "@/src/components/clients-carousel"
import Portfolio from "@/src/components/portfolio"
import CTA from "@/src/components/cta"
import Footer from "@/src/components/footer"
import WhatsAppButton from "@/src/components/whatsapp-button"

export default function Home() {
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
      <Hero isDark={isDark} />
      <Services />
      <ClientsCarousel />
      <Portfolio />
      <CTA />
      <Footer isDark={isDark} />
      <WhatsAppButton />
    </div>
  )
}
