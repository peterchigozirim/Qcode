<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import QrCode from '../components/QrCodeComponents/QrCode.vue';
import QrContent from '../components/QrCodeComponents/QrContent.vue';
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="max-w-6xl mx-auto w-11/12 min-h-[35rem] flex items-center md:w-auto">
      <div class="grid md:grid-cols-2 ">
        <div>
          <QrContent />
          <QrCode class="" />
        </div>
        <div class="order-first md:order-none">
          <img src="/image/banner_img.png" alt="">
        </div>
      </div>
    </div>

  </main>
</template>
