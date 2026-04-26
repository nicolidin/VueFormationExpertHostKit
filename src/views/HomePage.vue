<template>
  <Layout>
    <div class="home">
      <h1 class="home__title">Accueil</h1>
      <p class="home__text">
        Page d’accueil bidon : le gros du boulot c’est la lib en submodule
        (<code>@vueLibExo/</code>), Vuetify inclus.
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
