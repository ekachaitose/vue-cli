<template>
    <div>
        <h3 class="title">Customer Profile</h3>
       <table class="table">
           <tr>
               <td>Id</td>
               <td>FirstName</td>
               <td>LastName</td>
               <td>Age</td>
               <td>Gender</td>
           </tr>
           <tr>
               <td>{{customers.id}}</td>
               <td>{{customers.firstName}}</td>
               <td>{{customers.lastName}}</td>
               <td>{{customers.age}}</td>
               <td>{{customers.gender}}</td>
           </tr>
           
       </table>
    </div>
</template>

<script>
 import axios from 'axios'
export default {
    data() {
        return{
            customers: {}
        };
    },
    mounted() {
        console.log(this.$route.params);
        this.getCustomerById(this.$route.params.id);
    }, 
    methods: {
        async getCustomerById(custId) {
             const res = await axios.get(`http://localhost:3000/customers/${custId}`)
          this.customers = res.data
        }
    }
}
</script>