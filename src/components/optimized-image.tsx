import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
    src: string
    alt: string
    width?: number
    height?: number
    priority?: boolean
    className?: string
    sizes?: string
}

export function OptimizedImage({
    src,
    alt,
    width,
    height,
    priority = false,
    className = '',
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 bg-muted animate-pulse rounded" />
            )}
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                sizes={sizes}
                quality={85}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false)
                    setHasError(true)
                }}
                className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
                    } ${hasError ? 'opacity-50' : ''}`}
            />
            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
                    <span className="text-sm">Erro ao carregar imagem</span>
                </div>
            )}
        </div>
    )
}
