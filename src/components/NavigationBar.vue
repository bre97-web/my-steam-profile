<template>
    <div class="px-4 py-2">
        <div class="w-10 flex flex-col justify-between items-center h-full">
            <div class="flex flex-col items-center justify-between gap-2">
                <NavigationButton v-for="e in routerList" :router-item="e" :key="e.url"></NavigationButton>
            </div>
            <div>
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
        url: '/api-list',
        label: 'Home',
        icon: 'list'
    },
]
</script>

<style scoped>
.active {
    @apply font-black;
}
</style>