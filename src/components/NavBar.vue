<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

//Scroll state
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>

<template>
  <!--
    fixed top-0 w-full z-50: Fija el navbar arriba por encima de todo.
    isScrolled evalúa: si bajas, se pone transparente con un desenfoque (backdrop-blur-md).
    Si estás arriba, tiene un tono gris muy suave (bg-slate-100).
    También añadimos clases 'dark:' para que cambie de color en modo oscuro.
  -->
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled
        ? 'bg-transparent backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50'
        : 'bg-slate-100 dark:bg-slate-900'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- RUTAS DE NAVEGACIÓN (Izquierda) -->
        <nav class="flex gap-6">
          <RouterLink
            to="/"
            class="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors"
          >
            Inicio
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors"
          >
            Sobre mí
          </RouterLink>
        </nav>

        <!-- INTERRUPTOR MODO OSCURO (Derecha) -->
        <div>
          <button
            @click="toggleDarkMode"
            class="px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-700 transition-colors font-medium text-sm"
          >
            {{ isDark ? 'Modo Claro' : 'Modo Oscuro' }}
          </button>
        </div>

      </div>
    </div>
  </header>
</template>
