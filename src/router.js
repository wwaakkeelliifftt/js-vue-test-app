import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: () => import('./views/Todos')
        }
    ]
})