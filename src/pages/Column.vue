<template>
  <div class="box">
    <h3 class="title">Customer</h3>
    <button class="button is-success" @click="getCustomers">GET</button>
    <hr/>
    <input type="radio" name="gender" value="M" v-model="gender"> Male
    <input type="radio" name="gender" value="F" v-model="gender"> Female
    <div class="columns" :key="index" v-for="(rowColumns,index) in columnCustomers">
          <div class="column" v-for="(rowCol,index) in rowColumns" :key="index">
            
              <div class="box">
                   <figure class="image is-32x32">
                        <img :src="getImg(rowCol.gender)" />
                    </figure>
                     {{rowCol.firstName}} 

               </div>
          </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import male from '../images/male.png'
import female from '../images/female.png'
import { chunk } from 'lodash'
export default {
    data() {
        return {
            customers: [],
            gender: 'M'
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
    },
    computed: {
        columnCustomers() {
            return chunk(this.genderCustomer, 4)
        },
        genderCustomer() {
            return this.customers.filter(c => {
                return c.gender == this.gender
            })
        }
    }
}
</script>