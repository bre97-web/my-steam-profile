<template>
    <li class="window relative rounded-xl max-w-max overflow-clip">
        <img class="scaleWindow" :src="useSteamMediaUrl(props.game.appid, MediaJpgType.header)" />
        <div class="innerWindow absolute w-full h-full bg-gradient-to-t from-black to-transparent"></div>
        <h1 class="innerWindow absolute w-full text-center invert dark:invert-0">
            {{ moment(props.game.rtime_last_played, 'X').fromNow() }}
        </h1>
        <a
            :href="`steam://rungame/${props.game.appid}/${getAccount().steamid}`"
            class="innerWindow absolute bg-blue-500 w-12 h-12 m-2 rounded-xl flex items-center justify-around"
        >
            <md-icon>launch</md-icon>
        </a>
    </li>
</template>

<script setup lang="ts">
import { MediaJpgType, SteamGame, useSteamMediaUrl } from '@/hooks/useSteam';
import { getAccount } from '@/scripts/account';
import moment from 'moment';

const props = defineProps<{
    game: SteamGame
}>()
</script>

<style scoped></style>