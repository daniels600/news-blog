import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getAllPosts() {
  const response = await client.getEntries({
    content_type: 'newBlog',
    order: ['-fields.createdDate'],
  });
  
  return response.items;
}

export async function getPostById(id: number) {
  const response = await client.getEntries({
    content_type: 'newBlog',
    'fields.id': id,
    limit: 1,
  });
  
  return response.items[0] || null;
}

export async function getPostsByCategory(category: string) {
  const response = await client.getEntries({
    content_type: 'newBlog',
    'fields.categories[in]': category,
    order: ['-fields.createdDate'],
  });
  
  return response.items;
}
