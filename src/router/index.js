import Login from "../components/LoginPage.vue"
import Signup from "../components/SignupPage.vue"
import HomePage from "../components/HomePage"
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    {
        path: '/land',
        name: 'HomePage',
        component: HomePage
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
