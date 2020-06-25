<template>
    <div class="container">
        <div class="row">
            <h1>Vuex</h1>
            <app-result></app-result>
            <app-another-result></app-another-result>
            <hr>
            <app-counter></app-counter>
            <app-another-counter></app-another-counter>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import AnotherCounter from './components/AnotherCounter.vue';

export default {
    components: {
        appCounter: Counter,
        appResult: Result,
        appAnotherResult: AnotherResult,
        appAnotherCounter: AnotherCounter,
    }
}
</script>

<style>
</style>
