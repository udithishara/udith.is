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
  data() {
    return {
      var: process.env.BASE_URL,
    }
  },
  head() {
    return {
      title: 'Udith.is',
      link: [
        {
          rel: 'canonical',
          href: 'https://udith.is',
        },
      ],
    }
  },
}
</script>
