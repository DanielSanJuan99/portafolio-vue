<script setup>
// Definimos las propiedades que este componente va a recibir desde afuera
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  technologies: {
    type: Array,
    default: () => []
  },
  githubLink: {
    type: String,
    default: '#'
  }
})
</script>

<template>
  <!--
    Contenedor principal de la tarjeta.
    Usa group para efectos hover y clases dark: para el modo oscuro.
  -->
  <article class="group flex flex-col justify-between p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300">

    <div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {{ title }}
      </h3>

      <p class="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {{ description }}
      </p>
    </div>

    <div class="mt-6">
      <!-- Contenedor de tecnologías (Aquí luego integraremos el TechBadge) -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="(tech, index) in technologies"
          :key="index"
          class="px-2.5 py-1 text-xs font-medium bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-300 rounded-md"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Botón de GitHub o Enlace -->
      <a
        :href="githubLink"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
        Ver Repositorio
      </a>
    </div>

  </article>
</template>
