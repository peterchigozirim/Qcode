<template>
  <div class="sticky top-0  text-emerald-800  w-full">
    <div class="md:h-16 h-10 py-2 md:p-0 max-w-6xl mx-auto w-11/12 md:w-auto capitalize flex flex-col md:flex-row md:justify-between md:items-center">
        <div class="flex-grow flex transition-all text-xl font-semibold justify-between">
          <div>
            <p>
              GetUrlQrCode
            </p>
          </div>
          <div class="md:hidden text-white bg-emerald-600 py-1 cursor-pointer px-3 rounded-md">
            <font-awesome :icon="['fas', 'bars']" />
          </div>
        </div>
        <div class="fixed md:static md:bg-transparent bg-emerald-500/40 w-full md:w-auto h-screen md:h-auto top-14 py-2 md:p-0 md:top-0 bg-opacity-70 left-0">
            <nav class="flex md:flex-row flex-col gap-2 md:gap-4 w-11/12 md:w-auto mx-auto md:mx-0">
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
            </nav>
          </div>
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>