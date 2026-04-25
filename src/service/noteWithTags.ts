import type { NoteType } from '@/types/Domain/NoteType';
import type { TagType } from '@/types/Domain/TagType';

/** Format de sortie pour ListNote / NoteCard */
export type NoteWithTags = NoteType & { tags: Array<TagType> };

export function getNoteWithTags(note: NoteType, tags: TagType[]): NoteWithTags {
  const tagIds = note.tagIds ?? [];
  const tagsResolved = tagIds
    .map((tagId) => {
      const tag = tags.find((t) => t.id === tagId);
      return tag;
    })
    .filter((t): t is TagType => t !== undefined);

  return {
    ...note,
    tags: tagsResolved,
  };
}

export function getNotesWithTags(
  notes: NoteType[],
  tags: TagType[],
): NoteWithTags[] {
  return notes.map((n) => getNoteWithTags(n, tags));
}
