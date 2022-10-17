import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/layout'
import Home from '../views/home/home'
import NextTick from '../views/nextTick'
import Ref from '../views/ref'
import Slot from '../views/slot'
import Father from '../views/father'
import Uncle from '../views/uncle'
import Dtcomponents from '../views/dtcomponents'
import Vuex from '../views/vuex'
import Promisedemo from '../views/promisedemo'
import Filter from '../views/filter'
import Computedwatch from '../views/computedwatch'
// import Misinextend from '../views/mixinextend'
const Mixinextend = () => import('../views/mixinextend')//路由懒加载
import Goods from '../views/goods'
import Detail from '../views/detail'
import Photo from '../views/photo'
import Iviewtree from '../views/iviewtree'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: Home,
        name:'Home',
        meta:{
        Keepalive:true //需要被缓存
        }
      },
      {
        path: 'nextTick',
        component: NextTick,
        name:'NextTick'
      },
      {
        path: 'ref',
        component: Ref,
        name:'Ref'
      },
      {
        path: 'slot',
        component: Slot,
        name:'Slot'
      },
      {
        path: 'father',
        component: Father,
        name:'Father'
      },
      {
        path: 'uncle',
        component: Uncle,
        name:'Uncle'
      },
      {
        path: 'dtcomponents',
        component: Dtcomponents,
        name:'Dtcomponents'
      },
      {
        path: 'vuex',
        component: Vuex,
        name:'Vuex'
      },
      {
        path: 'promisedemo',
        component: Promisedemo,
        name:'Promisedemo'
      },
      {
        path: 'filter',
        component: Filter,
        name:'Filter'
      },
      {
        path: 'computed&watch',
        component: Computedwatch,
        name:'Computed&watch'
      },
      {
        path: 'mixinextend',
        component: Mixinextend,
        name:'Mixinextend'
      },
      {
        path: 'goods',
        component: Goods,
        name:'Goods'
      },
      {
        path: 'detail/:iid',
        component: Detail,
        name:'Detail'
      },
      {
        path: 'photo',
        component: Photo,
        name:'Photo'
      },
      {
        path: 'iviewtree',
        component: Iviewtree,
        name:'Iviewtree'
      },
      //vue路由跳转未匹配相应路由避免出现空白页面或者指定404页面
      //*  //全不匹配的情况下，返回404，路由按顺序从上到下，依次匹配。最后一个*能匹配全部，
      {
        path: '*',
        redirect: 'home',
      },
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
