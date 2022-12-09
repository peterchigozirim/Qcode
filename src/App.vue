<script setup>
import { RouterView } from 'vue-router'
import PageNav from './components/Utility/PageNav.vue'
import Footer from './components/Utility/Footer.vue';
import { infoStore } from '@/stores/infoStore'
import { onMounted } from 'vue';

  const info = infoStore()

  onMounted(() => { info.getGuest()})
</script>

<template>
  <div class="bg-emerald-100/90 min-h-screen relative">
    
    <page-nav />

    <RouterView />

    <Footer />
  </div>
</template>

