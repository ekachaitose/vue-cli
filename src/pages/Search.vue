<template>
  <div>
    <h3 class="title">Search</h3>
    <input type="text" @keyup="searchCustomer" class="input" v-model="searchBy">
    <hr>
    <div class="columns">
      <div class="column is-1 ">
        <p>Id</p>
      </div>
      <div class="column ">
        <p>FirstName</p>
      </div>
      <div class="column ">
        <p>LastName</p>
      </div>
      <div class="column ">
        <p>Age</p>
      </div>
      <div class="column ">
        <p>Gender</p>
      </div>
    </div>
    <div :key="c.Id" v-for="c in customers">
      <div class="columns">
        <div class="column is-1">
          <p>{{c.id}}</p>
        </div>
        <div class="column ">
          <p>{{c.firstName}}</p>
        </div>
        <div class="column ">
          <p>{{c.lastName}}</p>
        </div>
        <div class="column ">
          <p>{{c.age}}</p>
        </div>
        <div class="column ">
          <p>{{c.gender}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    get
  } from 'axios'
  import {
    debounce
  } from 'lodash'
  export default {
    created() {
      this.searchCustomer = debounce(this.searchCustomer, 500)
    },
    data() {
      return {
        searchBy: '',
        customers: []
      }
    },
    methods: {
      async searchCustomer() {
        console.log(this.searchBy)
        const {
          data
        } = await get(
          `http://localhost:3000/customers?q=${this.searchBy}`
        )
        this.customers = data
      }
    }
  }
</script>