<script setup>
import QrCode from '../components/QrCodeComponents/QrCode.vue';
import axios from 'axios';


// const local = 'http://127.0.0.1:8000/api/check-user';
  

//   let agent = navigator.userAgent;
//   let host = window.location.host
//   let os = navigator.platform

//   const headers = {
//     'Content-Type' : 'application/json',
//     'Accept' : 'application/json',
//   };

//   setTimeout(() => {
//     Object.assign(clientData, {'device': agent}, {'host': host}, {'os': os},)
    
    
//     const guest = ()=>{
//       axios.post( clientData, {headers:headers})
//         .then(res=>{
//           console.log(res);
//         })
//         .catch(err=>{
//           console.log(err.response);
//         })
//     }
//   }, 500);



</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="max-w-6xl mx-auto w-11/12 min-h-[35rem] mt-20 md:mt-10 mb-5 flex md:items-center md:w-auto">
      <QrCode class="" />
    </div>

  </main>
</template>
