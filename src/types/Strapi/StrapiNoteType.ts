// Forme brute renvoyée par Strapi pour une note
export type StrapiNoteReadDTO = {
  id: number;
  documentId: string;
  contentMd?: string;
  tagIds?: string[] | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
};

/** Payload envoyé à Strapi pour create/update (body de POST/PUT) */
// id not needed (passed in endpoint path parameter)
export type StrapiNoteWriteDTO = {
  data: {
    contentMd: string;
    tagIds: string[] | null;
  };
};

