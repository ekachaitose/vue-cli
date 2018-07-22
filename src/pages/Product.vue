<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="box">
          <h3 class="title">
            Product Page
          </h3>
          <p>ProductId : {{productId}}</p>
        </div>
      </div>

    </section>

  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {
      productId(){
        return this.$route.params.id
      }
    }
  }
</script>