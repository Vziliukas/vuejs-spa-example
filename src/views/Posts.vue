<template>
  <article class="view-posts">
    <app-post
    v-for="(post, index) in posts"
    :key="index"
    :data="post"
    />
  </article>
</template>

<script>
import AppPost from '@/components/AppPost'

export default {
  name: 'Posts',
  components: {
    AppPost
  },
  data () {
    return {
      url: 'https://jsonplaceholder.typicode.com/posts/?_limit=10',
      posts: []
    }
  },
  created () {
    this.getPost()
  },
  methods: {
    async getPost () {
      const { data } = await this.axios.get(this.url)

      this.posts = data.map(record => {
        const { id, title, body } = record

        return {
          id,
          title,
          body
        }
      })
    }
  }
}
</script>
