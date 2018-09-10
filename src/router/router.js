import VueRouter from "vue-router"; //导入vue-router包
import Vue from "vue";//导入vue
import Home from "../components/Home";
import Pins from "../components/Pins";
import Events from "../components/Events";
import Showlists from '../components/Showlists'
import Errors from '../components/Errors'
import User from'../components/User'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '/',  component: Showlists },
      { path: 'welcome/:tab', name: 'welcome', component: Showlists },
      // {path:'*',redirect:'/404'}
    ]
  },
  {path:'/a',redirect:'/pins'},
  { path: '/pins',name:'pins', component: Pins },
  { path: '/events', component: Events },
  {path:'*',redirect:'/404'},
  { path: '/404', component: Errors },
  { path: '/user', component: User },




]
const router = new VueRouter({
    mode: 'history',//去掉模拟的/#/
    routes
})
export default router