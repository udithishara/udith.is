<template>
  <div class="article__img">
    <img loading="lazy" :src="imgSrc()" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    imgSrc() {
      try {
        const { post } = this.$parent
        return require(`~/content${post.dir}/img/${this.src}`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>
