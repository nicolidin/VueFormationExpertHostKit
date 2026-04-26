<template>
  <Layout>
    <div class="home">
      <h1 class="home__title">Accueil</h1>
      <p class="home__text">
        Exemple de page d’accueil pour un hôte minimal : routes, Pinia, styles et
        configuration Vuetify issus de la lib (alias <code>@vueLibExo/</code>).
      </p>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@vueLibExo/components/Organisms/Layout/Layout.vue';
</script>

<style scoped lang="scss">
.home {
  padding: 2rem;
  max-width: 40rem;

  &__title {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  }

  &__text {
    line-height: 1.5;
  }
}
</style>
