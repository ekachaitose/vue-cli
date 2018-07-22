import  Home from "./pages/Home.vue"
import  About  from "./pages/About.vue"
import Product from './pages/Product.vue'
import PageNotFound from './pages/PageNotFound.vue'
import Form from './pages/Form.vue'
import Customer from './pages/Customer.vue'

export default [
  {path:'/',component:Home},
  {path:'/about',component:About},
  {path:'/product/:id',component:Product},
  {path:'/form',component:Form},
  {path:'/customer',component:Customer},
  {path:'*',component:PageNotFound}
]