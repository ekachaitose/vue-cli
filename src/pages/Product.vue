<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="box">
          <h3 class="title">
            Product Page
          </h3>
          <hr>
          <input type="text" class="input" v-model="user.username" placeholder="username" style="margin-bottom: 10px">
          <input type="text" class="input" v-model="user.password" placeholder="password" style="margin-bottom: 10px">
          <button class="button" @click="postLogin" style="margin-bottom: 10px">Login</button>
          <pre>{{token}}</pre>
          <hr>
          <p class="control" style="margin-bottom: 10px">
            <button class="button" @click="getProducts">Get Product</button>
          </p>
          <input type="text" name="product_name_en" class="input" placeholder="product name" v-model="product.product_name_en" style="margin-bottom: 10px"
          />
          <input type="text" name="price" class="input" placeholder="price" v-model="product.price" style="margin-bottom: 10px">
          <p class="control" style="margin-bottom: 10px">
            <button class="button" @click="postProducts">Post Product</button>
          </p>

          <div class="columns" :key="index" v-for="(rowColumns,index) in columnsProduct">
            <div class="column" v-for="(rowCol,index) in rowColumns" :key="index">
              <div class="box">
                <p>Product Name: {{ rowCol.product_name_en}} </p>
                <p>Product Price: {{ rowCol.price}} </p>
                <button class="button is-danger" @click='delProducts(rowCol.id)'>Delete</button>
              </div>
            </div>
          </div>


          <p class="control">
            <button class="button">Delete Product</button>
          </p>
        </div>
      </div>

    </section>

  </div>
</template>

<script>
  import axios from '../axios.js'
  import { chunk } from 'lodash'

  export default {
    data() {
      return {
        products: [],
        product: {},
        token: ' ',
        user: {}
      }
    },
    methods: {
      async getProducts() {
        const {
          data
        } = await axios.get('/products?price=1000 ')
        this.products = data
      },
      async postProducts() {
        await axios.post('/products ', this.product)
      },
      async delProducts(id) {
        await axios.delete(`/products/${id}`)
      },
      async postLogin() {
        const {
          data
        } = await axios.post('/users/login ', this.user)
        this.token = data.token
        localStorage.setItem('token ', data.token)
      }
    },
    mounted() {
      const token = localStorage.getItem('token ')
      if (token) {
        this.token = token
      }
    }
    ,
    computed: {
      columnsProduct() {
        return chunk(this.products, 4)
      }
    }
  }
</script>