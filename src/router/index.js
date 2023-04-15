import Login from "../components/LoginPage.vue"
import Signup from "../components/SignupPage.vue"
import Dashboard from "../components/DoctorDashboard.vue"
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
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
