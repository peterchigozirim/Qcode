<template>
    <!-- <div  class="w-full h-screen fixed top-0 left-0 bg-emerald-400/20 backdrop-blur flex justify-center items-center">
        <div class="max-w-sm space-y-6 md:w-full w-11/12 min-h-[15rem] rounded-lg p-2 border border-emerald-400 bg-black">
            <div>
                <img src="/image/gif/green-tick.gif" class="rounded-full w-36 mx-auto h-36" alt="">
            </div>
            <div class="animate-bounce text-2xl text-center text-emerald-300 font-bold">
                <p>Good </p>
            </div>
        </div>
    </div> -->
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    toggleModal : Boolean,
    status: String
})

</script>

<style lang="scss" scoped>

</style>