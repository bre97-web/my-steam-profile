<template>
    <div v-if="games !== null">
        <li v-for="e in games.response.games" :key="e.appid">
            <h1>

                {{ e.appid }}
                {{ e.name }}
                {{ e.img_icon_url }}
                {{ e.playtime_2weeks }}
            </h1>
        </li>
    </div>
</template>

<script setup lang="ts">
import { useSteamGet, SteamRecentGameResponse } from '@/hooks/useSteam';
import { onMounted, ref } from 'vue';


const games = ref<SteamRecentGameResponse | null>(null)

onMounted(() => {
    useSteamGet('/api/IPlayerService', 'GetRecentlyPlayedGames', {
        steamid: '76561198298936075'
    }).then(res => {
        console.log(res.data);
        
        games.value = res.data
    })
})
</script>

<style scoped>

</style>