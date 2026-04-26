export type StrapiNoteReadDTO = {
  id: number;
  documentId: string;
  contentMd?: string;
  tagIds?: string[] | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
};

export type StrapiNoteWriteDTO = {
  data: {
    contentMd: string;
    tagIds: string[] | null;
  };
};
