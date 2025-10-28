import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { StructuredData, organizationSchema } from "@/src/components/structured-data"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Fliq - Consultoria Digital | Websites, Ecommerce e Mídias Sociais",
    template: "%s | Fliq - Consultoria Digital"
  },
  description: "Transformamos negócios locais através de websites profissionais, ecommerce que vendem e gestão estratégica de mídias sociais. Soluções digitais completas para seu crescimento.",
  keywords: [
    "consultoria digital",
    "desenvolvimento de websites",
    "ecommerce",
    "loja online",
    "mídias sociais",
    "marketing digital",
    "SEO",
    "design responsivo",
    "negócios locais",
    "presença digital"
  ],
  authors: [{ name: "Fliq - Consultoria Digital" }],
  creator: "Fliq - Consultoria Digital",
  publisher: "Fliq - Consultoria Digital",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://fliqdigital.com.br',
    siteName: 'Fliq - Consultoria Digital',
    title: 'Fliq - Consultoria Digital | Websites, Ecommerce e Mídias Sociais',
    description: 'Transformamos negócios locais através de websites profissionais, ecommerce que vendem e gestão estratégica de mídias sociais.',
    images: [
      {
        url: '/FliqTransparentDarkTheme.png',
        width: 1200,
        height: 630,
        alt: 'Fliq - Consultoria Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fliq - Consultoria Digital | Websites, Ecommerce e Mídias Sociais',
    description: 'Transformamos negócios locais através de websites profissionais, ecommerce que vendem e gestão estratégica de mídias sociais.',
    images: ['/FliqTransparentDarkTheme.png'],
  },
  alternates: {
    canonical: 'https://fliqdigital.com.br',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData data={organizationSchema} />
      </head>
      <body className={`font-sans antialiased ${_geist.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
