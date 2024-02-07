<template>
     <nav>
        <div class="container mx-auto flex justify-between items-center my-8">
          <img src="../assets/img/logo.svg" alt="logo">
          <div>
          </div>

          <div class="navbar">
            <ul class="flex list-none">
                <li class="text-black pr-12 font-medium text-black"><a href="#">About Us</a></li>
                <li class="text-black pr-12 font-medium text-black"><a href="#">News</a></li>
                <li class="text-black pr-12 font-medium text-black"><a href="#">Data</a></li>
                <li class="text-black pr-12 font-medium text-black"><a href="#">Contact Us</a></li>
            </ul>
          </div>


          <div>
            <button class="bg-grey text-black font-medium py-4 px-8 rounded-xl inline-flex mr-6">Sign in</button>
            <button class="bg-black text-white font-medium py-4 px-8 rounded-xl inline-flex" style="background: radial-gradient(147.39% 110.03% at 26.57% 19.75%, #494B4E 0%, #1D2027 100%);">Join</button>
          </div>
      
        </div>
      </nav>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>

<style>
li{
  font-weight: 500;
}
</style>