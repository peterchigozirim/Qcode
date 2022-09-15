<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import QrCode from '../components/QrCodeComponents/QrCode.vue';
import QrContent from '../components/QrCodeComponents/QrContent.vue';
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="max-w-6xl mx-auto w-11/12 min-h-[35rem] mt-20 md:mt-10 mb-5 flex md:items-center md:w-auto">
      <QrCode class="" />
    </div>

  </main>
</template>
