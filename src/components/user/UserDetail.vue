<template>
    <div>
        <h3>Some User Details</h3>
        <p> ID: {{ $route.params.id }} </p>
        <router-link 
            tag="button" 
            :to="link" 
            class="btn btn-primary">Edit user</router-link>
    </div> 
</template>

<script>
export default {
    data() {
        return  {
            link: { 
                name: 'userEdit', 
                params: { id: this.$route.params.id}, 
                query: { locale: 'en', q: 100},
                hash: '#data' 
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log("beforeRouteEnter in UserDetail")
        //As long as you don't call next the vue instance is not initialized yet, so things like this.link cannot be called
        //You can access the vue model with
        // next(vm => {
        //     vm.link;
        // })
        if (true) { //some test
            next();
        } else {
            next(false);
        }
    }
}
</script>