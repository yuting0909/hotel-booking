<template>
  <div class="room-photo-container">
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :pagination="{
        clickable: true
      }"
      :navigation="true"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(url, i) in imgUrl"
        :key="i"
      >
        <img class="room-photo" :src="url" alt="房間照片" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import '@/assets/style/custom/_swiper.scss'
import SwiperCore, { Pagination, Navigation } from 'swiper'
SwiperCore.use([Pagination, Navigation])

export default {
  components: { Swiper, SwiperSlide },
  props: {
    imgUrl: {
      type: Array,
      default: undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.room-photo-container {
  height: 576px;
  background-color: #f7f7f7;
  .room-photo {
    width: auto;
    height: auto;
    max-width: 80%;
    max-height: 100%;
  }
}
</style>
