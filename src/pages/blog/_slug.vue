<template>
  <main>
    <section>
      <header>
        <h1>{{ post.title }}</h1>

        <div class="header__meta">
          <div class="header__meta-container">
            <img
              class="header__meta-image"
              src=""
              alt="Udith Ishara Madusanka"
            />
            <span class="header__meta-authored">
              Udith Ishara / {{ formatDate(post.createdAt) }}
            </span>
          </div>
          <reading-time :content="post.body" />
        </div>
      </header>

      <nuxt-content :document="post" />
    </section>
  </main>
</template>

<script>
import VImg from '~/components/VImg'
import ReadingTime from '~/components/ReadingTime'

export default {
  name: 'PostSingle',
  layout: 'Default',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VImg,
    ReadingTime,
  },
  /**
   * Get data in /content/blog directory using Nuxt content API
   * pre/next to be added next
   */
  async asyncData({ params, error, $content }) {
    try {
      const postPath = `/blog/${params.slug}`

      const [post] = await $content('blog', { deep: true })
        .where({ dir: postPath })
        .fetch()

      if (!post) {
        throw error
      }

      const [prev, next] = await $content('blog', { deep: true })
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return {
        post,
        prev,
        next,
      }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Blog Post could not be found',
      })
    }
  },
  methods: {
    /**
     * Returns a formatted createdAt day from Nuxt Content
     */
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  head() {
    return {
      title: this.post.title + ' - Udith.is',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://udith.is/blog/' + this.post.slug,
        },
      ],
    }
  },
}
</script>
