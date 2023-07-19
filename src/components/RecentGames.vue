<template>
    <ul v-if="recentGames.getRecentGames !== null" class="flex gap-2 ">
        <li v-for="e in recentGames.getRecentGames" :key="e.appid">
            <!-- <Card :game="e"></Card> -->
            <div class="window relative rounded-xl max-w-xs overflow-clip">
                <img class="scaleWindow" :src="useSteamMediaUrl(e.appid, MediaJpgType.header)" />
                <h1 class="innerWindow absolute w-full h-full bg-gradient-to-t from-black to-transparent"></h1>
                <h1 class="innerWindow absolute w-full text-center invert dark:invert-0">{{  }}</h1>
            </div>
        </li>
    </ul>
</template>

<script setup lang="tsx">
import { SteamGame, useSteamMediaUrl, MediaJpgType } from '@/hooks/useSteam';
import { onMounted } from 'vue';
import { useGameStore } from '@/store/useGameStore'
import moment from 'moment';

const recentGames = useGameStore()

onMounted(() => {
    recentGames.requestPlayerRecentAppList()
})

const Card = ({game}: {game: SteamGame}) => {
    return (
        <div class="window relative rounded-xl max-w-xs overflow-clip">
            <img class="scaleWindow" src={useSteamMediaUrl(game.appid, MediaJpgType.header)}></img>
            <h1 class="innerWindow absolute w-full h-full bg-gradient-to-t from-black to-transparent"></h1>
            <h1 class="innerWindow absolute w-full text-center invert dark:invert-0">{ moment(game.playtime_windows_forever, 'X').hours() }</h1>
        </div>
    )
}
</script>

<style scoped>

</style>