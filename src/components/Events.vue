<script setup>
import { ref } from 'vue';
const events =ref([
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
        date: "Juky 20th 2025",
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
</script>

<template>
    <v-container>
        <v-row>
            <v-col md="4" v-for = "event in events" :key="event">
        <v-card 
    class="mx-auto"
    max-width="400"
    color="purple-lighten-3"
  >
    <v-img
      class="align-end text-white"
      height="200"
      :src="event.image"
      cover
    >
      <v-card-title>{{ event.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ event.date }}
    </v-card-subtitle>

    <v-card-text>
      <div>{{ event.location }}</div>

    </v-card-text>

    <v-card-actions>
      <v-btn color="white" :text="event.category"></v-btn>
      <v-btn color="white" text="Explore"></v-btn>

    </v-card-actions>
  </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>