// Modèle front utilisé par le front (store, page, etc..)
export type NoteType = {
  id: string; // docId de strapi
  contentMd: string;
  tagIds: string[]; // ids de TagType côté front (string)
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

