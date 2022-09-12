<template>
    <div class="space-y-8 w-full">
        <form @submit.prevent="genQrCode()">
            <div class="space-y-3 mb-6">
                <!-- <div>
                    <label for="name">Input your site url (<span class="text-xs italic text-green-900">www.gorgor.com</span>)</label>
                </div> -->
                <div class="flex bg-emerald-600/90 divide-x-2 divide-white  drop-shadow-lg h-12 w-96 rounded overflow-hidden items-center pl-2">
                    <div >
                        <font-awesome :icon="['fas', 'globe']" class="text-white mr-2" />
                    </div>
                    <div class="w-full h-full">
                        <input type="text" v-model="url" placeholder="Enter your URL" class="w-full h-full bg-white focus:ring-0 focus:outline-none border-0 px-2 placeholder:text-emerald-900 text-emerald-900">
                    </div>
                </div>
            </div>
            <div class="space-y-3 mb-6">
                <!-- <div>
                    <label for="name">Input your site url (<span class="text-xs italic text-green-900">www.gorgor.com</span>)</label>
                </div> -->
                <div class="flex bg-emerald-600/90 divide-x-2 divide-white  drop-shadow-lg h-12 w-96 rounded overflow-hidden items-center pl-2">
                    <div >
                        <font-awesome :icon="['fas', 'weight-scale']" class="text-white mr-2" />
                    </div>
                    <div class="w-full h-full  text-emerald-900">
                        <select v-model="qrSize" id="" placeholder="Enter your URL" class="w-full selection:bg-emerald-900 selection:text-emerald-900 h-full bg-white focus:ring-0 focus:outline-none border-0 px-2 placeholder:text-emerald-900 text-emerald-900">
                            <option selected disabled value="">Select Size</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                        </select>
                    </div>
                </div>
            </div>
            <div >
                <button type="submit" class="bg-emerald-600/90 text-white w-96 h-12 capitalize rounded drop-shadow-lg font-bold">
                    generate Url
                </button>
            </div>
        </form>
        <div class="min-w-[24rem]">
            <qrcode-vue :value="value" class="mx-auto" :background="'transparent'" :size="size" level="H" />
        </div>
    </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'

export default {
    data() {
    return {
        value: 'https://gorgor.com',
        size: 100,
        loader: false,
        url:'',
        qrSize: '',
    }
    },
    components: {
    QrcodeVue,
    },
    methods:{
        genQrCode(){
            this.value = this.url
            this.size = this.qrSize
        }
    },
}
</script>