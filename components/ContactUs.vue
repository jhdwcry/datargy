<template>
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