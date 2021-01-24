<template>
  <main>
    <section>
      <h1>Hey! I'm Udith Ishara</h1>

      <p>
        A developer, gamer and traveler. I work at Intrepid Travel as an
        Associate Technical Lead, based out of Sri Lanka.
      </p>
    </section>

    <section>
      <h2>Recent Posts</h2>

      <PostCard
        v-for="post in posts.slice(0, 3)"
        :key="post.dir"
        :post="post"
      />
    </section>
  </main>
</template>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  name: 'Home',
  layout: 'Default',
  components: {
    PostCard,
  },
  async asyncData({ params, $content }) {
    const posts = await $content('blog', { deep: true })
      .sortBy('createdAt', 'desc')
      .fetch()

    return { posts }
  },
  head() {
    return {
      title: 'Udith.is',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Udith.is',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: process.env.baseUrl + this.$route.path,
        },
      ],
    }
  },
}
</script>
