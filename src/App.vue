<template>
  <div>
    <section class="section">
      <div class="container">
        <navbar/>
        
        <router-view></router-view>
      </div>

    </section>

  </div>
</template>

<script>
  import 'bulma/css/bulma.min.css'
  import  Navbar from './components/Navbar.vue'
  export default {
    data() {
      return {
        productIds: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      generateTo(productId){
        return `/product/${productId}`
      }
    },
    computed: {
    },
    components: {
      'navbar': Navbar
    }
  }
</script>