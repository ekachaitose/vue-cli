<template>
    <div class="box">
        <h3 class="title"> Nested </h3>
        <input type="text"  class="input" v-model="username">
        <p>{{username}}</p>
    <hr>
         <parent @logout="logout"/>
    </div>
  
</template>

<script>
import Parent from '../components/Parent.vue'
export default {
    data() {
        return {
            username: ''
        }
    },
    components: {
        parent: Parent
    },
    methods: {
        logout() {
            this.username = ''
        }
    }
}
</script>

