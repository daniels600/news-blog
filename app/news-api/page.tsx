import { Suspense } from 'react'
import NewsList from "@/components/news-api/NewsList";
import Loading from "../loading"
export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page) : 1
  const category = typeof searchParams.category === 'string' ? searchParams.category : undefined
  const query = typeof searchParams.q === 'string' ? searchParams.q : undefined

  return (
    <>
      <Suspense fallback={<Loading />}>
        <NewsList page={page} category={category} query={query} />
      </Suspense>
    </>
  );
}
