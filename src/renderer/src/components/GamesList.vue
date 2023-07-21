<template>
    <template v-if="props.list.length !== null">
        <ul class="hidden md:grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            <GameCard v-for="e in props.list" :key="e.appid" :game="e"></GameCard>
        </ul>
        <ul class="flex flex-col md:hidden">
            <GameText v-for="e in props.list" :key="e.appid" :game="e"></GameText>
        </ul>
    </template>
</template>

<script setup lang="ts">
import { SteamGame } from '@/hooks/useSteam';
import GameCard from './GameCard.vue';
import GameText from './GameText.vue';

const props = defineProps<{
    list: SteamGame[]
}>()

</script>

<style scoped>

</style>