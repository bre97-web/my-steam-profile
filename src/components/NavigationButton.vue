<template>
    <div class="w-14 h-14 rounded-full relative grid place-content-center" @click="router.push(props.routerItem.url)">
        <md-ripple></md-ripple>
        <md-icon class="text-3xl " :class="{'icon-filled': router.currentRoute.value.path === props.routerItem.url}">{{ props.routerItem.icon }}</md-icon>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from '@/hooks/useRouterLink';
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps<{
    routerItem: RouterLink
}>()
</script>

<style scoped>

</style>