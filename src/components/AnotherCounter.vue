<template>
  <div>
    <button class="btn btn-primary" @click="asyncIncrement({by: 50,duration: 500})">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  methods: {
    // increment () {
    //   this.$store.commit('increment')
    // },
    // decrement () {
    //   this.$store.commit('decrement')
    // }
    ...mapActions([
      'asyncIncrement',
      'decrement'
    ])
  }
}
</script>