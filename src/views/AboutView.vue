<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TimeLineItem from '@/components/TimeLineItem.vue'

const { t } = useI18n()

const historyItems =computed (() => [
  {
    id: 1,
    date: t('timeline.company_1.date'),
    title: t('timeline.company_1.title'),
    subtitle: t('timeline.company_1.subtitle'),
    description: t('timeline.company_1.description')
  },
  {
    id: 2,
    date: t('timeline.company_2.date'),
    title: t('timeline.company_2.title'),
    subtitle: t('timeline.company_2.subtitle'),
    description: t('timeline.company_2.description')
  }
]);
</script>

<template>
  <main class="max-w-4xl mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{{ $t('timeline.title') }}</h1>
    <p class="text-gray-600 dark:text-gray-300 mb-12">
      {{ $t('timeline.description') }}
    </p>
    <div class="relative before:absolute before:inset-0 before:left-2 sm:before:left-30 before:h-full before:w-0.5 before:bg-gray-200 before:dark:bg-slate-800 before:pointer-events-none">
      <TimeLineItem
        v-for="timeline in historyItems"
        :key="timeline.id"
        :date="timeline.date"
        :title="timeline.title"
        :subtitle="timeline.subtitle"
        :description="timeline.description"
      />
    </div>
  </main>
</template>
