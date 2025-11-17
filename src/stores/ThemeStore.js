import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: true,
    // localStorage.getItem('theme') === 'dark' ||
    // (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches),
  }),

  actions: {
    applyTheme() {
      const mode = this['isDark'] ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', mode)
      localStorage.setItem('theme', mode)
    },

    toggle() {
      this.isDark = !this['isDark']
      this.applyTheme()
    },

    init() {
      this.applyTheme()
    },
  },
})
