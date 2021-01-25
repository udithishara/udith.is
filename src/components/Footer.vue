<template>
  <footer>
    <nav class="social" aria-label="Social Links">
      <a
        class="nav__item social__item"
        href="https://twitter.com/udithishara"
        target="_blank"
        aria-label="Twitter"
        rel="noreferrer"
        tabindex="0"
      >
        <Icon type="twitter" />
      </a>
      <a
        class="nav__item social__item"
        href="https://github.com/udithishara"
        target="_blank"
        aria-label="Github"
        rel="noreferrer"
        tabindex="0"
      >
        <Icon type="github" />
      </a>
      <a
        class="nav__item social__item"
        href="https://www.linkedin.com/in/udithishara"
        target="_blank"
        aria-label="LinkedIn"
        rel="noreferrer"
        tabindex="0"
      >
        <Icon type="linkedin" />
      </a>
    </nav>
    <span class="branding"> &copy; {{ currentYear }} - Udith Ishara </span>
  </footer>
</template>

<script>
import Icon from '~/components/Icon.vue'

export default {
  components: {
    Icon,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>
