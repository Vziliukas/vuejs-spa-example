<template>
  <div class="view-gallery">
    <app-image-container v-if="photos.length !== 0">
      <app-column
      v-for="(photo, index) in photos"
      :key="index"
      >
        <app-card :image="photo"/>
      </app-column>
    </app-image-container>
    <h3>Loading...</h3>
  </div>
</template>

<script>
import AppCard from '@/components/AppCard'
import AppImageContainer from '@/components/AppImageContainer'
import AppColumn from '@/components/AppColumn'

export default {
  name: 'Gallery',
  components: {
    AppCard,
    AppImageContainer,
    AppColumn
  },
  data () {
    return {
      url: 'https://jsonplaceholder.typicode.com/photos/?_limit=18',
      photos: []
    }
  },
  created () {
    this.getPhotos()
  },
  methods: {
    async getPhotos () {
      const { data } = await this.axios.get(this.url)

      this.photos = data.map(record => {
        return {
          src: record.url,
          title: record.title
        }
      })
    }
  }
}
</script>
