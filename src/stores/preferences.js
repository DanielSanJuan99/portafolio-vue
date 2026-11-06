import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePreferencesStore = defineStore('preferences', () => {
    const savedTheme = localStorage.getItem('theme'); // Para guardar el modo (oscuro/claro)
    const systemPrefersDark = window.matchMedia('prefers-color-scheme: dark').matches;

    const isDark = ref(savedTheme === 'dark' || (!savedTheme && systemPrefersDark));

    const toggleTheme = () => {
        isDark.value = !isDark.value;
        applyTheme();
    }

    const applyTheme = () => {
        if (isDark.value) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light')
        }
    }

    const locale = ref(localStorage.getItem('locale') || 'es');

    const toggleLanguage = () => {
        locale.value = locale.value === 'es' ? 'en' : 'es'
        localStorage.setItem('locale', locale.value);
    }

    return {
        isDark,
        locale,
        toggleTheme,
        applyTheme,
        toggleLanguage
    }
})
