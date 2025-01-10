'use client'

import { useState } from 'react'

interface NewsImageProps {
  src: string
  alt: string
}

export default function NewsImage({ src, alt }: NewsImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <img
      className="w-full object-cover rounded-xl"
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc('/placeholder.jpg')}
    />
  )
} 