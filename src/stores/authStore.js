import { defineStore } from 'pinia';


export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false, 
  }),
  actions: {
    login() {
      this.isLoggedIn = true;
      console.log('User logged in!');
    },
    logout() {
      this.isLoggedIn = false;
      console.log('User logged out!');
      
    },
  },
  
  persist: {
    enabled: true, 
    strategies: [
      {
        key: 'techSistersAuth', 
        storage: localStorage, 
      },
    ],
  },
});

