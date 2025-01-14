

import { Suspense } from "react"
import PostContent from "@/components/contentful/PostContent"
import Loading from "./loading"

export default function Post({ params }: { params: { id: string } }) {

  return (
    <Suspense fallback={<Loading />}>
      <PostContent params={params} />
    </Suspense>
  );
}