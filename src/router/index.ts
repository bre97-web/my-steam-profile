import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

import index from '@/views/index.vue'
import apiList from "@/views/apiList.vue"
import friends from '@/views/friends.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: index
    },
    {
        path: '/friends',
        component: friends
    },
    {
        path: '/api-list',
        component: apiList
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkExactActiveClass: 'active'
})

export default router
