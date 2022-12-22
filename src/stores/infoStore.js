import { defineStore } from 'pinia'
import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/';
export const infoStore = defineStore('infoStore', {
    state: ()=> ({
        userDetails: null,
        loader: false,
    }),
    getters:{
        getGuestDevice: (state) => { return state.userDetails}
    },
    actions:{
        getGuest(){
            const apiUrl = 'http://ipinfo.io/105.112.228.233?token=bc51001a29792a'
            axios.get(apiUrl)
            .then(res=>{
                this.userDetails = res.data
                setTimeout(() => {
                    this.sendGuest(res.data)
                }, 1000);
            })
            .catch(err=>{
                console.log(err.response)
            })
        },

        sendGuest(data){
            axios.post(url+'welcome',data)
            .then(res=>{
                
            })
            .catch(err=>{
                console.log(err.response)
            })
            
        },

        getDownload(){
            try{
                axios.post(url+'download')
                .then(res=>{
                    console.log(res);
                })
            }catch(err){
                console(err)
            }
        },
    }
})