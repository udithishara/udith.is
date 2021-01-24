<template>
  <nav aria-label="Navigation">
    <div class="theme-switch">
      <input
        id="theme-switch__input"
        class="theme-switch__input"
        type="checkbox"
      />
      <label
        class="theme-switch__toggle"
        for="theme-switch__input"
        style="border-radius: 50px"
        aria-hidden="true"
        @click="toggleTheme()"
      >
        <span class="theme-switch__icon theme-switch__icon--dark">
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            role="presentation"
            aria-hidden="true"
            class="svg-icon"
          >
            <path
              fill="currentColor"
              d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z"
            ></path>
          </svg>
        </span>
        <span class="theme-switch__icon theme-switch__icon--light">
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            role="presentation"
            aria-hidden="true"
            class="svg-icon"
          >
            <g
              stroke-linejoin="full"
              stroke-linecap="full"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2"></path>
              <path d="M12 21v2"></path>
              <path d="M4.22 4.22l1.42 1.42"></path>
              <path d="M18.36 18.36l1.42 1.42"></path>
              <path d="M1 12h2"></path>
              <path d="M21 12h2"></path>
              <path d="M4.22 19.78l1.42-1.42"></path>
              <path d="M18.36 5.64l1.42-1.42"></path>
            </g>
          </svg>
        </span>
      </label>
    </div>

    <div class="nav__list">
      <template v-for="link in navLinks">
        <NuxtLink
          :key="link.href"
          :to="link.href"
          type="button"
          class="nav__item"
          >{{ link.text }}</NuxtLink
        >
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      /**
       * Starts with 'theme' light because dark is not everyone's preference
       * Look into adding below in the future
       * const prefersDarkScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
       * if (prefersDarkScheme.matches){ "User prefers a dark interface" } else { "User prefers a light interface" }
       */
      theme: 'light',
      navLinks: [
        { text: 'Blog', href: '/blog' },
        { text: 'Home', href: '/' },
      ],
    }
  },
  /**
   * Checks if a 'theme' exists in localStorage
   * If not takes the current data().theme and set it and call setDocumentTheme()
   * If 'theme' value exists, add that value as data().theme and call setDocumentTheme()
   */
  mounted() {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', this.theme)
      this.setDocumentTheme()
    } else {
      this.theme = localStorage.getItem('theme')
      this.setDocumentTheme()
    }
  },
  methods: {
    /**
     * Used to toggle between 'light' and 'dark' depending on the current 'theme' value
     * and set that value to localStorage so it persists
     */
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', this.theme)
      this.setDocumentTheme()
    },
    /**
     * Used to add the current theme from data() as a data attribute to the html tag
     */
    setDocumentTheme() {
      document.documentElement.setAttribute('data-theme', this.theme)
    },
  },
}
</script>
