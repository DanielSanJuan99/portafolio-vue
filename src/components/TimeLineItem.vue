<script setup>
defineProps({
  date: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="relative pl-8 sm:pl-32 py-6 group">

    <div class="inline-flex text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-1 sm:mb-0 sm:absolute sm:left-0 sm:top-7 sm:w-24 sm:text-right">
      {{ date }}
    </div>

    <div class="absolute left-0 sm:left-28 top-7 w-4 h-4 rounded-full border-2 border-blue-600 bg-white dark:bg-slate-950 group-hover:bg-blue-600 transition-colors duration-300 z-10"></div>

    <div class="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-gray-100 dark:border-slate-800">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white">
        {{ title }}
      </h3>

      <div class="text-sm font-medium text-gray-500 dark:text-gray-400 mt-0.5">
        {{ subtitle }}
      </div>

      <p class="text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
        {{ description }}
      </p>
    </div>

  </div>
</template>
