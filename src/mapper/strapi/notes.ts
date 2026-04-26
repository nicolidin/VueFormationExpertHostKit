import type { NoteType } from '@/types/Domain/NoteType';
import type {
  StrapiNoteReadDTO,
  StrapiNoteWriteDTO,
} from '@/types/Strapi/StrapiNoteType';

export function fromStrapiNote(raw: StrapiNoteReadDTO): NoteType {
  return {
    id: raw.documentId,
    contentMd: raw.contentMd ?? '',
    tagIds: raw.tagIds ?? [],
    createdAt: raw.createdAt ?? '',
    updatedAt: raw.updatedAt ?? '',
    publishedAt: raw.publishedAt ?? '',
  };
}

export function toStrapiNote(note: Pick<NoteType, 'contentMd' | 'tagIds'>): StrapiNoteWriteDTO {
  const tagIds = (note.tagIds ?? []).filter((id) => id.trim().length > 0);

  return {
    data: {
      contentMd: note.contentMd,
      tagIds: tagIds.length > 0 ? tagIds : null,
    },
  };
}

