<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12 rounded-lg">
          <v-toolbar color="purple-accent-4" dark flat>
            <v-toolbar-title>Login to Jitegemee University</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="handleLogin">

              <v-text-field
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="text"
                v-model="email"
                required
              ></v-text-field>

              <v-text-field
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
                required
              ></v-text-field>
              
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="pink-darken-3" dark type="submit">Login</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
        <div class="text-center mt-4">
          <p>Don't have an account? <router-link to="SignUp.vue">Sign Up</router-link></p>

        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'vue-router';


const authStore = useAuthStore();
const router = useRouter();

const email = ref('');
const password = ref('');

const handleLogin = () => {   
  
  if (email.value && password.value) { 
    authStore.login();
    
    router.push({ name: 'Home' });
  } else {
    alert('Please enter email and password.'); 
  }
};

</script>


