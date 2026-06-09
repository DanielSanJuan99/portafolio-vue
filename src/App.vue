<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<!-- TABRAJAR COMO SPA: UTILIZAR COMO MARCO PARA NAVEGAR -->
<template>
  <NavBar />

  <div class="flex flex-col min-h-screen pt-20 bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <div class="flex-grow">
      <RouterView />
    </div>

    <AppFooter />
  </div>
</template>

