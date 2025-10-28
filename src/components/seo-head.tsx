import Head from 'next/head'

interface SEOHeadProps {
    title: string
    description: string
    keywords?: string[]
    image?: string
    url?: string
    type?: string
}

export function SEOHead({
    title,
    description,
    keywords = [],
    image = '/FliqTransparentDarkTheme.png',
    url = 'https://fliqdigital.com.br',
    type = 'website'
}: SEOHeadProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords.length > 0 && (
                <meta name="keywords" content={keywords.join(', ')} />
            )}
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Fliq - Consultoria Digital" />
            <meta property="og:locale" content="pt_BR" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Fliq - Consultoria Digital" />
        </Head>
    )
}
