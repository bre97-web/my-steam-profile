<template>
    <ul v-if="games.getOwnedGames.length !== null" class="flex gap-2 flex-wrap">
        <li v-for="e in games.getOwnedGames" :key="e.appid">
            <div class="window relative rounded-xl max-w-xs overflow-clip">
                <img class="scaleWindow" :src="useSteamMediaUrl(e.appid, MediaJpgType.header)" />
                <div class="innerWindow absolute w-full h-full bg-gradient-to-t from-black to-transparent"></div>
                <h1 class="innerWindow absolute w-full text-center invert dark:invert-0">{{ moment(e.rtime_last_played, 'X').fromNow() }}</h1>
                <a :href="`steam://rungame/${e.appid}/${getAccount().steamid}`" class="innerWindow absolute bg-blue-500 w-16 h-16 m-2 rounded-xl flex items-center justify-around">
                    <md-icon>launch</md-icon>
                </a>
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useSteamMediaUrl, MediaJpgType } from '@/hooks/useSteam';
import { getAccount } from '@/scripts/account';
import { useGameStore } from '@/store/useGameStore';
import moment from 'moment';
import { onMounted } from 'vue';

const games = useGameStore()

onMounted(() => {
    games.requestPlayerOwnedAppList()
})
</script>

<style scoped>

</style>