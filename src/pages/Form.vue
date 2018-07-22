<template>
  <div class="box">
    <h2 class="title">
      Form Page
    </h2>
    <div class="field">
      <label>Name</label>
      <div class="control">
        <input type="text" :class="cssClass('name')"
                v-model="customer.name"
                name="name"
                v-validate="'required|min:5'">
      </div>
      <p class="help is-danger">{{errors.first('name')}}</p>
    </div>
    <div class="field">
      <label>Surname</label>
      <div class="control">
        <input type="text" :class="cssClass('surname')"
                v-model="customer.surname"
                name="surname"
                v-validate="'required|min:5'">
      </div>
      <p class="help is-danger">{{errors.first('surname')}}</p>
    
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return{
      customer:{}
    }
  },
  methods: {
      cssClass(field){
      return `input ${this.errors.has(field) ? 'is-danger': ''}`
      }
  }
  }

</script>

<style scoped>
  p {
    color:blue;
  }
</style>