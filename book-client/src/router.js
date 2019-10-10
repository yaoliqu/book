import Vue from 'vue'
import Router from 'vue-router'



import MyContent from "@/views/content.vue"
import Search from "@/views/search.vue"
import Update from '@/views/update.vue'
import Join from '@/views/joinbook.vue'
import Edit from '@/views/edit.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/content"
    },
   {
    path: '/content',
    name: 'content',
     component: MyContent
   },
   {
    path: '/search',
    name: 'search',
     component: Search
   },
   {
    path: '/update',
    name: 'update',
    component: Update
   },
   {
    path: '/edit/:id',
    name: 'edit',
    component: Edit
   },
   {
    path: '/joinbook',
    name: 'joinbook',
    component: Join
   }
    // route level code-splitting
   //   // this generates a separate chunk (about.[hash].js) for this route
   //   // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
   
    
  ]
})
