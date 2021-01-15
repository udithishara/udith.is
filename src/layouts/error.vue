<template>
  <main>
    <section>
      <div v-if="error.statusCode === 404">
        <h1>404 - Page not found</h1>
        <p>
          {{ error.message }}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          enim. Expedita harum fuga illum reprehenderit deserunt nemo, ea rem
          est maxime ex itaque possimus! Reiciendis laboriosam quo illum optio
          sint.
        </p>
      </div>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/" class="btn">Home page</NuxtLink>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
    message: {
      type: String,
      required: false,
      default: null,
    },
  },
  layout: 'Error',
}
</script>
