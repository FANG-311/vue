import VueRouter from "vue-router";
import Vue from "vue";
import MainIn from '../components/MainIn.vue'
import Login from '../components/Login.vue'
import Manage from '../components/Manage.vue'
import Create from '../components/Create.vue'
import store from "@/store";
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {   path: '/main',
            component:MainIn,
            meta:{
                requireAuth:true
            }
            //通过children属性，嵌套子路由,children:[]
        },
        {path: '/',redirect:'/login'},
        {   path:'/login',
            component:Login,
            meta:{
                requireAuth:false
            }
        },
        {
            path:'/management',
            component:Manage,
            meta:{
              requireAuth:true
            }
        },
        {
            path:'/create',
            component:Create,
            meta:{
              requireAuth:true
            }
        }
    ]
})
router.beforeEach((to, from, next) => { 
    const isLogined = store.state.isLogined;
    if (to.meta.requireAuth&&!isLogined) { // 判断该路由是否需要登录权限
      if (store.state.token) { // 通过vuex state获取当前的token是否存在    注意token有时效性
        next();//存在就说明登录了，放行
      }
      else {
        next({  //不存在，回退到一个页面，例如登录页面
          path: '/login',
          query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
        
      }
        
    }
    else {
      next();
    }
})

export default router