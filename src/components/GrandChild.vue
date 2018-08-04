<template>
    <div class="box">
        <h3 class="title"> Grand Child </h3>
        <!-- <p>Vuex Username: {{vuexUsername}}</p>
        <p>Us Amount : {{ vuexAmount}}</p> 
         <p> Username : {{username}}</p>
        <p>{{amount}}</p>
        <p>{{usAmount}}</p>
         <p class="control">
            <button class="button is-danger" @click="logout">Logout</button>
        </p>
        <p class="control">
            <button class="button " @click="mutateAmount(100)">Reset Amount</button>
        </p> -->
         <pre>{{customers}}</pre>
         <button class="button" @click="getCustomers()">Get Customers</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

const comMapState = { amount() {} }
const computeds = { ...comMapState, xxx() {} }
console.log(computeds)
export default {
    methods: {
        logout() {
            console.log('logout')
            this.$emit('logout')
        },
        ...mapMutations(['mutateAmount']),
        ...mapActions(['getCustomers'])
    },
    computed: {
        ...mapState(['amount', 'username', 'customers']),
        ...mapGetters(['usAmount']),
        xxx() {}
    }
}
</script>

