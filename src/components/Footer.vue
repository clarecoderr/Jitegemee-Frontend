<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="purple-darken-1">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
        
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-60">
      Empowering growth through knowledge, collaboration, and innovation. Together, we build a future where opportunities are shared, voices are heard, and learning never ends. Stay curious, stay inspired — because every step forward begins with the courage to dream and the commitment to create.
    
    </div>
     
    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Jitegemee</strong>
    </div>
  </v-footer>
</template>
<script setup>
  const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]
</script>