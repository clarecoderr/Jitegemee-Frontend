import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', () => {
  const events = ref([
    {
        name: "Community Outreachb at Northern Kenya ",
        image:"../../public/Images/ian-macharia-gogGhbvHrYw-unsplash.jpg",
        date: "July 6th 2025",
        location: "Northen Kenya",
        category: "Community Outreach",
    
    },

     {
        name: "Teens Coding Bootcamp",
        image: "../../public/Images/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg",
        date: "July 20th 2025",
        location: "Strathmore University",
        category: "Coding classes",
    
    },

     {
        name: "Career Fair 2025",
        image: "../../public/Images/bas-glaap-GUColA_7waM-unsplash.jpg",
        date: "July 2nd 2025",
        location: "Graduation square Stathmore University",
        category: "Carrers",
    
    },

     {
        name: "Club vivits to Mombasa",
        image: "../../public/Images/maarten-van-den-heuvel-Siuwr3uCir0-unsplash.jpg",
        date: "4th July 2025",
        location: "Voyager Beach and Resort",
        category: "School Trips",
    
    },
])


  return { events }
})