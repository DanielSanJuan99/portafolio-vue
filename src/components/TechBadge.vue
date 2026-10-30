<script setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const techConfig = {
  'vue 3': {
    style: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/60',
    icon: 'logos:vue'
  },
  'spring boot': {
    style: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-400 dark:border-green-800/60',
    icon: 'logos:spring-icon'
  },
  'java': {
    style: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-800/60',
    icon: 'logos:java'
  },
  'python': {
    style: 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950/40 dark:text-yellow-400 dark:border-yellow-800/60',
    icon: 'logos:python'
  },
  'docker': {
    style: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/60',
    icon: 'logos:docker-icon'
  },
  'kafka': {
    style: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-400 dark:border-orange-800/60',
    icon: 'logos:kafka-icon'
  },
  'electron': {
    style: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-400 dark:border-cyan-800/60',
    icon: 'logos:electron'
  },
  'oracle sql': {
    style: 'bg-red-50 text-red-800 border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-800/60',
    icon: 'logos:oracle'
  },
  'twurple': {
    style: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-800/60',
    icon: 'logos:twitch'
  },
  'angular': {
    style: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-800/60',
    icon: 'logos:angular-icon'
  },
  'php': {
    style: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-800/60',
    icon: 'logos:php'
  },
  'aws': {
    style: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-400 dark:border-orange-800/60',
    icon: 'logos:aws'
  },
  'azure': {
    style: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/60',
    icon: 'logos:microsoft-azure'
  },
  'html': {
    style: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-400 dark:border-orange-800/60',
    icon: 'logos:html-5'
  },
  'css': {
    style: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/60',
    icon: 'logos:css-3'
  },
  'javascript': {
    style: 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950/40 dark:text-yellow-400 dark:border-yellow-800/60',
    icon: 'logos:javascript'
  },
  'typescript': {
    style: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/60',
    icon: 'logos:typescript-icon'
  },
  'tailwind css': {
    style: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-400 dark:border-sky-800/60',
    icon: 'logos:tailwindcss-icon'
  },
  'django': {
    style: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-400 dark:border-green-800/60',
    icon: 'logos:django-icon'
  },
  'node.js': {
    style: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-400 dark:border-green-800/60',
    icon: 'logos:nodejs-icon'
  },
  'github': {
    style: 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950/40 dark:text-gray-400 dark:border-gray-800/60',
    icon: 'logos:github-icon'
  }
}

const defaultStyle = 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'

const badgeClass = computed(() => {
  const techKey = props.name.toLowerCase()
  return techConfig[techKey] || { style: defaultStyle, icon: null }
})
</script>

<template>
  <span
    :class="[
      'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border transition-colors duration-300',
      badgeClass.style
    ]"
  >
    <Icon v-if="badgeClass.icon" :icon="badgeClass.icon" class="w-4 h-4 shrink-0"></Icon>
    {{ name }}
  </span>
</template>
