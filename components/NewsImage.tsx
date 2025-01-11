"use client"

import Image from 'next/image'
import { useState } from 'react'

interface NewsImageProps {
  src: string
  alt: string
}

export default function NewsImage({ src, alt }: NewsImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0">
          <div className="w-full h-full animate-pulse bg-gray-200 dark:bg-gray-800" />
        </div>
      )}
      <Image
        className={`rounded-xl object-cover transition-all duration-300 ${
          isLoading ? 'scale-110 blur-2xl' : 'scale-100 blur-0'
        }`}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={75}
        onLoadingComplete={() => setIsLoading(false)}
        onError={(e) => {
          e.currentTarget.src = '/placeholder.jpg'
          setIsLoading(false)
        }}
      />
    </div>
  )
}