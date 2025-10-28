"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import Header from "@/src/components/header"
import Footer from "@/src/components/footer"
import { Button } from "@/src/components/ui/button"

export default function NotFound() {
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

            <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* 404 Number */}
                    <motion.div
                        className="text-8xl sm:text-9xl font-bold text-primary/20 mb-4"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        404
                    </motion.div>

                    {/* Error Message */}
                    <motion.h1
                        className="text-3xl sm:text-4xl font-bold mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Página não encontrada
                    </motion.h1>

                    <motion.p
                        className="text-lg text-muted-foreground mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Ops! Parece que a página que você está procurando não existe ou foi movida.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <Button asChild size="lg" className="w-full sm:w-auto">
                            <Link href="/" className="flex items-center gap-2">
                                <Home size={20} />
                                Voltar à Home
                            </Link>
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto"
                            onClick={() => window.history.back()}
                        >
                            <ArrowLeft size={20} />
                            Voltar
                        </Button>
                    </motion.div>

                    {/* Additional Help */}
                    <motion.div
                        className="mt-12 p-6 bg-card border border-border rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <h3 className="font-semibold mb-2">Precisa de ajuda?</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Se você acredita que isso é um erro, entre em contato conosco.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 justify-center">
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/servicos/websites">Websites</Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/servicos/ecommerce">Ecommerce</Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/servicos/midias-sociais">Mídias Sociais</Link>
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            </main>

            <Footer isDark={isDark} />
        </div>
    )
}
