<template>
    <div class="box">
    <h3 class="title">Pagination</h3>
    <div class="columns">
      <div class="column is-3">Total :  {{totalCustomer}}</div>
    </div>
    <nav class="pagination">
      <ul class="pagination-list">
        <li :key="p" v-for="p in totalPage">
          <router-link :class="getCustomersPage(p)" :to="'/pagination?limit=' + limit + '&page=' + p ">{{p}}</router-link>
        </li>
      </ul>
  </nav>
    <div class="columns">
      <div class="column is-1 "><p>Id</p></div>
      <div class="column "><p>FirstName</p></div>
      <div class="column "><p>LastName</p></div>
      <div class="column "><p>Age</p></div>
      <div class="column "><p>Gender</p></div>
    </div>
    <div :key="c.Id" v-for="c in customers">
    <div class="columns">
      <div class="column is-1"><p>{{c.id}}</p></div>
      <div class="column "><p>{{c.firstName}}</p></div>
      <div class="column "><p>{{c.lastName}}</p></div>
      <div class="column "><p>{{c.age}}</p></div>
      <div class="column "><p>{{c.gender}}</p></div>
    </div>

    </div>
  
    </div>
</template>
<script>
import axios from "axios";
export default {
  watch: {
    "$route.query"() {
      const { limit = 10, page = 1 } = this.$route.query;
      this.getCustomers(limit, page);
    }
  },
  data() {
    return {
      customers: [],
      totalCustomer: 0,
      totalPage: 0,
      page: 1,
      limit: 5
    };
  },
  mounted() {
    console.log(this.$route.query);
    const { limit = 10, page = 1 } = this.$route.query;
    this.getCustomers(limit, page);
  },
  methods: {
    async getCustomers(limit, page) {
      const { data: customer, headers } = await axios.get(
        `http://localhost:3000/customers/?_limit=${limit}&_page=${page}`
      );
      console.log(headers["x-total-count"]);
      this.customers = customer;
      this.totalCustomer = parseInt(headers["x-total-count"]);
      this.totalPage = Math.ceil(this.totalCustomer / limit);
    },
    getCustomersPage(p) {
      if (p == this.page) {
        return "pagination-link is-current";
      } else {
        return "pagination-link";
      }
    }
  }
};
</script>
