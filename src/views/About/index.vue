<template>
  <div class="view-about">
    <p class="view-about__paragraph">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, maiores velit. Natus itaque, dolor sit, tempora cum mollitia libero ipsum voluptates architecto eaque eligendi. Aliquid veritatis maiores vitae. Id nam quia, vero alias cupiditate ex quis, vitae eum tenetur nihil sequi maxime natus cumque facere odit voluptate? Officiis, at. Facere ad, nihil odio ullam est voluptate molestiae sit omnis asperiores veniam modi vero, minima debitis fugit nisi perspiciatis expedita magnam voluptatibus. Reiciendis magnam adipisci rerum vitae officiis perspiciatis, labore voluptatum soluta. Rem porro dolorum, blanditiis nulla, ullam minima beatae eveniet cupiditate qui veritatis sint! Dolores expedita vel nam praesentium recusandae!
    </p>

    <ul class="view-about__list">
      <li class="view-about__list-item">
        <router-link
        :to="{ name: 'About'}"
        class="view-about__list-link"
        exact-active-class="view-about__list-link--active"
        >Issilavinimas</router-link>
      </li>
      <li class="view-about__list-item">
        <router-link
        :to="{ name: 'AboutCareer'}"
        class="view-about__list-link"
        exact-active-class="view-about__list-link--active"
        >Karjera</router-link>
      </li>
      <li class="view-about__list-item">
        <router-link
        :to="{ name: 'AboutSkills'}"
        class="view-about__list-link"
        exact-active-class="view-about__list-link--active"
        >Zinios</router-link>
      </li>
    </ul>

    <section class="view-about__container">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>

export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.view-about {
  &__paragraph {
    font-size: 16px;
    color: rgba(black, 0.87);
    padding-bottom: 40px;
  }

  &__list {
    padding-top: 38px;
    padding-bottom: 32px;
    width: 290px;
    display: flex;
    list-style: none;
    justify-content: space-between;

    &-item {
      font-size: 16px;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.92;
    }

    &-link {
      color: rgba(black, 0.87);
      text-decoration: none;

      &--active {
        color: #3252e5;
        text-decoration: underline;
      }
    }
  }

  &__container {
    background-color: #eeeff3;
    padding: 75px 61px 102px;
  }
}
</style>
