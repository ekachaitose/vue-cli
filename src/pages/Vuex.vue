<template>
    <div class="box">
        <h3 class="title">Vuex</h3>
        <hr>
        <div class="columns">

         <button class="button" @click="getCustomers()">Get Customers</button>
        </div>
     <!-- <div class="columns">
            <div class="column is-1 "><p>Id</p></div>
            <div class="column "><p>FirstName</p></div>
            <div class="column "><p>LastName</p></div>
            <div class="column "><p>Age</p></div>
            <div class="column "><p>Gender</p></div>
        </div>
      
        <div class="columns" :key="c.Id" v-for="c in customers">
                <div class="column is-1"><p>{{c.id}}</p></div>
                <div class="column "><p>{{c.firstName}}</p></div>
                <div class="column "><p>{{c.lastName}}</p></div>
                <div class="column "><p>{{c.age}}</p></div>
                <div class="column "><p>{{c.gender}}</p></div>
        </div> -->
        <pre>{{customerNames}}</pre>
    </div>
  
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import male from '../images/male.png'
import female from '../images/female.png'
export default {
    methods: {
        ...mapActions(['getCustomers']),
        getImg(gender) {
            return gender == 'M' ? male : female
        }
    },
    computed: {
        ...mapState(['customers']),
        ...mapGetters(['femaleCustomers', 'maleCustomers', 'customerNames'])
    }
}
</script>

