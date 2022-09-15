<template>
    <div>
        <div class="grid md:grid-cols-2 mb-6 gap-8 md:gap-4">
            <div>
                <div class="space-y-8 w-full">
                    
                    <div class="md:w-96 mx-auto">
                        <qr-content />
                        <form @submit.prevent="genQrCode()">
                            <div class=" mb-6">
                                <div class="flex bg-emerald-600/90 divide-x-2 divide-white  drop-shadow-lg h-12 rounded overflow-hidden items-center pl-2">
                                    <div class="px-1" >
                                        <font-awesome :icon="['fas', 'globe']" class="text-white mr-2" />
                                    </div>
                                    <div class="w-full h-full">
                                        <input type="url" v-model="url" placeholder="Enter your URL" required class="w-full h-full bg-white focus:ring-0 focus:outline-none border-0 px-2 placeholder:text-emerald-900 text-emerald-900">
                                        
                                    </div>
                                </div>
                                <div class="mt-1 text-xs">
                                    <p>
                                        example
                                        <span class=" text-emerald-700 text-center font-bold italic">
                                            ( https://gorgor.com )
                                        </span>
                                    </p>
                                    
                                </div>
                            </div>
                            <div class="space-y-3 mb-6">
                                <div class="flex bg-emerald-600/90 divide-x-2 divide-white  drop-shadow-lg h-12  rounded overflow-hidden items-center pl-2">
                                    <div class="px-1">
                                        <font-awesome :icon="['fas', 'weight-scale']" class="text-white mr-2" />
                                    </div>
                                    <div class="w-full h-full  text-emerald-900">
                                        <select v-model="qrSize" id="" required  class="w-full selection:bg-emerald-900 selection:text-emerald-900 h-full bg-white focus:ring-0 focus:outline-none border-0 px-2 placeholder:text-emerald-900 text-emerald-900">
                                            <option selected disabled value="">Select Size</option>
                                            <option value="100">100x100</option>
                                            <option value="200">200x200</option>
                                            <option value="300">300x300</option>
                                            <option value="400">400x400</option>
                                            <option value="500">500x500</option>
                                            <option value="600">600x600</option>
                                            <option value="700">700x700</option>
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
            <left-image-banner class="order-first md:order-none" />
        </div>
        <div class="w-full  space-y-4 py-6" v-show="qrShow">
            <div class="" id="qrSvg">
                <qrcode-vue :value="value" class="mx-auto " id="qrCode"   :size="size" level="H" />
            </div>
            <div id="qrLink" class="w-full">

            </div>
        </div>

        <div v-show="loader" class="w-full h-full fixed top-0 left-0 bg-emerald-700/50 backdrop-blur scroll-m-0 flex items-center justify-center">
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
        value: '',
        size: 200,
        loader: false,
        url:'',
        qrSize: '',
        loader: false,
        qrShow:false,
        linkClass: 'md:w-96 w-full h-10 mx-auto flex items-center justify-center font-bold bg-emerald-600/90 text-white'
    }
    },
    components: {
    QrcodeVue,
    QrContent,
    LeftImageBanner
},
    methods:{
        genQrCode(){
            this.removeUrl()
            this.loader = true
            setTimeout(() => {
                this.loader = false
                this.qrShow = true
            }, 1000);
            this.value = this.url
            this.size = this.qrSize

            setTimeout(() => {
                const qrSvg = document.getElementById('qrSvg');
                const getUrl = qrSvg.querySelector('canvas');
                
                var img  = getUrl.toDataURL("image/png");
                this.getSvg(img)
            }, 50);


        },

        getSvg(url){
            const link = document.createElement('a');
            link.id = 'save-link';
            link.classList = this.linkClass;
            link.href = url;
            link.download = 'qrcode';
            link.innerHTML = 'Save Image';
            document.getElementById('qrLink').appendChild(link)
        },

        removeUrl(){
            const url = document.getElementById('save-link')
            if (url) {
                url.remove();
            }
        }
    },
}
</script>