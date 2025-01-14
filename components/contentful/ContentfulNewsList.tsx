/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { createClient } from 'contentful';
import CategoryFilter from "@/components/contentful/CategoryFilter";
import SearchForm from "@/components/contentful/SearchForm";
import ContentfulImage from "@/components/contentful/ContentfulImage";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { BlogPost } from "@/types/blog";

const ITEMS_PER_PAGE = 9;

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

async function getBlogPosts(page: number, category?: string, query?: string) {
  try {
    // Ensure page is a valid number between 1 and 100
    const currentPage = Math.min(100, Math.max(1, Number(page) || 1));

    // Calculate skip, ensuring it's a valid non-negative number
    const skip = Math.max(0, (currentPage - 1) * ITEMS_PER_PAGE);

    const queryParams: any = {
      content_type: 'newBlog',
      limit: ITEMS_PER_PAGE,
      skip: skip,
      order: '-sys.createdAt',
      select: [
        'sys.id',
        'sys.createdAt',
        'fields.id',
        'fields.title',
        'fields.description',
        'fields.image',
        'fields.author',
        'fields.categories'
      ].join(',')
    };

    // Add category filter if specified
    if (category && category !== 'All') {
      queryParams['fields.categories[in]'] = category.charAt(0).toUpperCase()
        + category.slice(1);
    }

    // Add search query if specified
    if (query) {
      queryParams['query'] = query;
    }

    console.log('Contentful Query Params:', queryParams);

    const response = await client.getEntries<BlogPost>(queryParams);

    // Add additional validation for the response
    if (!response || !Array.isArray(response.items)) {
      throw new Error('Invalid response from Contentful');
    }

    return {
      posts: response.items,
      total: response.total,
    };
  } catch (error) {
    console.error('Contentful Error:', error);
    throw error;
  }
}

export default async function ContentfulNewsList({
  page = 1,
  category,
  query,
}: {
  page: number;
  category?: string;
  query?: string;
}) {

  try {
    const { posts, total } = await getBlogPosts(page, category, query);
    const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

    if (!posts || posts.length === 0) {
      return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-center">
          <p className="text-gray-600 dark:text-neutral-400">No articles found.</p>
        </div>
      );
    }

    return (
      <>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Latest News
            </h2>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Stay informed with our latest articles and updates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 mb-10 justify-between items-center">
            <div className="w-full sm:w-[400px]">
              <SearchForm initialQuery={query} />
            </div>
            <CategoryFilter initialCategory={category} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <a
                key={post.sys.id}
                className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition duration-300 rounded-xl dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40"
                href={`/posts/${post.fields.id}`}
              >
                <div className="p-5 flex flex-col h-full">
                  {post.fields.image && (
                    <div className="w-full mb-6">
                      <ContentfulImage
                        src={post.fields.image.fields.file.url}
                        alt={post.fields.image.fields.title}
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white line-clamp-2 mb-4">
                      {post.fields.title}
                    </h3>
                    {post.fields.description && (
                      <p className="text-gray-600 dark:text-neutral-400 line-clamp-3 mb-6">
                        {post.fields.description.content[0]?.content[0]?.value || ''}
                      </p>
                    )}
                    <div className="mt-auto">
                      {post.fields.categories && post.fields.categories.length > 0 && (
                        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/50 dark:text-blue-300">
                          {post.fields.categories[0]}
                        </span>
                      )}
                      {post.fields.author && (
                        <h4 className="font-semibold text-gray-800 dark:text-neutral-200">
                          {post.fields.author.fields.name}
                        </h4>
                      )}
                      <p className="text-xs text-gray-500 dark:text-neutral-500">
                        {new Date(post.sys.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
                Showing page {page} of {totalPages} ({posts.length} articles)
              </p>
              <div className="w-full sm:w-auto overflow-x-auto">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href={page > 1 ? `/?page=${page - 1}${category ? `&category=${category}` : ''}${query ? `&q=${query}` : ''}` : '#'}
                        className={page <= 1 ? 'pointer-events-none opacity-50' : ''}
                        isActive={page > 1}
                      />
                    </PaginationItem>
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
                        href={page < totalPages ? `/?page=${page + 1}${category ? `&category=${category}` : ''}${query ? `&q=${query}` : ''}` : '#'}
                        className={page >= totalPages ? 'pointer-events-none opacity-50' : ''}
                        isActive={page < totalPages}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    return (
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-center">
        <div className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-600 dark:text-red-400">
            {error instanceof Error ? error.message : 'An error occurred while fetching the blog posts'}
          </p>
        </div>
      </div>
    );
  }
}