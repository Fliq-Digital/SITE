import React from 'react'

interface StructuredDataProps {
    data: any
}

export function StructuredData({ data }: StructuredDataProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}

// Schema para organização/empresa
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fliq - Consultoria Digital",
    "description": "Transformamos negócios locais através de websites profissionais, ecommerce que vendem e gestão estratégica de mídias sociais.",
    "url": "https://fliqdigital.com.br",
    "logo": "https://fliqdigital.com.br/FliqTransparentDarkTheme.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-XX-XXXX-XXXX", // Substitua pelo telefone real
        "contactType": "customer service",
        "availableLanguage": "Portuguese"
    },
    "sameAs": [
        "https://www.instagram.com/fliqdigital", // Substitua pelas redes sociais reais
        "https://www.facebook.com/fliqdigital",
        "https://www.linkedin.com/company/fliqdigital"
    ],
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "BR",
        "addressLocality": "Brasil"
    },
    "service": [
        {
            "@type": "Service",
            "name": "Desenvolvimento de Websites",
            "description": "Criamos websites modernos, responsivos e otimizados para SEO"
        },
        {
            "@type": "Service",
            "name": "Desenvolvimento de Ecommerce",
            "description": "Plataformas de vendas online completas com integração de pagamentos"
        },
        {
            "@type": "Service",
            "name": "Gestão de Mídias Sociais",
            "description": "Estratégias completas para crescer sua presença nas redes sociais"
        }
    ]
}

// Schema para página de serviços
export const serviceSchema = (serviceName: string, serviceDescription: string, serviceUrl: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
        "@type": "Organization",
        "name": "Fliq - Consultoria Digital",
        "url": "https://fliqdigital.com.br"
    },
    "url": serviceUrl,
    "areaServed": {
        "@type": "Country",
        "name": "Brasil"
    },
    "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": serviceUrl,
        "serviceSmsNumber": "+55-XX-XXXX-XXXX" // Substitua pelo WhatsApp real
    }
})

// Schema para FAQ
export const faqSchema = (faqs: Array<{ question: string, answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
})

// Schema para breadcrumbs
export const breadcrumbSchema = (items: Array<{ name: string, url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
    }))
})
