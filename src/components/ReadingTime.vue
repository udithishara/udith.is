<template>
  <span class="header__read-time">{{ readingTime }} min read</span>
</template>

<script>
export default {
  name: 'ReadingTime',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  computed: {
    /**
     * https://mads.space/blog/adding-estimated-reading-time-to-my-blog-posts/
     */
    readingTime() {
      let minutes = 0
      const contentString = JSON.stringify(this.content)
      const words = contentString.split(' ').length
      const wordsPerMinute = 200
      minutes = Math.ceil(words / wordsPerMinute)
      return minutes
    },
  },
}
</script>
