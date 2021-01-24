<template>
  <main>
    <section>
      <header>
        <h1>{{ post.title }}</h1>

        <div class="header__meta">
          <div class="header__meta-container">
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
import getSiteMeta from '~/utils/getSiteMeta'

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
        type: 'Post',
        message:
          'Blog post could not be found, feel free to check the repo to see if the article still exists',
      })
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        title: this.post.title,
        description: this.post.description,
        url: process.env.baseUrl + this.$route.path,
        mainImage:
          process.env.baseUrl +
          require(`~/content${this.post.dir}/img/${this.post.og_image}`),
      }
      return getSiteMeta(metaData)
    },
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
      title: `${this.post.title} - Udith.is`,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.post.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.post.updatedAt,
        },
      ],
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
