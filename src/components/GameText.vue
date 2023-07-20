<template>
    <li class="relative">
        <md-ripple></md-ripple>
        <div class="flex gap-2 items-start justify-start">
            <div class="w-10 overflow-clip">
                <img :src="`${useSteamMediaUrl(props.game.appid, MediaJpgType.capsult_small)}`" class="" />
            </div>
            <h1>
                {{ props.game.name }}
            </h1>
        </div>
    </li>
</template>

<script setup lang="ts">
import { MediaJpgType, SteamGame, useSteamMediaUrl } from '@/hooks/useSteam';

const props = defineProps<{
    game: SteamGame
}>()
</script>

<style scoped>

</style>