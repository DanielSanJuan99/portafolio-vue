<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const colorMap = {
  'vue': 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/60',
  'vue 3': 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/60',
  'spring boot': 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-400 dark:border-green-800/60',
  'java': 'bg-red-50 text-red-700 border-red-200-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-800/60',
  'python': 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950/40 dark:text-yellow-400 dark:border-yellow-800/60',
  'docker': 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/60',
  'kafka': 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-400 dark:border-orange-800/60',
  'electron': 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-400 dark:border-cyan-800/60',
  'oracle sql': 'bg-red-50 text-red-800 border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-800/60',
  'twurple': 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-800/60'
}

const defaultStyle = 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'

const badgeClass = computed(() => {
  const techKey = props.name.toLowerCase()
  return colorMap[techKey] || defaultStyle
})
</script>

<template>
  <span
    :class="[
      'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border transition-colors duration-300',
      badgeClass
    ]"
  >
    {{ name }}
  </span>
</template>
