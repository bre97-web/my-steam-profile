<template>
    <li class="window relative rounded-xl max-w-max overflow-clip" @click="focusGame.setFocusGame(props.game)">
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
import { getAccount } from '@/utils/account';
import { useFocusGameStore } from '@/store/useFocusGameStore';
import moment from 'moment';

const props = defineProps<{
    game: SteamGame,
}>()

const focusGame = useFocusGameStore()
</script>

<style scoped></style>@/utils/account