<template>
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
       </section>
</template>
