import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { NoteType } from '@/types/Domain/NoteType';
import type { TagType } from '@/types/Domain/TagType';

export type NotesState = {
  notes: Array<NoteType>;
  tags: Array<TagType>;
  selectedTagNames: string[];
};

export const useNotesStore = defineStore(
  'notesStore',
  () => {
    const notes = ref<NoteType[]>([]);
    const tags = ref<TagType[]>([]);
    const selectedTagNames = ref<string[]>([]);

    const notesById = (id: string): NoteType | undefined =>
      notes.value.find((note) => note.id === id);

    const selectedTagIds = computed(() => {
      if (selectedTagNames.value.length === 0) return null;
      return new Set(
        tags.value
          .filter((tag) => selectedTagNames.value.includes(tag.title))
          .map((tag) => tag.id),
      );
    });

    const filteredNotes = computed(() => {
      const selectedIds = selectedTagIds.value;
      if (selectedIds === null) return notes.value;
      return notes.value.filter((note: NoteType) => {
        if (!note.tagIds || note.tagIds.length === 0) return false;
        return note.tagIds.some((tagId) => selectedIds.has(tagId));
      });
    });

    function setNotes(newNotes: Array<NoteType>) {
      notes.value = newNotes;
    }

    function setTags(newTags: Array<TagType>) {
      tags.value = newTags;
    }

    function addNote(note: NoteType) {
      if (notes.value.some((n) => n.id === note.id)) return;
      notes.value.push(note);
    }

    function updateNote(updated: NoteType) {
      const index = notes.value.findIndex((n) => n.id === updated.id);
      if (index === -1) return;
      notes.value[index] = updated;
    }

    function mergeTags(tagsFromApi: Array<TagType>) {
      const inStoreOnly = tags.value.filter(
        (t) => !tagsFromApi.some((a) => a.id === t.id),
      );
      tags.value = [...tagsFromApi, ...inStoreOnly];
    }

    function addTag(tag: TagType) {
      if (tags.value.some((t) => t.id === tag.id)) return;
      tags.value.push(tag);
    }

    function setTagSelected(tagName: string, isSelected: boolean) {
      if (isSelected) {
        if (!selectedTagNames.value.includes(tagName)) {
          selectedTagNames.value.push(tagName);
        }
      } else {
        const index = selectedTagNames.value.indexOf(tagName);
        if (index > -1) {
          selectedTagNames.value.splice(index, 1);
        }
      }
    }

    function clearSelectedTags() {
      selectedTagNames.value = [];
    }

    return {
      notes,
      tags,
      selectedTagNames,
      notesById,
      selectedTagIds,
      filteredNotes,
      setNotes,
      setTags,
      addNote,
      updateNote,
      mergeTags,
      addTag,
      setTagSelected,
      clearSelectedTags,
    };
  },
  {
    persist: {
      key: 'notes',
      storage: localStorage,
      pick: ['notes', 'tags'],
    },
  },
);
