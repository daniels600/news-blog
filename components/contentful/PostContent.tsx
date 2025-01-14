import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getPostById, getAllPosts } from '@/lib/contentful';

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.fields.id.toString(),
  }));
}

export default async function PostContent({ params }: { params: { id: string } }) {
  const post = await getPostById(parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <Link
        className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline dark:text-blue-500 my-8"
        href="/contentful"
      >
        <svg
          className="shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to Blog
      </Link>

      {post.fields.image && (

        <Image
          src={`https:${post.fields.image.fields.file.url}`}
          alt={post.fields.image.fields.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg mb-8"
          placeholder="blur"
          blurDataURL={`https:${post.fields.image.fields.file.url}?w=50&q=10`}
          priority
        />

      )}
      <div className="flex gap-2 mb-4 flex-wrap">
        {post.fields.categories && post.fields.categories.map((category) => (
          <Link
            key={category}
            href={`/category/${category.toLowerCase()}`}
            className="text-sm bg-gray-100 px-2 py-1 rounded-full hover:bg-gray-200"
          >
            {category}
          </Link>
        ))}
      </div>
      <h1 className="text-4xl font-bold mb-4">{post.fields.title}</h1>
      <div className="text-gray-600 mb-8">
        By {post.fields.author.fields.name} |
        {new Date(post.fields.createdDate).toLocaleDateString()}
      </div>
      <div className="prose max-w-none">
        {documentToReactComponents(post.fields.description)}
      </div>
    </article>
  );
}