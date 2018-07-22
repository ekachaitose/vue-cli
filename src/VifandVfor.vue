<template>
  <div>
    <section class="section">
      <div class="container">
        <h1>Methods</h1>
        <button class="button" @click="hello(50)">Hello</button>
        <hr style="background-color:black">
        <h1>Computed</h1>
        <input type="number" v-model="amount">
        <p>{{amountIncludeVat}}</p>
        <p>{{fullName}}</p>
        <hr style="background-color:black">
        <h1>V-if</h1>
        <p>{{displayText()}}</p>
        <input type="text" v-model="name">
        <input type="checkbox" v-model="single">
        <input type="radio" name="gender" value="M" v-model="gender">Male
        <input type="radio" name="gender" value="F" v-model="gender">Female
        <select v-model="income">
          <option value="1">10,000</option>
          <option value="2">20,000</option>
          <option value="3">30,000</option>
        </select>
         <hr style="background-color:black">
        <h1>V-for</h1>
        <p :key="index" v-for="(n,index) in numbers">{{n}}</p>
      </div>

    </section>

  </div>
</template>

<script>
  import 'bulma/css/bulma.min.css'
  export default {
    data() {
      return {
        msg: 'hello world',
        amount: 100,
        name: 'Deve',
        surname: 'Sawaki',
        active: true,
        counter: 1,
        single: true,
        gender: 'M',
        income: 1,
        numbers: [10,20,30,40]
      }
    },
    methods: {
      hello(number) {
        console.log('hello', number)
      },
      displayText() {
        switch (this.counter) {
          case this.counter < 10:
            return 'Counter is less than 10'
            break;

          default:
            return 'Counter is grater than 10'
            break;
        }
      }
    },
    computed: {
      amountIncludeVat() {
        return this.amount * 1.07
      },
      fullName() {
        return `${this.name} ${this.surname}`
      }
    }
  }
</script>