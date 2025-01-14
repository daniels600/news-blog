/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface Author {
  sys: {
    id: string;
  };
  fields: {
    name: string;
  };
}

export interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    id: number;
    title: string;
    createdDate?: string;  
    description?: {        
      nodeType: string;
      data: {};
      content: any[];
    };
    image?: {             
      fields: {
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
        title: string;
      };
    };
    author?: {            
      sys: {
        id: string;
      };
      fields: Author['fields'];
    };
    categories?: string[];  
  };
}