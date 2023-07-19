<template>
    <div class="px-4 py-2">
        <div class="flex md:flex-col justify-center md:justify-between items-center h-full">
            <div class="flex md:flex-col w-full items-center justify-around md:justify-between gap-2">
                <NavigationButton v-for="e in routerList" :router-item="e" :key="e.url"></NavigationButton>
            </div>
            <div class="hidden md:block">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavigationButton from '@/components/NavigationButton.vue';
import { RouterLink } from '@/hooks/useRouterLink';

const routerList: RouterLink[] = [
    {
        url: '/',
        label: 'Home',
        icon: 'home'
    },
    {
        url: '/friends',
        label: 'Friends',
        icon: 'group'
    },
    {
        url: '/settings',
        label: 'Settings',
        icon: 'settings'
    },
    {
        url: '/api-list',
        label: 'API List',
        icon: 'list'
    },
]
</script>

<style scoped>
.active {
    @apply font-black;
}
</style>