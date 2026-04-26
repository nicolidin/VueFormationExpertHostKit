export type StrapiTagReadDTO = {
  id: number;
  documentId: string;
  title?: string;
  color?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
};

export type StrapiTagWriteDTO = {
  data: {
    title: string;
    color?: string;
  };
};
