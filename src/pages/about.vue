<template>
  <main>
    <section>
      <h1>About</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo facere
        excepturi ullam totam facilis reiciendis! Sed laborum corrupti maxime
        quas saepe modi dicta qui ut, consequatur debitis. Voluptatem, quidem
        dignissimos.
      </p>
    </section>
  </main>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta'

export default {
  name: 'About',
  layout: 'Default',
  computed: {
    meta() {
      const metaData = {
        type: 'website',
        title: 'Udith.is',
        description: 'About - Udith.is',
        url: process.env.baseUrl + this.$route.path,
        mainImage: null,
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'About - Udith.is',
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
