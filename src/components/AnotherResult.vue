<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ clickCounter }}</p>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: { 
    //... (spread operator, ES6) pull out all properties and methods and creates seperate key value pairs for each of them
    ...mapGetters('counter', [
      'doubleCounter',
      'clickCounter'
    ]),
    ourOwnComputedProperty() {

    }
    // counter() {
    //   return this.$store.getters.doubleCounter;
    // },
    // clicks() {
    //   return this.$store.getters.stringCounter;
    // }
  }
}
</script>

<style>

</style>