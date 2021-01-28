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
import getSiteMeta from '~/utils/getSiteMeta'

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
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        title: 'Udith Ishara Madusanka - Udith.is',
        description: 'Udith.is',
        url: process.env.baseUrl + this.$route.path,
        mainImage: null,
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Udith Ishara Madusanka - Udith.is',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: process.env.baseUrl + this.$route.path,
        },
      ],
    }
  },
}
</script>
