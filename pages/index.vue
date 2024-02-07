<template>
    <section class="first_screen mb-[70px] ">
            <div class="container mx-auto py-52 flex justify-between items-center">
                <div class="hero-section">
                    <h1 class="text-5xl text-white font-medium leading-[150%]"><span class="text-orange">Dive</span>
                        Into The Data</h1>

                    <p class="text-white text-lg max-w-lg mt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        nisl tincidunt eget. Lectus mauris eros in vitae.</p>

                    <button class="bg-grey text-black py-5 px-8 font-medium rounded-xl mr-6 mt-12">Subscribe to Us</button>
                    <button class="text-white font-medium py-5 px-8 rounded-xl mt-12" style="background: radial-gradient(147.39% 110.03% at 26.57% 19.75%, #494B4E 0%, #1D2027 100%);">Send Us a Message</button>
                </div>

                <img src="../assets/img/hero_img.png" alt="">

            </div>

        </section>

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

     <section class="container m-auto section mb-[70px]">
     <div class="flex justify-between items-center">
      <h2 class="text-black text-[32px]">Day Ahead Market</h2>
      <div class="btn flex items-center">
        <a href="#" class="btn text-black text-xl font-medium">Go to Data Panel</a>
        <img src="../assets/img/btn-arrow.svg" alt="">
      </div>
     </div>

     <div class="chart-nav flex justify-between mt-[36px]">

    <div id="damSelector">
                <div class="col-md-9">
                    <ul class="nav nav-pills flex">
                        <li class="nav-item px-[32px] py-[16px] bg-grey rounded-xl">
                            <a class="nav-link active" href="#" data-country="dam_ua">Ukraine</a>
                        </li>
                        <li class="nav-item px-[32px] py-[16px]">
                            <a class="nav-link" href="#" data-country="dam_ro">Romania</a>
                        </li>
                        <li class="nav-item px-[32px] py-[16px]">
                            <a class="nav-link" href="#" data-country="dam_hu">Hungary</a>
                        </li>
                        <li class="nav-item px-[32px] py-[16px]">
                            <a class="nav-link" href="#" data-country="dam_pl">Poland</a>
                        </li>
                        <li class="nav-item px-[32px] py-[16px]">
                            <a class="nav-link"  href="#" data-country="dam_sk">Slovakia</a>
                        </li>
                        <li style="margin-left: 1rem">
                            <div class="spinner-border" role="status" style="display:none;"></div>
                        </li>
                    </ul>
                </div>
              </div>

    <div class="form-group bg-grey rounded-xl flex justify-center items-center py-[12px] pl-4">
      <label for="dateSelector" class="mr-[50px] pl-4">Select Date</label>
      <input id="dateSelector" type="date" class="text-[16px] bg-grey mr-2.5">
    </div>
     </div>

     <Chart/>

     </section>


     <section class="container news mb-[70px] mx-auto">
        <h2 class="text-orange text-center mb-5 text-4xl font-medium">News</h2>

        <NewsSlider/>

     </section>

      <section class="container subscriptions mb-[70px] mx-auto">
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

    <section class="contact-us-section">
        <div class="bg-center bg-no-repeat bg-cover contact-us-container mt-20 flex gap-[113px]">
    <div class="send-message-section pl-28 py-9">
        <div class="message-title text-4xl font-medium text-orange pb-2.5">Send Us a Message</div>
        <div class="message-subtitle text-sm text-[#989898] max-w-[352px] pb-11">Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus </div>
        
        <div class="form flex flex-col gap-[10px] pb-6">
            <input type="text" placeholder="Name" class="bg-white py-4 pl-10 rounded-xl w-[490px]">
            <input type="text" placeholder="Email" class="bg-white py-4 pl-10 rounded-xl w-[490px]">
            <input type="text" placeholder="Phone number" class="bg-white py-4 pl-10 rounded-xl w-[490px]">
            <textarea placeholder="Message" id="" cols="30" rows="5" class="bg-white py-4 pl-10 rounded-xl w-[490px]" ></textarea>
        </div>

        <button class="bg-orange w-[490px] text-white px-[177px] py-6 rounded-xl text-lg inline-flex">Send Message</button>
    </div>

    <img src="../assets/img/contact-line.svg" alt="">

    <div class="contacts-section py-9">
        <div class="message-title text-4xl font-medium text-orange pb-2.5">Contacts</div>
        <div class="message-subtitle text-sm text-[#989898] max-w-[352px] pb-12">Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus </div>

        <div class="phone-block">
            <div class="phone-block-title pb-5 text-[#989898]">Phone</div>
           <div class="phone-block-content text-white pb-10">0812 - 1234 -5678</div>
        </div>

        <div class="email-block">
            <div class="email-block-title  pb-5 text-[#989898]">Email</div>
            <div class="email-block-content text-white">loremipsum@gmail.com</div>
        </div>
    </div>
</div>
    </section>

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