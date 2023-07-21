<template>
    <template v-if="games.getOwnedGames.length !== null">
        <GamesList :list="games.getOwnedGames"></GamesList>
    </template>
</template>

<script setup lang="ts">
import { useGameStore } from '@/store/useGameStore';
import { onMounted } from 'vue';
import GamesList from './GamesList.vue';

const games = useGameStore()

onMounted(() => {
    games.requestPlayerOwnedAppList()
})
</script>

<style scoped>

</style>