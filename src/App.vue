<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/AppFooter.vue/index.js'
</script>

<!-- TABRAJAR COMO SPA: UTILIZAR COMO MARCO PARA NAVEGAR -->
<template>
  <NavBar />

  <div class="flex flex-col min-h-screen pt-20 bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <div class="flex-grow">
      <RouterView />
    </div>

    <Footer />
  </div>
</template>

