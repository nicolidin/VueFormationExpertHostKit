# API Strapi

Ce dossier contient les services API pour communiquer avec Strapi (appels directs, pas de proxy).

## Structure

- **`strapi/notes.ts`** : Notes (fetchNotesApi, fetchNoteApi, postNoteApi, updateNoteApi)
- **`strapi/tags.ts`** : Tags (fetchTagsApi, postTagApi)
- **`strapi/community-pinned-notes.ts`** : Notes épinglées (fetchCommunityPinnedNotesApi, fetchCommunityPinnedNoteApi)
- **`index.ts`** : Export centralisé

## Configuration

Dans `.env` :
- `VITE_STRAPI_BASE_URL=http://localhost:1337` (URL de base Strapi)
- `VITE_STRAPI_BEARER_TOKEN=` (optionnel, token pour dev si l’API exige l’auth)

## Utilisation

```typescript
import {
  fetchNotesApi,
  fetchNoteApi,
  postNoteApi,
  updateNoteApi,
  fetchTagsApi,
  postTagApi,
  fetchCommunityPinnedNotesApi,
  fetchCommunityPinnedNoteApi,
} from '@/api';
```

Les réponses sont mappées en modèles front (NoteType, TagType) via les mappers dans `@/mapper/strapi/*`.
