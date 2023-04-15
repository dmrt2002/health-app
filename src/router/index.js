import Login from "../components/LoginPage.vue"
import Signup from "../components/SignupPage.vue"
import Dashboard from "../components/DoctorDashboard.vue"
import Human from "../components/HumanPage.vue"
import FindDoctors from "../components/FindDoctorsPage.vue"
import HomePage from "../components/HomePage.vue"
import  MedicinesPage from "../components/MedicinesPage.vue"
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
    {
        path: '/human',
        name: 'human',
        component: Human
    },
    {
        path: '/finddoctors',
        name: 'finddoctor',
        component: FindDoctors
    },
    {
        path: '/home',
        name: 'home',
        component: HomePage
    },
    {
        path: '/medicines',
        name: 'medicines',
        component: MedicinesPage
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
