<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="box">
          <h3 class="title">
            Product Page
          </h3>
          <hr>
          <input type="text" class="input" v-model="user.username" placeholder="username">
          <input type="text" class="input" v-model="user.password" placeholder="password">
          <button class="button" @click="postLogin">Login</button>
          <pre>{{token}}</pre>
          <hr>
          <p class="control">
            <button class="button" @click="getProducts">Get Product</button>
          </p>
          <input type="text" name="product_name_en" class="input" placeholder="product name" v-model="product.product_name_en" />
          <input type="text" name="price" class="input" placeholder="price" v-model="product.price">
          <p class="control">
            <button class="button" @click="postProducts">Post Product</button>
          </p>
          <pre>{{products}}</pre>
          <p class="control">
            <button class="button" @click="delProducts">Delete Product</button>
          </p>
        </div>
      </div>

    </section>

  </div>
</template>

<script>
  import axios from '../axios.js'

  export default {
    data() {
      return {
        products: [],
        product: {},
        token: '',
        user: {}
      }
    },
    methods: {
      async getProducts() {
        const { data } = await axios.get('/products?price=500')
        this.products = data
      },
      async postProducts() {
        const res = await axios.post('/products', this.product)
      },
      async delProducts() {
        const res = await axios.delete('/products/103')
      },
      async postLogin() {
        const { data } = await axios.post('/users/login', this.user)
        this.token = data.token
        localStorage.setItem('token', data.token)
      }
    },
    mounted() {
      const token = localStorage.getItem('token')
      if (token) {
        this.token = token
      }
    }
  }
</script>