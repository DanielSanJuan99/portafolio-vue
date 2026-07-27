<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/HeroSection.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import TechStack from '@/components/TechStack.vue'

const { t } = useI18n()

const myProjects = computed(() => [
  {
    id: 1,
    title: t('projects.kafka.name'),
    description: t('projects.kafka.description'),
    technologies: ['Spring Boot', 'Kafka', 'Java'],
    githubLink: 'https://github.com/tu-usuario'
  },
  {
    id: 2,
    title: t('projects.streaming.name'),
    description: t('projects.streaming.description'),
    technologies: ['Electron', 'Vue 3', 'Twurple'],
    githubLink: 'https://github.com/tu-usuario'
  }
])
</script>

<template>
  <main>
    <HeroSection />
    <section class="max-w-7xl mx-auto p8 pt-10">
      <TechStack />
    </section>

    <section id="proyectos" class="max-w-7xl mx-auto p-8 pt-20">
      <h1 class="text-3xl font-bold mb-10 text-gray-900 dark:text-white transition-colors">
        {{ $t('projects.title') }}
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <ProjectCard
          v-for="project in myProjects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :technologies="project.technologies"
          :githubLink="project.githubLink"
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
