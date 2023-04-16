import Login from "../components/LoginPage.vue"
import Signup from "../components/SignupPage.vue"
import Dashboard from "../components/DoctorDashboard.vue"
import Human from "../components/HumanPage.vue"
import FindDoctors from "../components/FindDoctorsPage.vue"
import MedicinesPage from "../components/MedicinesPage.vue"
import DiseasesPage from "../components/DiseasesPage.vue"
import HomePage from "../components/HomePage.vue"
import CheerFul from '../components/CheerFul.vue'
import patientDashboard from '../components/patientDashboard.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Login
    },
    {
        path: '/login',
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
    {
        path: '/diseases',
        name: 'diseases',
        component: DiseasesPage
    },
    {
        path: '/cheer',
        name: 'CheerFul',
        component: CheerFul
    },
    {
        path: '/patientDashboard',
        name: 'patient',
        component: patientDashboard
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
