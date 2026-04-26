import type { TagType } from '@/types/Domain/TagType';
import type {
  StrapiTagReadDTO,
  StrapiTagWriteDTO,
} from '@/types/Strapi/StrapiTagType';

export function fromStrapiTag(raw: StrapiTagReadDTO): TagType {
  const nowIso = new Date().toISOString();

  return {
    id: raw.documentId,
    title: raw.title ?? '',
    color: raw.color ?? '#9E9E9E',
    createdAt: raw.createdAt ?? nowIso,
    updatedAt: raw.updatedAt ?? nowIso,
    publishedAt: raw.publishedAt ?? nowIso,
  };
}

export function toStrapiTag(tag: {
  title: string;
  color?: string;
}): StrapiTagWriteDTO {
  return { data: tag };
}

