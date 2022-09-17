<script setup>
import QrCode from '../components/QrCodeComponents/QrCode.vue';
import axios from 'axios';


const url = 'http://ipinfo.io/105.112.228.233?token=bc51001a29792a';
const local = 'http://127.0.0.1:8000/api/check-user';
  let data = ''
  const getGuest = ()=>{
    axios.get(url)
    .then(res=>{
      // console.log(res.data);
      data.push(res.data)
    })
    .catch(err=>{
      console.log(err.response)
    })
  }

  getGuest()
  console.log(data);
  const guest = ()=>{
    axios.post(local,{data:data})
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err.response);
      })
  }

  setTimeout(() => {
    guest()
  }, 100);



</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="max-w-6xl mx-auto w-11/12 min-h-[35rem] mt-20 md:mt-10 mb-5 flex md:items-center md:w-auto">
      <QrCode class="" />
    </div>

  </main>
</template>
