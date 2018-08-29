<template>
  <div class="view-home">
    <div
    v-for="(image, index) in images"
    class="view-home__container" :key="index">
      <app-card :image="image"/>
    </div>
  </div>
</template>

<script>
import AppCard from '@/components/AppCard'

export default {
  name: 'Home',
  components: {
    AppCard
  },
  data () {
    return {
      images: [
        {
          src: 'https://picsum.photos/200',
          title: 'Grazus pavadinimas'
        },
        {
          src: 'https://picsum.photos/200',
          title: 'Grazus pavadinimas'
        },
        {
          src: 'https://picsum.photos/200',
          title: 'Grazus pavadinimas'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.view-home {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &__container {
    width: 310px;
  }
}
</style>
