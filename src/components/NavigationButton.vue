<template>
    <div class="w-14 xl:w-full h-14 rounded-full relative grid place-content-center xl:flex xl:items-center xl:justify-start xl:gap-2 xl:p-4" @click="router.push(props.routerItem.url)">
        <md-ripple></md-ripple>
        <md-icon class="text-3xl" :class="{'icon-filled': isCurrentUrl}">{{ props.routerItem.icon }}</md-icon>
        <p class="hidden xl:block text-xl whitespace-nowrap select-none" :class="isCurrentUrl ? 'font-bold': 'font-normal'">{{ routerItem.label }}</p>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from '@/hooks/useRouterLink';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps<{
    routerItem: RouterLink
}>()

const isCurrentUrl = computed(() => router.currentRoute.value.path === props.routerItem.url)
</script>

<style scoped>

</style>