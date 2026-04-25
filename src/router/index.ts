import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import NoteListPage from '@/views/NoteListPage.vue';
import NoteEditPage from '@/views/NoteEditPage.vue';
import AboutPage from '@/views/AboutPage.vue';
import IlsOntEcritPage from '@/views/IlsOntEcritPage.vue';
import IlsOntEcritDetailPage from '@/views/IlsOntEcritDetailPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/notes',
    name: 'NoteList',
    component: NoteListPage,
  },
  {
    path: '/notes/:id',
    name: 'NoteEdit',
    component: NoteEditPage,
  },
  {
    path: '/ils-ont-ecrit',
    name: 'IlsOntEcrit',
    component: IlsOntEcritPage,
  },
  {
    path: '/ils-ont-ecrit/:id',
    name: 'IlsOntEcritDetail',
    component: IlsOntEcritDetailPage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
