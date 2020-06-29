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
      email: '',
      users: []
    }
  },
  components: {
    appUser: user
  },
  created() {
    axios.get('/users.json')
      .then(response => {
        console.log(response)
        const data = response.data
        const users = []
        for (let key in data) {
          const user = data[key]
          user.id = key

          users.push(user)
        }
        this.users = users
        this.email = users[0].email
      })
      .catch(error => console.error(error))
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