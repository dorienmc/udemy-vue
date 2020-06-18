<template>
    <div>
    <h3>Edit the User</h3>
    <p> ID: {{ $route.params.id }} </p>
    <p> Locale: {{ $route.query.locale}} </p>
    <p> Query #: {{ $route.query.q}} </p>
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some extra data</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteLeave(to, from, next) {
        //This is right before navigating away, so this is the only beforeRoute place where we can still access the component
        if(this.confirmed) {
            next();
        } else {
            if (confirm('Are you sure?')) {
                next();
            } else {
                next(false);
            }
        }
    }
}
</script>