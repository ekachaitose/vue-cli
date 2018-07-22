<template>
  <div class="box">
    <h3 class="title">Customer</h3>
    <button class="button is-success" @click="getCustomers">GET</button>
    <hr/>

    <div :key="c.id" v-for="c in customers">

      <figure class="image is-64x64">
        <img :src="getImg(c.gender)">
      </figure>
      <p> {{c.firstName}} </p>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import male from '../images/male.png'
  import female from '../images/female.png'
  export default {
    data() {
      return {
        customers: []
      }
    },
    methods: {
      async getCustomers() {
        try {
          const res = await axios.get('http://localhost:3000/customers')
          this.customers = res.data
        } catch (error) {
          console.log(error.message)
        }
      },
      getImg(gender) {
        return gender == 'M' ? male : female
      }
    }
  }
</script>