<template>
  <div class="sticky top-0  text-emerald-800  w-full">
    <div class="md:h-16 h-10 py-2 md:p-0 max-w-5xl mx-auto w-11/12 md:w-auto capitalize flex flex-col md:flex-row md:justify-between md:items-center">
        <div class="flex-grow flex transition-all text-xl font-semibold justify-between">
          <div>
            <p>
              GetUrlQrCode
            </p>
          </div>
          <!-- <div @click="openNav = !openNav" class="md:hidden text-white bg-emerald-600 transition-all duration-300 py-1 cursor-pointer px-3 rounded-md">
            <font-awesome :icon="['fas', 'bars-staggered']" v-if="openNav" class="transition-all duration-300" />
            <font-awesome :icon="['fas', 'bars']" v-else class="transition-all duration-300" />
          </div> -->
        </div>
        <!-- <div :class="openNav? ' w-full left-0 ': '-left-96'" class="fixed md:static transition-all duration-300 md:bg-transparent bg-emerald-500/40 md:w-auto h-screen md:h-auto top-14 py-2 md:p-0 md:top-0 bg-opacity-70 md:left-0">
            <nav class="flex md:flex-row flex-col gap-2 md:gap-4 w-11/12 md:w-auto mx-auto md:mx-0">
              <RouterLink to="/donation">Donation</RouterLink>
            </nav>
        </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        openNav: false
      }
    }
  }
</script>

<style>

</style>