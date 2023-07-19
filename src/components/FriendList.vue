<template>
    <ul v-if="friends.getFriendsSummaries.length !== 0" class="flex flex-col">
        <li v-for="e in sortedSummaries" :key="e.steamid" class="relative w-full h-full p-6" :class="{'grayscale': e.personastate !== 1}">
            <md-ripple></md-ripple>
            <div class="flex items-center justify-start gap-2">

                <div class="rounded-full overflow-clip w-10 h-10">
                    <img :src="e.avatarmedium">
                </div>
                
                <section>
                    <h1>{{ e.personaname }}</h1>
                    <p v-if="e.personastate != 1" class="text-xs">{{ moment(e.lastlogoff, 'X').fromNow() }}</p>
                    <section v-else>
                        <p class="text-xs">Online</p>
                        <p v-if="e.gameextrainfo" class="text-xs">Playing {{ e.gameextrainfo }}</p>
                    </section>
                </section>

            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useFriendListStore } from '@/store/useFriendListStore'
import moment from 'moment'

const friends = useFriendListStore()

const sortedSummaries = computed(() => {
    return friends.getFriendsSummaries.sort((x, y) => y.personastate - x.personastate)
})

const init = async () => {
    await friends.request()
}

onMounted(() => {
    init()
    
})
</script>

<style scoped>

</style>