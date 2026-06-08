<script setup>
import ProjectCard from '@/components/projects/ProjectCard.vue'
</script>

<template>
  <main  class="p-8">
    <h1 class="text-4xl font-bold">WELCOME TO DROCK'S BACKYARD</h1>
    <p class="mt-4 text-lg">
      Desarrollador web Full-Stack. Construyendo soluciones desde Vue 3 hasta Spring Boot.
      Apasionado por la tecnología y el código limpio. ¡Explora mis proyectos y habilidades!
    </p>
  </main>
  <main class="max-w-7xl mx-auto p-8">
    <h1 class="text-4xl font-bold mb-8">Mis Proyectos</h1>

    <!-- Grilla responsiva: 1 columna en móvil, 2 en tablets, 3 en monitores -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <ProjectCard
        title="Microservicios con Kafka"
        description="Arquitectura de mensajería para procesamiento asíncrono de datos."
        :technologies="['Spring Boot', 'Kafka', 'Java']"
        githubLink="https://github.com/tu-usuario"
      />

      <ProjectCard
        title="Automatización de Streaming"
        description="Herramienta de escritorio para integrar OBS y Twitch mediante la API."
        :technologies="['Electron', 'Vue 3', 'Twurple']"
        githubLink="https://github.com/tu-usuario"
      />

    </div>
  </main>
</template>
