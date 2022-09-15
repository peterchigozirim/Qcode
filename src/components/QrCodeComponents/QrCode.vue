<template>
    <div>
        <div class="grid md:grid-cols-2 h-full mb-6 gap-8 md:gap-4">
            <div>
                <div class="space-y-8 w-full">
                    
                    <div class="md:w-96 mx-auto">
                        <qr-content />
                        <form @submit.prevent="genQrCode()">
                            <div class="space-y-3 mb-6">
                                <div class="flex bg-emerald-600/90 divide-x-2 divide-white  drop-shadow-lg h-12 rounded overflow-hidden items-center pl-2">
                                    <div class="px-1" >
                                        <font-awesome :icon="['fas', 'globe']" class="text-white mr-2" />
                                    </div>
                                    <div class="w-full h-full">
                                        <input type="text" v-model="url" placeholder="Enter your URL" class="w-full h-full bg-white focus:ring-0 focus:outline-none border-0 px-2 placeholder:text-emerald-900 text-emerald-900">
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-3 mb-6">
                                <div class="flex bg-emerald-600/90 divide-x-2 divide-white  drop-shadow-lg h-12  rounded overflow-hidden items-center pl-2">
                                    <div class="px-1">
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
                                <button type="submit" class="bg-emerald-600/90 text-white h-12 w-full capitalize rounded drop-shadow-lg font-bold">
                                    generate Url
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <left-image-banner />
        </div>
        <div class="w-full py-6">
            <div class="">
                <qrcode-vue :value="value" class="mx-auto " :background="'transparent'" :size="size" level="H" />
            </div>
        </div>

        <div class="w-full h-full max-h-screen fixed top-0 left-0 bg-emerald-700/50 backdrop-blur scroll-m-0 flex items-center justify-center">
            <img src="/image/loader.svg" class="blur-none" alt="">
        </div>
    </div>
    
</template>
<script>
import QrcodeVue from 'qrcode.vue'
import QrContent from './QrContent.vue'
import LeftImageBanner from './LeftImageBanner.vue'

export default {
    data() {
    return {
        value: 'https://gorgor.com',
        size: 200,
        loader: false,
        url:'',
        qrSize: '',
    }
    },
    components: {
    QrcodeVue,
    QrContent,
    LeftImageBanner
},
    methods:{
        genQrCode(){
            this.value = this.url
            this.size = this.qrSize
        }
    },
}
</script>