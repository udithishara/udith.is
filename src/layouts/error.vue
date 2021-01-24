<template>
  <main>
    <section>
      <div v-if="error.statusCode === 404">
        <h1>404 - {{ getErrorType }} not found</h1>
        <p>{{ error.message }}</p>
      </div>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/" class="btn">Home page</NuxtLink>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Error',
  layout: 'Error',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getErrorType() {
      return this.error.type || this.error.type !== undefined
        ? this.error.type
        : 'Page'
    },
  },
  head() {
    return {
      title: '404 Error - Udith.is',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '404 Error - Udith.is',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: process.env.baseUrl + '/404',
        },
      ],
    }
  },
}
</script>
