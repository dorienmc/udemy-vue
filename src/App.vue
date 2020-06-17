<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-mod-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="">Mail</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            user: {
                username: '',
                email: ''
            }
        };
    },
    methods: {
        submit() {
            //$http is added by the vue-resource plugin
            this.$http.post('https://udemy-vuejs-http-45e40.firebaseio.com/data.json', this.user)
                .then(response => { 
                    console.log(response);
                }, error => {
                    console.log(error);
                });
        }
    }
}
</script>

<style>
</style>
