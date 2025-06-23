<script setup>

</script>

<template>
  <!-- Rotating images -->
    <v-carousel>
  <v-carousel-item
    src="../../public/Images/leon-wu-LLfRMRT-9AY-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/Images/pang-yuhao-_kd5cxwZOK4-unsplash (1).jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/Images/shubham-sharan-Z-fq3wBVfMU-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/Images/sincerely-media-dGxOgeXAXm8-unsplash.jpg"
    cover
  ></v-carousel-item>
    </v-carousel>

    <!-- Latest from jitegemee -->

     <v-container>
       <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Women in Technology"
        text="Join us for a weekend of innovation and collaboration, July 12–14.!"
        title="Women in Tech Hackathon 2025"
        color="purple-lighten-3"
      ></v-card>

    </v-col>

    <v-col cols="12" md="4">
      <v-card color="purple-lighten-3">
        <template v-slot:title>
          Mentorship Match Round 2 
        </template>

        <template v-slot:subtitle>
          Mentorship Programs
        </template>

        <template v-slot:text>
         Applications now open! Connect with industry experts and grow your skills.!
        </template>
      </v-card>

    </v-col>

    <v-col cols="12" md="4">
      <v-card color="purple-lighten-3">
        <v-card-item>
          <v-card-title> Resources</v-card-title>

          <v-card-subtitle>Resources Update</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Check out our updated resource library with tools and articles on web development and career growth.!
        </v-card-text>
      </v-card>

    </v-col>
  </v-row>
     </v-container>

     <!-- Patners -->
      <v-container>
        <v-row>
        <v-col cols="12" md="2" width="50">
          <v-img src="../../public/Logos/safaricom-logo-green.png"> </v-img>
        </v-col>

        <v-col cols="12" md="2" width="50">
          <v-img src="../../public/Logos/Oracle-Logo-1995-Present-e1692419896204-400x280.png"> </v-img>
        </v-col>

        <v-col cols="12" md="2" width="50">
          <v-img src="../../public/Logos/Intel-01-400x280.png"> </v-img>
        </v-col>

        <v-col cols="12" md="2" width="50">
          <v-img src="../../public/Logos/Google-02-01-400x280.png"> </v-img>
        </v-col>

        <v-col cols="12" md="2" width="50">
          <v-img src="../../public/Logos/deloitte.svg"> </v-img>
        </v-col>

        <v-col cols="12" md="2" width="50">
          <v-img src="../../public/Logos/samsung-01-1-400x280.png"> </v-img>
        </v-col>

        </v-row>
      </v-container>
</template>