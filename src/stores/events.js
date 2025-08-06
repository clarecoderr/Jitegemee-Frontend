import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import axios from 'axios';
import api from './../services/api'

export const useEventsStore = defineStore('events', {    
    state: () => {       
        const events = ref([])

        return{
            events,
        }
    }, 
    actions:{
        async fetchEvents() {
          const response = await api.get('getAllEvents')
            this.events = response.data
        }
    },
    persist: true,

})