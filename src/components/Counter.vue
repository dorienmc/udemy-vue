<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations('counter', ['increment', 'decrement']),
    increment(by) {
      this.$store.dispatch('counter/increment',by)
    }
  }
}
</script>