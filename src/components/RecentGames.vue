<template>
    <ul v-if="games !== null" class="flex gap-2">
        <li v-for="e in games.response.games" :key="e.appid">
            <Card :game="e"></Card>
        </li>
    </ul>
</template>

<script setup lang="tsx">
import { useSteamGet, SteamRecentGameResponse, SteamGame, useSteamMediaUrl } from '@/hooks/useSteam';
import { onMounted, ref } from 'vue';


const games = ref<SteamRecentGameResponse | null>(null)

const request = async () => {
    games.value = await (await useSteamGet('IPlayerService', 'GetRecentlyPlayedGames', {
        param: {
            steamid: '76561198298936075'
        }
    })).data
}

onMounted(() => {
    request()
})


const Card = ({game}: {game: SteamGame}) => {
    return (
        <div class="rounded-xl border max-w-xs overflow-clip">
            <img src={useSteamMediaUrl(game.appid, 'header.jpg')}></img>
            <h1 class="text-center">{ game.name }</h1>
        </div>
    )
}
</script>

<style scoped>

</style>