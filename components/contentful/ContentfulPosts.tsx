/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BlogPost } from '../../types';
import { Document } from '@contentful/rich-text-types';

export default function ContentfulPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="border rounded-lg p-6 shadow-lg">
      {post.fields.image && (
        <Image
          src={`https:${(post.fields.image as any)?.fields.file.url}`}
          alt={(post.fields.image as any)?.fields.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{post.fields.title}</h2>
        
        {/* Only render categories if they exist */}
        {post.fields.categories && post.fields.categories.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {post.fields.categories.map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className="text-sm bg-gray-100 px-2 py-1 rounded-full hover:bg-gray-200"
              >
                {category}
              </Link>
            ))}
          </div>
        )}

        <div className="text-sm text-gray-600">
          {post.fields.author && (
            <>By {post.fields.author.fields.name} | </>
          )}
          {post.fields.createdDate && (
            new Date(post.fields.createdDate).toLocaleDateString()
          )}
        </div>
        
        {post.fields.description && (
          <div className="prose prose-sm line-clamp-3">
            {documentToReactComponents(post.fields.description as Document)}
          </div>
        )}
        
        <Link
          href={`/posts/${post.fields.id}`}
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}