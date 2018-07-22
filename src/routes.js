import  Home from "./pages/Home.vue"
import  About  from "./pages/About.vue"
import Product from './pages/Product.vue'
import PageNotFound from './pages/PageNotFound.vue'

export default [
  {path:'/',component:Home},
  {path:'/about',component:About},
  {path:'/product/:id',component:Product},
  {path:'*',component:PageNotFound}
]