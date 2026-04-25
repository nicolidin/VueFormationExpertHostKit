<template>
  <Layout>
    <div v-if="isLoading" class="ils-ont-ecrit">
      <p>Chargement…</p>
    </div>
    <div v-else class="ils-ont-ecrit">
    <h1 class="text-h4 mb-2">Ils ont écrit</h1>
    <p class="text-body-2 text-medium-emphasis mb-4">
      Les notes épinglées de la communauté
    </p>
    <ListNote :notes="mappedNotes" @note-click="goToNote" />
  </div>
  </Layout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import type { NoteDisplay } from '@vueLibExo/types/display.ts'
import Layout from '@vueLibExo/components/Organisms/Layout/Layout.vue'
import ListNote from '@vueLibExo/components/Molecules/ListNote/ListNote.vue'
import { fetchCommunityPinnedNotesApi } from '@/api/strapi/community-pinned-notes';
import { fetchTagsApi } from '@/api/strapi/tags';
import { useFetch } from '@/composables/useFetch';
import type { NoteType } from '@/types/Domain/NoteType';
import type { TagType } from '@/types/Domain/TagType';
import { getNotesWithTags } from '@/service/noteWithTags';

const router = useRouter();

const { data, isLoading } = useFetch<[NoteType[], TagType[]]>(() =>
  Promise.all([fetchCommunityPinnedNotesApi(), fetchTagsApi()]),
);

const pinnedNotes = computed(() => data.value?.[0] ?? null);
const tags = computed(() => data.value?.[1] ?? []);

const mappedNotes = computed(() => {
  const list = pinnedNotes.value ?? [];
  return getNotesWithTags(list, tags.value);
});

function goToNote(note: NoteDisplay) {
  router.push(`/ils-ont-ecrit/${String(note.id)}`);
}
</script>

<style scoped lang="scss">
.ils-ont-ecrit {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
