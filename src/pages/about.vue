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
export default {
  name: 'About',
  layout: 'Default',
  head() {
    return {
      title: 'About - Udith.is',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About - Udith.is',
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
