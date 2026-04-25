import { computed, type Ref, type ComputedRef } from 'vue'
import type { NoteType } from '@/types/Domain/NoteType'

export function useSearch(
  notes: Ref<NoteType[]>,
  query: Ref<string>
): { filteredNotes: ComputedRef<NoteType[]> } {
  const filteredNotes = computed(() => {
    if (!query.value.trim()) {
      return notes.value
    }
    const lowerQuery = query.value.toLowerCase()
    return notes.value.filter(note =>
      note.contentMd.toLowerCase().includes(lowerQuery)
    )
  })

  return { filteredNotes }
}
