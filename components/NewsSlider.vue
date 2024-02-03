<template>

<div class="news-swiper flex justify-center">
    <swiper
    :modules='[SwiperPagination]'
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :pagination="true"
  >

         <swiper-slide class="swiper-slide flex justify-center">
            <div class="swiper-content flex flex-col justify-center items-center w-[370px] h-[570px] bg-white rounded-xl">
                <img src="../assets/img/news_img.png" alt="" class="w-[280px] h-[243]">
                <div class="text-black text-[18px] text-medium pb-[45px]">Vitae sapien pellentesque habitant morbi</div>
                <p class="text-black text-[12px] px-[40px]">Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.</p>
            </div>
        </swiper-slide>

         <swiper-slide class="swiper-slide flex justify-center">
                <div class="swiper-content flex flex-col justify-center items-center w-[370px] h-[570px] bg-white rounded-xl">
                    <img src="../assets/img/news_img.png" alt="" class="w-[280px] h-[243]">
                    <div class="text-black text-[18px] text-medium pb-[45px]">Vitae sapien pellentesque habitant morbi</div>
                    <p class="text-black text-[12px] px-[40px]">Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.</p>
                </div>
            </swiper-slide>

             <swiper-slide class="swiper-slide flex justify-center">
                <div class="swiper-content flex flex-col justify-center items-center w-[370px] h-[570px] bg-white rounded-xl">
                    <img src="../assets/img/news_img.png" alt="" class="w-[280px] h-[243]">
                    <div class="text-black text-[18px] text-medium pb-[45px]">Vitae sapien pellentesque habitant morbi</div>
                    <p class="text-black text-[12px] px-[40px]">Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.</p>
                </div>
            </swiper-slide>

               <swiper-slide class="swiper-slide flex justify-center">
                    <div class="swiper-content flex flex-col justify-center items-center w-[370px] h-[570px] bg-white rounded-xl">
                        <img src="../assets/img/news_img.png" alt="" class="w-[280px] h-[243]">
                        <div class="text-black text-[18px] text-medium pb-[45px]">Vitae sapien pellentesque habitant morbi</div>
                        <p class="text-black text-[12px] px-[40px]]">Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.</p>
                    </div>
                </swiper-slide>


                <div class="swiper-pagination"></div>
  </swiper>
</div>
  </template>
