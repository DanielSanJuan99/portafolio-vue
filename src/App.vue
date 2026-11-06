<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
import { usePreferencesStore } from './stores/preferences'

const preferences = usePreferencesStore()
const { locale } = useI18n()

//Se ejecuta al cargar la página
onMounted(()=>{
  preferences.applyTheme() // Aplica el fondo oscuro/claro guardado en memoria
  locale.value = preferences.locale // Aplica el idioma guardado en vue-i18n
})
</script>

<!-- TABRAJAR COMO SPA: UTILIZAR COMO MARCO PARA NAVEGAR -->
<template>
  <NavBar />

  <div class="flex flex-col min-h-screen pt-20 bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <div class="grow">
      <RouterView />
    </div>

    <AppFooter />
  </div>
</template>

