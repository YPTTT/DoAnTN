import VueRouter from 'vue-router'
import Vue from 'vue'

import homePage from '../components/homePage'
import showtimesPage from '../components/showtimesPage'
import promotionPage from '../components/promotionPage'
import adsPage from '../components/adsPage'
import aboutPage from '../components/aboutPage'
import loginPage from '../components/loginPage'
import listCinema from '../components/listCinema'
import detailFilm from '../components/detailFilm'
import detailCinema from '../components/detailCinema'
import forgotPassword from '../components/forgotPassword'
import resetPassword from '../components/resetPassword'
import manageUser from '../components/manageUser'
import bookingPage from '../components/bookingPage'
import returnVnpay from '../components/returnVnpay'

Vue.use(VueRouter)
const routes = [
    {path: '/', name: 'home', component: homePage},
    {path: '/showtimesPage', name: 'showtimesPage', component: showtimesPage},
    {path: '/promotionPage', component: promotionPage},
    {path: '/adsPage', component: adsPage},
    {path: '/aboutPage', component: aboutPage},
    {path: '/loginPage', component: loginPage},
    {path: '/loginSuccess', redirect: '/'},
    {path: '/listCinema', component: listCinema},
    {path: '/detailFilm/:id', name: 'detail-film', component: detailFilm},
    {path: '/detailCinema/:id', name: 'detail-cinema', component: detailCinema},
    {path: '/forgotPassword', component: forgotPassword},
    {path: '/resetPassword', component: resetPassword},
    {path: '/manageUser', component: manageUser},
    {path: '/bookingPage/:id', name: 'booking-page', component: bookingPage},
    {path: '/return-vnpay', component: returnVnpay}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router