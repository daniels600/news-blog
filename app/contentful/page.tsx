import { Suspense } from 'react';
import ContentfulNewsList from "@/components/contentful/ContentfulNewsList";
import Loading from "../loading";

export default async function ContentfulPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page) : 1
  const category = typeof searchParams.category === 'string' ? searchParams.category : undefined
  const query = typeof searchParams.q === 'string' ? searchParams.q : undefined

  return (
    <Suspense fallback={<Loading />}>
      <ContentfulNewsList page={page} category={category} query={query} />
    </Suspense>
  );
}