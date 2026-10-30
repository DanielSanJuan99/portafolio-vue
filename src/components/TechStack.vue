<script setup>
import TechBadge from './TechBadge.vue';
import { computed } from 'vue';

const stackCategories = computed(() => [
  {
    id: 1,
    title: 'Frontend',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"/></svg>',
    skills: ['Vue 3', 'Electron', 'Angular', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 2,
    title: 'Backend',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>',
    skills: ['Spring Boot', 'Java', 'Python', 'PHP', 'Oracle SQL', 'Django', 'Twurple', 'Node.js']
  },
  {
    id: 3,
    title: 'DevOps',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>',
    skills: ['Docker', 'Kafka', 'AWS', 'Azure', 'GitHub']
  }
]);

</script>

<template>
  <div class="text-center mb-12">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white transition-colors">
      {{ $t('stack.title') }}
    </h2>
    <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 transition-colors">
      {{ $t('stack.subtitle') }}
    </p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div
      v-for="category in stackCategories"
      :key="category.id"
      class="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div class="flex item-center gap-3 mb-6 text-blue-600 dark:text-blue-400">
        <div v-html="category.icon"></div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ category.title }}</h3>
      </div>

      <div class="flex flex-wrap gap-2">
        <TechBadge
          v-for="(skill, index) in category.skills"
          :key="index"
          :name="skill"
        />
      </div>
    </div>
  </div>
</template>
