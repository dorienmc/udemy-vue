<template>
    <div class="container">
        <div class="row">
            <h1>Vuex</h1>
            <app-result></app-result>
            <hr>
            <app-counter></app-counter>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';

export default {
    components: {
        appCounter: Counter,
        appResult: Result,
    }
}
</script>

<style>
</style>
