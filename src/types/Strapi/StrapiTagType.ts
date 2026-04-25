// Forme brute renvoyée par Strapi pour un tag
export type StrapiTagReadDTO = {
  id: number;
  documentId: string;
  title?: string;
  color?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
};

/** Payload envoyé à Strapi pour create/update (body de POST/PUT) */
export type StrapiTagWriteDTO = {
  data: {
    title: string;
    color?: string;
  };
};

