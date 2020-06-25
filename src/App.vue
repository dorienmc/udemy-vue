<template>
    <div class="container">
        <div class="row">
            <h1>Vuex</h1>
            <app-result></app-result>
            <app-another-result></app-another-result>
            <hr>
            <app-counter></app-counter>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue'

export default {
    components: {
        appCounter: Counter,
        appResult: Result,
        appAnotherResult: AnotherResult,
    }
}
</script>

<style>
</style>
