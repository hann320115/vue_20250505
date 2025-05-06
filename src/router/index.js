import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue';
import Test from '../pages/Test.vue';
import Products from '../pages/Products.vue';
import UserTable from '../pages/UserTable.vue';
import Vtest from '../pages/Vtest.vue';


const router = createRouter({
  history:createWebHistory(), 
  routes:[
    {
      name:'home',
      path:'/home',
      component:Home,
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      name:'test',
      path:'/test',
      component:Test,
      children:[
        {
          path:'products',
          component:Products,
          props:true 
        },
        {
          path:'userTable',
          component:UserTable,
          props:true 
        },
        {
          path:'vtest',
          component:Vtest,
          props:true 
        }
      ]
    },
  ]
})
export default router