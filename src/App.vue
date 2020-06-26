<template>
    <div class="container">
        <div class="row">
            <h1>Vuex</h1>
            <app-result></app-result>
            <app-another-result></app-another-result>
            <hr>
            <app-counter></app-counter>
            <app-another-counter></app-another-counter>
            <hr>
            <input type="text" :value="value" @input="updateValue">
            <p>{{ value }}</p>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import AnotherCounter from './components/AnotherCounter.vue';

export default {
    computed: {
        value() {
            return this.$store.getters.value;
        }
    },
    methods: {
        updateValue(event) {
            this.$store.dispatch('updateValue', event.target.value);
        }
    },
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
