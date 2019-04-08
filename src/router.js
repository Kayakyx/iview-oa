import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [

/*
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ './views/About.vue')
    }
    */

      {
          path: '/',
          redirect: '/main'
      },
      {
          path: '/main',
          // name: 'Main',
          component: Main,
          /*
                  ////这样写 访问home、或其他子页 的时候  就只这种形式 http://localhost:8080/#/home
                  children: [
                      {
                          path: '/',
                          // component: () => import('./components/Order.vue')
                          redirect: '/home'
                      },
                      {
                          path: '/home',
                          name: 'Home',
                          component: () => import('./views/Home.vue')
                      },
                      {
                          path: '/order',
                          name: 'Order',
                          component: () => import('./components/Order.vue')
                      },
                      {
                          path: '/mine',
                          name: 'Mine',
                          component: () => import('./components/Mine.vue')
                      }
                  ]
           */
          //这样写 访问home、或其他子页 的时候  就只这种形式 http://localhost:8080/#/main/home
          children: [
              {
                  path: '/',
                  // component: () => import('./components/Order.vue')
                  redirect: '/main/home'
              },
              {
                  path: 'home',
                  name: 'Home',
                  component: () => import('./templates/Home.vue')
              },
              {
                  path: 'order',
                  name: 'Order',
                  component: () => import('./templates/Order.vue')
              },
              {
                  path: 'mine',
                  name: 'Mine',
                  component: () => import('./templates/Mine.vue')
              }
          ]
      },

      //错误路由
      {
        path: '*',
        name: 'Error',
        component: () => import('./views/Error.vue')
      }


  ]
})
