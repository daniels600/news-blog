import React from "react";
import CategoryFilter from "@/components/CategoryFilter"
import SearchForm from "@/components/SearchForm"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


async function getNews(page: number, category?: string, query?: string) {
  const pageSize = 10
  const apiKey = process.env.NEWS_API_KEY

  try {
    if (!apiKey) {
      throw new Error('News API key is not configured')
    }

    let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`

    if (category) {
      url += `&category=${category}`
    }

    if (query) {
      url += `&q=${query}`
    }

    const res = await fetch(url, { next: { revalidate: 60 } })

    if (!res.ok) {
      // Handle specific HTTP errors
      if (res.status === 429) {
        throw new Error('API rate limit exceeded. Please try again later.')
      }
      if (res.status === 401) {
        throw new Error('Invalid API key')
      }
      throw new Error(`Failed to fetch articles: ${res.status} ${res.statusText}`)
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error('News API Error:', error)
    throw error
  }
}


export default async function NewsList({ page, category, query }: { page: number, category?: string, query?: string }) {

  try {

    const { articles, totalResults } = await getNews(page, category, query)
    const pageSize = 10 // Make sure this matches the pageSize in getNews
    const totalPages = Math.ceil(totalResults / pageSize)

    if (!articles || articles.length === 0) {
      return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-center">
          <p className="text-gray-600 dark:text-neutral-400">No articles found.</p>
        </div>
      )
    }

    return (
      <>
        {/* Card Blog */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              The World News
            </h2>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              See how game-changing companies are making the most of every
              engagement with Preline.
            </p>
          </div>
          {/* End Title */}
          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-8 mb-10 justify-between items-center">
            <div className="w-full sm:w-[400px]">
              <SearchForm initialQuery={query} />
            </div>
            <CategoryFilter initialCategory={category} />
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card */}
            <a
              className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
              href="#"
            >
              <div className="aspect-w-16 aspect-h-11">
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Blog Image"
                />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                  Announcing a free plan for small teams
                </h3>
                <p className="mt-5 text-gray-600 dark:text-neutral-400">
                  At Wake, our mission has always been focused on bringing
                  openness.
                </p>
              </div>
              <div className="mt-auto flex items-center gap-x-3">
                <img
                  className="size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-neutral-200">
                    Aaron Larsson
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-neutral-500">
                    Feb 15, 2021
                  </p>
                </div>
              </div>
            </a>
            {/* End Card */}
            {/* Card */}
            <a
              className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
              href="#"
            >
              <div className="aspect-w-16 aspect-h-11">
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Blog Image"
                />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                  How Google Assistant now helps you record stories for kids
                </h3>
                <p className="mt-5 text-gray-600 dark:text-neutral-400">
                  Google is constantly updating its consumer AI, Google Assistant,
                  with new features.
                </p>
              </div>
              <div className="mt-auto flex items-center gap-x-3">
                <img
                  className="size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <div>
                  <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                    By Aaron Larsson
                  </h5>
                </div>
              </div>
            </a>
            {/* End Card */}
            {/* Card */}
            <a
              className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
              href="#"
            >
              <div className="aspect-w-16 aspect-h-11">
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Blog Image"
                />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                  Front accounts - let&apos;s work together
                </h3>
                <p className="mt-5 text-gray-600 dark:text-neutral-400">
                  Are you an accountant? Are you a company formation advisor?
                </p>
              </div>
              <div className="mt-auto flex items-center gap-x-3">
                <img
                  className="size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <div>
                  <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                    By Lauren Waller
                  </h5>
                </div>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Grid */}
          {/* Card */}
          <div className="mt-12">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Showing page {page} of {totalPages} ({totalResults} articles)
              </p>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href={`/?page=${page > 1 ? page - 1 : 1}${category ? `&category=${category}` : ''}${query ? `&q=${query}` : ''}`}
                      isActive={page > 1}
                    />
                  </PaginationItem>

                  {/* Add page numbers - show current, first, last, and nearby pages */}
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNumber;
                    if (totalPages <= 5) {
                      pageNumber = i + 1;
                    } else if (page <= 3) {
                      pageNumber = i + 1;
                    } else if (page >= totalPages - 2) {
                      pageNumber = totalPages - 4 + i;
                    } else {
                      pageNumber = page - 2 + i;
                    }

                    return (
                      <PaginationItem key={pageNumber}>
                        <PaginationLink
                          href={`/?page=${pageNumber}${category ? `&category=${category}` : ''}${query ? `&q=${query}` : ''}`}
                          isActive={pageNumber === page}
                        >
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}

                  <PaginationItem>
                    <PaginationNext
                      href={`/?page=${page < totalPages ? page + 1 : totalPages}${category ? `&category=${category}` : ''}${query ? `&q=${query}` : ''}`}
                      isActive={page < totalPages}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Card Blog */}
      </>
    );

  } catch (error) {
    return (
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-center">
        <div className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-600 dark:text-red-400">
            {error instanceof Error ? error.message : 'An error occurred while fetching the news'}
          </p>
        </div>
      </div>
    )
  }

};


