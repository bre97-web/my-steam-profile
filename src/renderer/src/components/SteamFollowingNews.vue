<template>
    <div class="relative">
        <ul class="relative flex flex-col gap-2">
            <li v-for="e in currentNews" class="relative p-6 overflow-scroll">
                <md-ripple></md-ripple>
                <div class="flex gap-2 items-start justify-start">
                    <div class="flex-none rounded-full overflow-clip w-10 h-10">
                        <img onerror="this.style.display='none'" :src="useSteamMediaUrl(e.appid, MediaJpgType.hero)" alt="2">
                    </div>
                    <section>
                        <p class="font-bold">{{ games.getGameById(e.appid)?.name }}</p>
                        <p class="text-xs">{{ moment(e.date, 'X').format('MM-DD-Y hh:mm A') }}</p>
                    </section>
                </div>
                <div class="ml-12 mt-4 border rounded-md p-2 space-y-2 relative">
                    <md-ripple></md-ripple>
                    <a :href="e.url" class="font-bold hover:underline">{{ e.title }}</a>
                    <p class="text-xs whitespace-nowrap overflow-ellipsis overflow-hidden">{{ e.url }}</p>
                </div>
            </li>

            <md-tonal-button @click="() => currentMaxItemNumber += 50">More</md-tonal-button>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useSteamMediaUrl, MediaJpgType } from '@/hooks/useSteam';
import { useGameStore } from '@/store/useGameStore';
import { useSteamNewsStore } from '@/store/useSteamNewsStore';
import moment from 'moment';
import { computed, onMounted, ref } from 'vue';

const news = useSteamNewsStore()
const games = useGameStore()

const currentMaxItemNumber = ref(100)
const currentNews = computed(() => news.getNews.following.slice(0, currentMaxItemNumber.value))

onMounted(() => {
    games.requestPlayerOwnedAppList()
    news.request()
})
</script>

<style scoped>

</style>