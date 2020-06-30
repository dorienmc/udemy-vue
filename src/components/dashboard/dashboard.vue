<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{ email }}</p>

    <hr>
    <div class="row" style="padding:50px"> 
      <app-user v-for="user in users" :user=user :key=user.id></app-user>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import user from './user.vue';

export default {
  data() {
    return {
      users: []
    }
  },
  computed: {
    email() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email
    }
  },
  components: {
    appUser: user
  },
  created() {
    this.$store.dispatch('fetchUser')
  }
}
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }

</style>