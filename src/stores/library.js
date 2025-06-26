import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLibraryStore = defineStore('library',  {
    state: () => {
        const library = ref([
            {
                id: 1,
                title: "Law",
                image: "../../public/Library/download (6).jpg",
                description: "Study legal systems, human rights, contracts, and justice — preparing students to interpret and apply the law.",
            },
            {
                id: 2,
                title: "",
                image: "",
                description: "",
            },        
        ])

        return{
            library,
        }
    }, 
    actions:{
        
    }
})
