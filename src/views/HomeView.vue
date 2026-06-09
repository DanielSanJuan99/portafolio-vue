<script setup>
import HeroSection from '@/components/HeroSection.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
</script>

<template>
  <main>
    <HeroSection />
    <section id="proyectos" class="max-w-7xl mx-auto p-8 pt-20">
      <h1 class="text-3xl font-bold mb-10 text-gray-900 dark:text-white transition-colors">Mis Proyectos</h1>

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
    </section>
  </main>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
