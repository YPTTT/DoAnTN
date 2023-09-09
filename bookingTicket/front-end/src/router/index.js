import VueRouter from 'vue-router'
import Vue from 'vue'

import homePage from '../components/homePage'
import showtimesPage from '../components/showtimesPage'
import promotionPage from '../components/promotionPage'
import adsPage from '../components/adsPage'
import aboutPage from '../components/aboutPage'
import loginPage from '../components/loginPage'
import adminHome from '../components/admin/adminHome'
import filmPage from '../components/admin/filmPage'

Vue.use(VueRouter)
const routes = [
    {path: '/', name: 'home', component: homePage},
    {path: '/showtimesPage', name: 'showtimesPage', component: showtimesPage},
    {path: '/promotionPage', component: promotionPage},
    {path: '/adsPage', component: adsPage},
    {path: '/aboutPage', component: aboutPage},
    {path: '/loginPage', component: loginPage},
    {path: '/loginSuccess', redirect: '/'},
    {path: '/adminHome', component: adminHome},
    {path: '/filmPage', component: filmPage},
]

const router = new VueRouter({
    routes
})

export default router