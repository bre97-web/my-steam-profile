<template>
    <div v-if="props.game != null">
        <div class=" w-full h-full overflow-clip">
            <div class="relative flex" :style="style">
                <img :src="game?.header_image" class="w-full h-full" />
                <img v-for="e in game?.screenshots" :src="e.path_full" class="relative" />
            </div>
        </div>
        <div class="controller p-2">
            <img :src="game?.header_image" class="rounded-md overflow-clip hover:ring" @click="setCurrentIndex(-1)" />
            <img
                v-for="e in game?.screenshots"
                :key="e.id"
                :src="e.path_full"
                class="rounded-md overflow-clip hover:ring"
                @click="setCurrentIndex(e.id)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { SteamAppDetails } from '@/hooks/useSteam';
import { computed, ref } from 'vue';

const currentIndex = ref(-1)
const setCurrentIndex = (index: number) => {
    currentIndex.value = index
}

const style = computed(() => {
    if(currentIndex.value === -1) {
        return {
            left: '0%'
        }
    }
    return {
        left: (currentIndex.value + 1) * -100 + '%'
    }
})

const props = defineProps<{
    game: SteamAppDetails | null
}>()
</script>

<style scoped>
* {
    transition: all 0.15s;
}
.controller {
    @apply overflow-scroll flex h-16 gap-1;
}
</style>