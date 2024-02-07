<template>
    <Home/>
    <Widgets/>
    <Chart/>

     <section class="container news mb-[70px] mx-auto">
        <h2 class="text-orange text-center mb-5 text-4xl font-medium">News</h2>

        <NewsSlider/>

     </section>

      <section class="container subscribtions mb-[70px] mx-auto">
           <div class="section-title flex flex-col">
             <h2 class="text-orange text-center mb-5 text-4xl font-medium">Subscribe</h2>
                <p class="text-sm text-[#989898] text-center">Vitae sapien pellentesque habitant morb nunc. Viverra aliquet  porttitor rhoncus </p>
           </div>

           <PriceSlider/>

     <div class="subscribtion-btn flex justify-center my-[25px]">
          <nuxt-link  to="SubscribtionPage" class="bg-grey rounded-xl text-black font-medium py-[16px] px-[32px] mr-[15px]">Find Out More</nuxt-link> 
          <img src="../assets/img/btn-arrow.svg" alt="">
     </div>

    </section>
    <ContactUs/>

</template>

<style>

body{
    background: #FCFCFC;
}
.first_screen{
    background-image:url(../assets/img/home-bg.jpg) ;
    background-repeat: no-repeat;
    background-size: cover;
}


.bg-market{
    z-index: -1;
}

.contact-us-section{
    background: url(../assets/img/home-bg.jpg);
}
</style>