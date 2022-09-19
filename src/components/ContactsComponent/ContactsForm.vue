<template>
    <div class="space-y-8">
        <div class="capitalize text-2xl md:text-4xl font-bold text-emerald-600">
            <p>send us a message</p>
        </div>
        <div class="w-full rounded-md shadow-md drop-shadow-xl shadow-emerald-600/20 bg-emerald-50">
            <div class="w-11/12 mx-auto pt-6 pb-4">
                <form @submit.prevent="submit()">
                    <div class="space-y-4">
                        <div>
                            <label for="name" class="text-lg capitalize mb-1 text-emerald-600 font-semibold">full name</label>
                            <div class="flex h-12 items-center w-full md:w-96 overflow-hidden rounded-md shadow-inner bg-white/90">
                                <div class="w-10 flex items-center justify-center text-lg h-full text-center bg-emerald-600/90 text-white">
                                    <font-awesome :icon="['fas', 'user']" />
                                </div>
                                <div class="h-full w-full">
                                    <input type="text" :value="form.fullname" placeholder="enter full name" class="h-full w-full focus:border-none focus:ring-0 focus:outline-none px-2 text-emerald-600/90 placeholder:text-emerald-600/90 placeholder:capitalize bg-transparent">
                                </div>
                            </div>
                        </div>
                        <div>
                            <label for="email" class="text-lg capitalize mb-1 text-emerald-600 font-semibold">email address</label>
                            <div class="flex h-12 overflow-hidden items-center w-full md:w-96 rounded-md shadow-inner bg-white/90">
                                <div class="w-10 flex items-center justify-center text-lg h-full text-center bg-emerald-600/90 text-white">
                                    <font-awesome :icon="['fas', 'envelope']" />
                                </div>
                                <div class="h-full w-full">
                                    <input type="email" :value="form.email" placeholder="enter email address" class="h-full w-full focus:border-none focus:ring-0 focus:outline-none px-2 text-emerald-600/90 placeholder:text-emerald-600/90 placeholder:capitalize bg-transparent">
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <label for="message" class="text-lg capitalize mb-2 text-emerald-600 font-semibold">message</label>
                            <div class="w-full  rounded-md shadow-inner bg-white/90">
                                <div class="h-full w-full">
                                    <textarea :value="form.message" id=""  class="w-full focus:border rounded-md p-2 focus:border-emerald-600 focus:outline-none focus:ring-0" rows="5"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="">
                            <button class="w-full capitalize hover:bg-emerald-400 bg-emerald-600/90 text-white h-10 rounded-md drop-shadow-lg flex items-center justify-center">
                                send message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div v-show="loader" class="w-full h-screen fixed top-0 left-0 bg-emerald-700/50 backdrop-blur scroll-m-0 flex items-center justify-center">
        <img src="/image/loader.svg" class="blur-none" alt="">
    </div>
</template>

<script setup>
import axios from "axios"
import { useToast } from "vue-toastification";
import { ref, computed } from 'vue'

    const toast = useToast();
    const url = 'http://ipinfo.io/105.112.228.233?token=bc51001a29792a';
    const local = 'http://127.0.0.1:8000/api/add-contact'
    const form = {
        'email' : '',
        'fullname' : '',
        'message' : '',
        'device' : navigator.userAgent,
        'os' : navigator.platform
    }

    let clientData = ''

    const getGuest = ()=>{
        axios.get(url)
        .then(res=>{
        clientData = res.data
        })
        .catch(err=>{
        console.log(err.response)
        })
    }
    getGuest()

    const clearForm = ()=>{
        
    }

    const submit = ()=>{
        Object.assign(form, clientData)

        axios.post(local, form)
        .then(res=>{
            if(res.data.status == 'success'){
                toast(res.data.message);
                form.email = '';
                form.fullname = '';
                form.message = '';
            }
        })
        .catch(err=>{
            console.log(err.response)
            if(err.response){
                toast.error(err.response.data.message)
            }
        })
    }

</script>

<style>

</style>