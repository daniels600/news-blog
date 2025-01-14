'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'

export default function SearchForm({ initialQuery = '' }) {
  const [query, setQuery] = useState(initialQuery)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Preserve the category parameter if it exists
    const searchParams = new URLSearchParams(window.location.search);
    const existingCategory = searchParams.get('category');
    
    const newPath = `/contentful?q=${encodeURIComponent(query)}${existingCategory ? `&category=${existingCategory}` : ''}`;
    router.push(newPath)
  }

  const handleClear = () => {
    setQuery('')
    // Preserve the category parameter when clearing the search
    const searchParams = new URLSearchParams(window.location.search);
    const existingCategory = searchParams.get('category');
    
    const newPath = existingCategory ? `/contentful?category=${existingCategory}` : '/contentful';
    router.push(newPath)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <Input
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-3 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      <button type="submit" className="bg-black text-white px-4 py-1 rounded">Search</button>
    </form>
  )
}