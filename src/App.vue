<script setup>
import { RouterView } from 'vue-router'
import PageNav from '@/components/Utility/PageNav.vue'
import Footer from '@/components/Utility/Footer.vue';
</script>

<template>
  <div class="bg-emerald-100/90 min-h-[100vh] relative">
    
    <page-nav />

    <RouterView />
    
  </div>
    <Footer />
</template>

