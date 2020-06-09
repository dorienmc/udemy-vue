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
            <transition name="slide">
                <div class="alert alert-info" v-if="show">This is some info</div>
            </transition>
            
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
    .slide-enter {
        /* starting state is set in keyframe */
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
    }
    .slide-leave {
        /* starting state is where the element now is*/
    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
    }
    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
