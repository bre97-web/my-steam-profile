<template>
    <template v-if="games.getRecentGames !== null">
        <GamesList :list="games.getRecentGames"></GamesList>
    </template>
</template>

<script setup lang="tsx">
import { onMounted } from 'vue';
import { useGameStore } from '@/store/useGameStore'
import GamesList from './GamesList.vue';

const games = useGameStore()

onMounted(() => {
    games.requestPlayerRecentAppList()
})
</script>

<style scoped>

</style>