"use client"

import { useEffect, useState } from "react"

const clients = [
  {
    name: "Spazio Parts",
    logo: "/client-logos/logospazio.jpg",
    alt: "SpazioParts Logo"
  },
  {
    name: "Macena Fishing",
    logo: "/client-logos/MacenaFishingLogo.jpeg",
    alt: "Macena Fishing Logo"
  },
]

export default function ClientsCarousel() {
  const [offset, setOffset] = useState(0)
  const shouldAnimate = clients.length >= 4

  useEffect(() => {
    if (!shouldAnimate) return

    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % (clients.length * 100))
    }, 30)

    return () => clearInterval(interval)
  }, [shouldAnimate])

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Empresas que confiam na gente</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com diversos tipos de negócios, ajudando-os a crescer online
          </p>
        </div>

        <div className="relative overflow-hidden">
          {shouldAnimate ? (
            <div className="flex gap-8 animate-scroll" style={{ transform: `translateX(-${offset}px)` }}>
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-32 bg-background border border-border rounded-lg flex flex-col items-center justify-center gap-3 hover:border-primary transition-colors p-4"
                >
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-center px-2">{client.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex gap-8 justify-center flex-wrap">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-32 bg-background border border-border rounded-lg flex flex-col items-center justify-center gap-3 hover:border-primary transition-colors p-4"
                >
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-center px-2">{client.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {shouldAnimate && (
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${clients.length * 200}px);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      )}
    </section>
  )
}
