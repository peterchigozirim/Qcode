<template>
  <div :class="bg" class="sticky top-0 z-50 w-full">
    <div class="md:h-16 h-10 py-2 md:p-0 max-w-6xl mx-auto w-11/12 md:w-auto capitalize flex flex-col md:flex-row md:justify-between md:items-center">
        <div class="flex-grow flex transition-all text-xl font-semibold justify-between">
          <div>
            <p class="md:text-3xl text-xl font-semibold">
              <RouterLink to="/">Qr-Code</RouterLink>
            </p>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  

    const openNav = ref(false)
    const scrolled = ref(0)
    const bg = ref('bg-transparent')
    const openAccount = ref(false)

    const handleScroll = ()=>{
        scrolled.value = window.scrollY;
        openNav.value = false;
        openAccount.value = false
        if(scrolled.value > 50){
            bg.value = 'bg-emerald-600 text-white'
        }else{
            bg.value =`bg-transparent text-emerald-800`
        }
    }

    window.addEventListener('scroll', handleScroll);
</script>

<style>

</style>