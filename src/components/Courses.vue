<script setup>
import { ref } from 'vue'

const courses = ref([
    {
        name:"Computer Science",
        school:"School of Computing and Engineering",
        description:"Study programming, algorithms, software development, databases, and AI.",
        intake:"April and June 2025",
    },
    {
        name:"Medicine",
        school:"School of Medicine and Surgery",
        description:"Training to become a medical doctor through clinical and scientific studies.",
        intake:"May 2025",
    },
    {
        name:"BBIT",
        school:"School of computing and Engineering",
        description:"Best course for a mix in Business and Technology",
        intake:"September 2025",
    },

    {
        name:"Communications",
        school:"School of Communication & Media Studies",
        description:"Learn media production, journalism, public relations, and digital content creation.",
        intake:"July 2025",
    },

    {
        name:"Law",
        school:"School of Law",
        description:"Study legal systems, constitutional law, human rights, commercial law, and litigation.",
        intake:"October 2025",
    },

    {
        name:"Agricultural economics",
        school:"School of Agriculture",
        description:"Apply economics to agriculture, agribusiness, food systems, and rural development.",
        intake:" 2025",
    },

    {
        name:"Hospitality and Tourism Management",
        school:"School of Hospitality and Tourism Management",
        description:"Learn hotel management, event planning, tourism marketing, and customer service.",
        intake:" 2025",
    },

    {
        name:"Physcology",
        school:"School of Social Sciences",
        description:"Study human behavior, mental health, cognitive processes, and therapy",
        intake:" 2025",
    },

    {
        name:"Business Administration",
        school:"School of Business and Economics",
        description:"Learn management, marketing, finance, leadership, and strategic planning.",
        intake:" 2025",
    },

    {
        name:"Architecture",
        school:"School of Architecture",
        description:"Design buildings and spaces focusing on aesthetics, functionality, and sustainability",
        intake:"June 2025",
    }
])

</script>

<template>
    <v-container>
        <v-row>
            <v-col  md="40" v-for="course in courses" >
     <v-card color="purple-lighten-3">
        <v-card-item>
          <v-card-title>{{course.name}}</v-card-title>

          <v-card-subtitle>{{course.school}}</v-card-subtitle>
        </v-card-item>

        <v-card-text>
           {{course.description}}
        </v-card-text>
      </v-card>    
            </v-col>
        </v-row>
    </v-container>
</template>