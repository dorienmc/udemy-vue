<template>
<div class="col-sm-6">
  <div class="card bg-light mb-3"" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ user.email}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{user.country}}</h6>
      <p class="card-text" v-for="hobby in user.hobbyInput" :key=hobby>{{hobby}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style>

</style>
