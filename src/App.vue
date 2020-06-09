<template>
    <div class="container">
        <div class="row">
            <h1>Animations</h1>
            <hr>
            <button class="btn btn-primary" @click="show = !show">Show Alert</button>
            <br><br>
            <!-- Will only show on element at a time -->
            <transition name="fade">
                <div class="alert alert-info" v-if="show">This is some info</div>
            </transition>
            <!-- CSS for created/removed elements (* == transition name or v) -->
            <!-- *-enter     initial state
            *-enter-active
            *-leave
            *-leave-active -->
            
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
           show: false
        }
    },
    computed: {
        
    },
    filters: {
        
    },
    components: {
    }
}
</script>

<style>
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s; /* transition to default, which is opacity 1*/
    }
    .fade-leave {
         /* opacity: 1; Not needed, is the default*/
    }
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }
</style>
