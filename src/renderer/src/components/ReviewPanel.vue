<template>
    <div class="hidden lg:block w-full max-w-md overflow-y-auto">
        <template v-if="focusGame.getFocusGame != null">
            <div>

                <ReviewGameImg :game="data"></ReviewGameImg>
                
                <div class="p-6 space-y-8">
                    <section>
                        <ReviewGameTitle :name="data?.name || null"></ReviewGameTitle>
                        <ReviewGameDev :developers="data?.developers || []"></ReviewGameDev>
                    </section>

                    <ReviewGameCategories :categories="data?.categories || null"></ReviewGameCategories>
                    
                    <p v-html="data?.about_the_game"></p>
                    <p v-html="data?.reviews"></p>
                    
                    <ReviewGamePlatform :platform="data?.platforms"></ReviewGamePlatform>

                    <ReviewGameRequire :platform="data?.platforms" :requirements="[data?.pc_requirements.minimum, data?.mac_requirements.minimum, data?.linux_requirements.minimum]"></ReviewGameRequire>
                    
                    <p v-html="data?.supported_languages"></p>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { SteamAppDetails, useSteamStoreGet } from '@/hooks/useSteam';
import { useFocusGameStore } from '@/store/useFocusGameStore';
import { ref, watch } from 'vue';
import ReviewGameImg from '@/components/ReviewGameImg.vue'
import ReviewGameTitle from './ReviewGameTitle.vue';
import ReviewGameDev from './ReviewGameDev.vue';
import ReviewGameCategories from './ReviewGameCategories.vue';
import ReviewGamePlatform from './ReviewGamePlatform.vue';
import ReviewGameRequire from './ReviewGameRequire.vue';

const focusGame = useFocusGameStore()

watch(() => focusGame.getFocusGame, () => {
    if (focusGame.getFocusGame != null && focusGame.getFocusGame != undefined) {
        getGameInfo(focusGame.getFocusGame.appid)
    }
})


const data = ref<SteamAppDetails | null>(null)

const getGameInfo = (appid: string) => {
    useSteamStoreGet('appdetails', {
        param: {
            appids: appid
        }
    }).then(res => {
        data.value = res.data[appid].data
    }, error => console.log(error))
}

</script>

<style scoped></style>