import { Document } from '@contentful/rich-text-types';
import { Asset, EntryFields, EntrySkeletonType } from 'contentful';

// Define the Author interface
export interface Author {
  sys: {
    id: string;
    type: string;
    linkType: string;
  };
  fields: {
    name: string;
  };
}

// Define the BlogPost interface
export interface BlogPost extends EntrySkeletonType {
  contentTypeId: 'newBlog';  // Add this line - must match your Contentful content type ID
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
  };
  fields: {
    id: EntryFields.Integer;
    title?: EntryFields.Symbol;
    createdDate?: EntryFields.Date;
    description?: Document;
    image?: Asset;
    author?: Author;
    categories: EntryFields.Symbol[];
  };
}