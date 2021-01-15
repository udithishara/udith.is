<template>
  <main>
    <section>
      <h1>Blog</h1>

      <p>
        Vivamus sit amet ante felis. Morbi sollicitudin lorem ligula, ac iaculis
        libero rhoncus eu. Ut commodo at arcu vel dignissim. Integer sit amet
        aliquam lorem. Aenean eu molestie massa, eget aliquam tellus.
      </p>

      <div class="search">
        <input
          id="search__input"
          aria-label="Search articles"
          placeholder="Search articles"
          class="search__input"
        />
        <div class="search__icon">
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            role="presentation"
            class="search__svg"
          >
            <path
              fill="currentColor"
              d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>

    <section>
      <h2>All Posts</h2>

      <template v-for="post in posts">
        <NuxtLink :key="post.dir" :to="post.dir" class="card">
          <p class="card__title">
            {{ post.title }}
          </p>
          <p class="card__excerpt">
            {{ post.description }}
          </p>
        </NuxtLink>
      </template>
    </section>
  </main>
</template>

<script>
export default {
  name: 'PostsIndex',
  layout: 'Default',
  /**
   * Fetches all the posts in /content/blog directory and returns to be listed
   */
  async asyncData({ params, error, $content }) {
    const posts = await $content('blog', { deep: true })
      .sortBy('createdAt', 'asc')
      .fetch()

    return { posts }
  },
  data() {
    return {
      test: '',
    }
  },
  head() {
    return {
      title: 'Blog - Udith.is',
      link: [
        {
          rel: 'canonical',
          href: 'https://udith.is/blog',
        },
      ],
    }
  },
}
</script>
