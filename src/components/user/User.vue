<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <p>Loaded ID: {{ id }} </p>
        <button @click="navigateToHome" class="btn btn-primary">Go to home</button>
    </div>
    
</template>

<script>
export default {
    data() {
        return  {
            id: this.$route.params.id
        }
    },
    methods: {
        navigateToHome() {
            this.$router.push('/')
        }
    },
    watch: {
        //Need to watch the route because the component might be reused and hence id might not be updated when changing routes.
        '$route'(to ,from) {
            this.id = to.params.id
        }
        //As of vue-router version 2.2, you can also bind your route params to props of the target components. This eliminates the need of watch ing $route .
    }
}
</script>