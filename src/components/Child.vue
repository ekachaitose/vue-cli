<template>
    <div class="box">
        <h3 class="title"> Child </h3>
        <p>{{username}}</p>
        <grand-child @logout="logout"/>
    </div>
</template>

<script>
import GrandChild from './GrandChild.vue'
export default {
    props: ['username'],
    components: {
        'grand-child': GrandChild
    },
    methods: {
        logout() {
            console.log('emit')
            this.$emit('logout')
        }
    }
}
</script>

