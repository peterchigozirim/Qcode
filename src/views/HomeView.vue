<script setup>
import QrCode from '../components/QrCodeComponents/QrCode.vue';
import Modal from '@/components/Utility/Modal.vue'
import { infoStore } from '@/stores/infoStore'
import { onMounted } from 'vue';

  const info = infoStore()

  onMounted(() => { info.getGuest()})

</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="max-w-6xl mx-auto w-11/12 min-h-[35rem] mt-20 md:mt-10 mb-5 flex md:items-center md:w-auto">
      <QrCode class="" />
    </div>
    <Modal />
  </main>
</template>
