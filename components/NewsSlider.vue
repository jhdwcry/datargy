<template>
      <carousel :items-to-show="3">
        <slide v-for="news in newsArray" :key="news">
            <div class="flex flex-col items-center pt-[26px] w-[370px] h-[570px] bg-white rounded-xl shadow-lg">
                <img src="../assets/img/news.svg" alt="" class="w-[280px] h-[243]">
                <div class="text-black text-[18px] font-semibold pt-[32px] pb-[46px] px-[46px]">{{news.name}}</div>
                <div class="text-black text-[12px] px-[40px] text-left">{{ news.content }}</div>
            </div>
    </slide>

    <template #addons>
        <pagination />
    </template>
  </carousel>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    let newsArray = [
      {name:'Vitae sapien pellentesque habitant morbi', content: 'Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'},
      {name:'Vitae sapien pellentesque habitant morbi', content: 'Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'},
      {name:'Vitae sapien pellentesque habitant morbi', content: 'Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'},
      {name:'Vitae sapien pellentesque habitant morbi', content: 'Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'},
    ]
    return{newsArray}
  },
}
</script>

<style scoped>
</style>