<template>
  <div class="box">
     <nav class="nav">
       <div class="nav-menu">
         <div class="columns">
        <div class="column is-1">
          <router-link to="/">Home</router-link>
        </div>
         <div class="column is-1">
            <router-link to="/about">About</router-link> 
        </div>
         <div class="column is-1">
           <router-link to="/form">Form</router-link> 
        </div>
         <div class="column is-1">
           <router-link to="/customer">Customer</router-link> 
        </div>
         <div class="column is-1">
           <router-link to="/pagination">Pagination</router-link>
        </div>
         <div class="column is-1">
           <router-link to="/search">Search</router-link>
        </div>
        <div class="column is-1">
           <router-link to="/column">Column</router-link>
        </div>
        <div class="column is-1">
           <router-link to="/nested">Nested</router-link>
        </div>
       </div>
       </div>
   </nav>
  </div>
</template>
<script>
export default {}
</script>
