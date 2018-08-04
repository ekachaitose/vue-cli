<template>
    <div class="box">
        <h3 class="title"> Parent </h3>
        <p>{{username}}</p>
        <child @logout="logout"/>
    </div>
</template>

<script>
import Child from './Child.vue'
export default {
    props: ['username'],
    components: {
        child: Child
    },
    methods: {
        logout() {
            console.log('parentEmit')
            this.$emit('logout')
        }
    }
}
</script>

