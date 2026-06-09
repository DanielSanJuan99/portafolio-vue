<script setup>
</script>

<template>
  <section class="relative py-20 lg: py-32 overflow-hidden flex item-center justify-center min-h-[70hv]">
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

      <h1 class="text-5xl md:tex:7xl font-extrabold tracking-tight text-grey-900 dark:text-white mb-6 transition-colors duration-300">
        Hola, soy <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">Drock</span>
      </h1>

      <p class="mt-4 text-xl md:text-2xl text-grey-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Ingeniero de Software y Desarrollador Full-Stack. <br class="hidden sm:block" />
        Especializado en construir arquitecturas sólidas con Spring Boot y experiencias interactivas con Vue 3.
      </p>

      <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#proyectos"
          class="px-8 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-xl shadow-lg dark:shadow-xl transition-all duration-300"
          >
          Ver mis proyectos
        </a>

        <a
          href="https://github.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          class="px-8 py-3.5 text-base font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl transition-all duration-300 border border-transparent dark:border-slate-700"
          >
          Ver mi GitHub
        </a>
      </div>
    </div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none transition-colors duration-500"></div>
  </section>
</template>
