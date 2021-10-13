import Vue from "vue"
import VueRouter from "vue-router"
import Login from "./components/Login.vue"
import Index from './components/Index.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Login,
        props: true
    },
    {
        path:'/index/:val',
        name:'index',
        component: Index,
        props: true
    }
]

const router = new VueRouter({
    mode:'history',
    // @ts-ignore
    routes:routes
})

export default router