<template>
  <main>
    <section>
      <h1>Hey, I’m Udith Ishara</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor
        lorem in nulla dignissim, ut dictum velit scelerisque. Curabitur auctor
        metus eget auctor auctor
      </p>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
  layout: 'Default',
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
