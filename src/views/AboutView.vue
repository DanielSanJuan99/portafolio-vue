<script setup>
import TimeLineItem from '@/components/TimeLineItem.vue'

const historyItems = [
  {
    date: '2020 - 2021',
    title: 'Desarrollador Junior en XYZ Company',
    subtitle: 'Desarrollo de aplicaciones web con Vue.js y Spring Boot',
    description: 'Participé en el desarrollo de varias aplicaciones internas, mejorando mis habilidades en Java y Vue.js.'
  },
  {
    date: '2021 - 2023',
    title: 'Desarrollador Full-Stack en ABC Tech',
    subtitle: 'Lideré proyectos de microservicios y aplicaciones de escritorio',
    description: 'Trabajé en la creación de microservicios con Kafka y desarrollé una herramienta de escritorio usando Electron para integraciones con Twitch.'
  }
];
</script>

<template>
  <main class="max-w-4xl mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Sobre mi</h1>
    <p class="text-gray-600 dark:text-gray-300 mb-12">
      Una mirada rápida a mi trayectoria profesional y mis experiencias más destacadas.
    </p>
    <div class="relative before:absolute before:inset-0 before:left-2 sm:before:left-30 before:h-full before:w-0.5 before:bg-gray-200 before:dark:bg-slate-800 before:pointer-events-none">
      <TimeLineItem
        v-for="(item, index) in historyItems"
        :key="index"
        :date="item.date"
        :title="item.title"
        :subtitle="item.subtitle"
        :description="item.description"
      />
    </div>
  </main>
</template>
