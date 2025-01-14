

export default function Loading() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 animate-pulse">
      <div className="inline-flex items-center gap-x-1.5 h-4 bg-gray-200 rounded w-1/4 my-8"></div>

      <div className="w-full h-64 bg-gray-200 rounded-lg mb-8"></div>

      <div className="flex gap-2 h-4 bg-gray-200 rounded w-1/4 mb-4 flex-wrap"></div>

      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>

      <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>

      <div className="prose max-w-none h-4 bg-gray-200 rounded w-full"></div>
    </article>
  )
}