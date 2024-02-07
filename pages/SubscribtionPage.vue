<template>

<section class="flex flex-col justify-center mx-auto subscribtion-section mt-[133px]">
    <div class="subscribtion-nav">
    <ul class="subscribtion-list flex justify-center gap-[25px] pb-[65px]">
    <li> <a href="#" class="subscribtion-item active"> Basic</a></li>
    <li><a href="#" class="subscribtion-item">Historical</a></li>
    <li><a href="#" class="subscribtion-item">Forecast</a></li>
    <li><a href="#" class="subscribtion-item">Pay As You Go</a></li>
    <li><a href="#" class="subscribtion-item">Enterprise</a></li>
</ul>

<p class="text-[#989898] text-center text-[15px]">Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus.Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus </p>
</div>

<div class="flex flex-col justify-center items-center subscribtion-form mt-[65px]">
    <table class="rounded-corner">
  <tbody class="bg-white">
    <tr>
      <th scope="row" class="text-[20px]">Registration</th>
      <td class="text-[15px]">Not Required</td>
    </tr>
    <tr>
      <th scope="row" class="text-[20px]">Detailed historical data (charts, csv/xlsx)</th>
      <td><img class="table_img" src="../assets/img/check_1.svg" alt=""></td>
    </tr>
    <tr>
      <th scope="row" class="text-[20px]">Time limit for detailed historical data</th>
      <td class="text-[15px]">1 Week</td>
    </tr>

    <tr>
      <th scope="row" class="text-[20px]">Aggregated data (charts, xlsx)</th>
      <td><img class="table_img" src="../assets/img/check_2.svg" alt=""></td>
    </tr>

    <tr>
      <th scope="row" class="text-[20px]">Time limit for aggregated data</th>
      <td><img class="table_img" src="../assets/img/check_2.svg" alt=""></td>
    </tr>

    <tr>
      <th scope="row" class="text-[20px]">Forecasted data</th>
      <td><img class="table_img" src="../assets/img/check_2.svg" alt=""></td>
    </tr>

    <tr>
      <th scope="row" class="text-[20px]">Fee Type</th>
      <td><img class="table_img" src="../assets/img/check_2.svg" alt=""></td>
    </tr>

    <tr>
      <th scope="row" class="text-[20px]">Fee</th>
      <td><img class="table_img" src="../assets/img/check_2.svg" alt=""></td>
    </tr>


  </tbody>
</table>


<button class="bg-orange text-white text-[20px] py-[20px] px-[220px] rounded-xl mt-[65px]">Subscribe</button>
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

<style scoped>
.subscribtion-item {
  font-size: 20px;
  padding: 15px 25px;
  border-radius: 12px;
  border: 1px solid #F8931F;
  font-size: 20px;
  font-weight: 500;
  line-height: 120%;
  color:#F8931F ;
}

.active{
    color: #ffff;
    background-color: #F8931F;
    box-shadow: 15px 25px 65px 0px rgba(0, 0, 0, 0.13);
}

table{
    box-shadow: 15px 25px 60px 0px rgba(0, 0, 0, 0.05);
    border-collapse: separate;
    border-spacing: 0;
    overflow: hidden;
    border-collapse: collapse;
}

td, th {
    padding: 8px;
}
th{
    width: 542px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 34px;
    text-align: left;
    font-weight: 400;
}

td{
    width: 360px;
    text-align: center;
    padding: 20px 0;
}


.table_img{
    width: 20px;
    height: 20px;
    margin: auto;
    text-align: center;
}

table.rounded-corner {
    border-radius: 10px;
    overflow: hidden;
}

table.rounded-corner th:first-child {
    border-top-left-radius: 10px;
}

table.rounded-corner th:last-child {
    border-top-right-radius: 10px;
}

table.rounded-corner th:last-child {
    border-bottom-right-radius: 10px;
}

table.rounded-corner td:last-child {
    border-bottom-right-radius: 10px;
}

table.rounded-corner td:first-child {
    border-bottom-left-radius: 10px;
}


</style>

<script>

</script>