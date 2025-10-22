"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

interface HeaderProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const headerHeight = 80
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    const duration = 800 // duração em ms
    let startTime: number | null = null

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const easedProgress = easeInOutCubic(progress)

      window.scrollTo(0, startPosition + distance * easedProgress)

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
    setIsOpen(false)
  }



  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 -ml-18">
            <div className="relative">
              <Image
                src={isDark ? "/FliqTransparentDarkTheme.png" : "/FliqTransparentWhiteTheme.png"}
                alt="Fliq Logo"
                width={250}
                height={150}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8 mr-24"
            role="navigation"
            aria-label="Menu principal"
          >
            <div className="relative group">
              <button className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Serviços</button>
              <div className="absolute left-0 mt-0 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/servicos/websites" className="block px-4 py-2 text-sm hover:bg-muted first:rounded-t-lg">
                  Websites
                </Link>
                <Link href="/servicos/ecommerce" className="block px-4 py-2 text-sm hover:bg-muted">
                  Ecommerce
                </Link>
                <Link
                  href="/servicos/midias-sociais"
                  className="block px-4 py-2 text-sm hover:bg-muted last:rounded-b-lg"
                >
                  Gestão de Mídias
                </Link>
              </div>
            </div>
            <motion.a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('portfolio')
              }}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              role="button"
              aria-label="Ir para seção Portfólio"
            >
              Portfólio
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              role="button"
              aria-label="Ir para seção Contato"
            >
              Contato
            </motion.a>
          </nav>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden pb-4 flex flex-col gap-2"
            role="navigation"
            aria-label="Menu mobile"
          >
            <Link
              href="/servicos/websites"
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Websites
            </Link>
            <Link
              href="/servicos/ecommerce"
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Ecommerce
            </Link>
            <Link
              href="/servicos/midias-sociais"
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gestão de Mídias
            </Link>
            <motion.a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('portfolio')
              }}
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors text-left cursor-pointer"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              role="button"
              aria-label="Ir para seção Portfólio"
            >
              Portfólio
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors text-left cursor-pointer"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              role="button"
              aria-label="Ir para seção Contato"
            >
              Contato
            </motion.a>
          </nav>
        )}
      </div>
    </header>
  )
}
