export default async () => {
  const { $content } = require('@nuxt/content')
  const files = await $content('blog', { deep: true }).only(['dir']).fetch()
  return files.map((file) => file.dir)
}
