<template>
    <section class="container my-20 mx-auto">
            <h2 class="text-orange text-center mb-[35px] text-4xl font-medium">Connecting You with the Data</h2>

        <div class="market-widgets flex justify-around">
          <div class="today-price-container relative">
            <div class=" bg-white rounded-xl drop-shadow-xl py-8 px-14 flex h-[171px] w-[510px]">
              <div class="day-section flex flex-col mr-32">
                <div class="text-orange text-5xl font-light leading-[41px] mb-6">Today</div>
                <div class="text-orange text-sm  leading-[18px] mb-1">12 Dec 2023</div>
                <div class="text-black text-lg">Kyiv, Ukraine</div>
              </div>
      
              <div class="price-section flex flex-col ">
                <div class="price">
                  <img class="bg-market absolute top-6" src="../assets/img/market_bg.svg" alt="">
                  <div class="w-[93px] text-center"><span class="w-[93px] text-black text-2xl font-normal top-1/4 text-center">50.16 £/Mwh</span></div>
                  <div class="text-green text-lg font-medium pt-[20px] ">+3.4%</div>
                </div>
              </div>

            </div>
           </div>

           <div class="weather-container ">
            <div class=" bg-white rounded-xl drop-shadow-xl py-8 px-14 flex h-[171px] w-[510px]">
              <div class="day-section flex flex-col mr-32">
                <div class="text-orange text-5xl font-light mb-6">13°</div>
                <div class="text-orange text-sm mb-1">H:16° L:8°</div>
                <div class="text-black text-sm">Kyiv, Ukraine</div>
              </div>
      
              <div class="price-section">
                <div class="weather flex flex-row-reverse items-end">
                  <img src="../assets/img/weather.svg" alt="">
                  <div class="text-black text-center right-1/3 pr-1">Showers</div>
                </div>
              </div>

            </div>
           </div>
        </div>
        </section>
</template>