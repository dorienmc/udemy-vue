<template>
    <div class="container">
        <div class="row">
            <h1>Vuex</h1>
            <app-result :counter="counter"></app-result>
            <hr>
            <app-counter @updated="counter += $event"></app-counter>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';

export default {
    data() {
        return {
            counter: 0
        }
    },
    components: {
        appCounter: Counter,
        appResult: Result,
    }
}
</script>

<style>
</style>
