<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { usePreferencesStore } from '../stores/preferences'

const preferences = usePreferencesStore()
const { locale } = useI18n()

watch(() => preferences.locale, (newLocale) => {
  locale.value = newLocale
})

//Scroll state
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled
        ? 'bg-transparent backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50'
        : 'bg-slate-100 dark:bg-slate-900'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <nav class="flex gap-6">
          <RouterLink
            to="/"
            class="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors"
          >
            {{ $t('nav.home') }}
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors"
          >
            {{ $t('nav.about') }}
          </RouterLink>
        </nav>

        <div class="flex items-center gap-4">
          <button
            @click="preferences.toggleLanguage()"
            class="px-3 py-1.5 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors font-bold text-sm uppercase tracking-wider"
          >
            {{  preferences.locale  }}
          </button>
          <button
            @click="preferences.toggleTheme()"
            class="relative p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            :aria-label="$t('theme.toggle')"
          >
            <svg
              v-if="!preferences.isDark"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>

            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  </header>
</template>
