<template>
  <NuxtLink :key="post.dir" :to="post.dir" class="card">
    <p class="card__title">
      {{ post.title }}
    </p>
    <p class="card__excerpt">
      {{ post.description }}
    </p>
  </NuxtLink>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
