import  Home from "./pages/Home.vue"
import  About  from "./pages/About.vue"
import Product from './pages/Product.vue'
import Form from './pages/Form.vue'
import Customer from './pages/Customer.vue'
import CustomerProfile from './pages/CustomerProfile.vue'
import Pagination from './pages/Pagination.vue'
import PageNotFound from './pages/PageNotFound.vue'

export default [
  {path:'/',component:Home},
  {path:'/about',component:About},
  {path:'/product/:id',component:Product},
  {path:'/form',component:Form},
  {path:'/customer',component:Customer},
  {path: '/customer/:id',component:CustomerProfile},
  {path: '/pagination',component:Pagination},
  {path:'*',component:PageNotFound}
]