<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<!-- TABRAJAR COMO SPA: UTILIZAR COMO MARCO PARA NAVEGAR -->
<template>
  <NavBar />

  <div class="pt-20 min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <RouterView />
  </div>
</template>

