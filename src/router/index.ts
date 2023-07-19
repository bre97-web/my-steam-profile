import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

import index from '@/views/index.vue'
import apiList from "@/views/apiList.vue"
import friends from '@/views/friends.vue'
import settings from '@/views/settings.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: index
    },
    {
        path: '/friends',
        name: 'Friends',
        component: friends
    },
    {
        path: '/settings',
        name: 'Settings',
        component: settings
    },
    {
        path: '/api-list',
        name: 'API List',
        component: apiList
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkExactActiveClass: 'active'
})

export default router
