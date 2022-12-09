import { defineStore } from 'pinia'

export const infoStore = defineStore('infoStore', {
    state: ()=> ({
        userDetails: null
    }),
    getters:{
        getGuestDevice: (state) => { return state.userDetails}
    },
    actions:{
        getGuest(){
            const apiUrl = 'http://ipinfo.io/105.112.228.233?token=bc51001a29792a'
            try{
                axios.get(apiUrl)
                .then(res=>{this.userDetails = res.data})
            }
            catch(err){
                console.log(err.response)
            }
        }
    }
})