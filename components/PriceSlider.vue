<template>
    <div class="news-swiper bg-white shadow-lg rounded-xl my-[50px]">
      <carousel :items-to-show="3">
        <slide v-for="price in priceArray" :key="price">
    <div class="flex flex-col py-[60px] px-[117px] slider-price">
      <div class="price_title font-medium text-orange text-[36px]"> {{ price.name }}</div>
     <div class="price text-black text-[36px] font-medium"> {{ price.price }}</div>
     <div class="price_dscr text-black text-[18px] font-normal">per month</div>
    </div>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    let priceArray = [
      {name:'Basic', price: '£999'},
      {name:'Historical', price: '£1999'},
      {name:'Forecast', price: '£2999'},
      {name:'Pay As You Go', price: '£2999'},
      {name:'Enterprise', price: '£2999'},
    ]
    return{priceArray}
  },
}
</script>