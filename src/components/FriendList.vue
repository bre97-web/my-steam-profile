<template>
    <ul v-if="friends.getFriendsSummaries.length !== 0" class="flex flex-col gap-4">
        <li v-for="e in friends.getFriendsSummaries" :key="e.steamid">
            <div class="flex items-center justify-start gap-2">

                <PlayerAvatar :avatar="e.avatar"></PlayerAvatar>
                
                <section>
                    <h1>{{ e.personaname }}</h1>
                    <p class="text-xs">{{ moment(e.lastlogoff, 'X').fromNow() }}</p>
                </section>
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useFriendListStore } from '@/store/useFriendListStore'
import PlayerAvatar from './PlayerAvatar.vue';
import moment from 'moment'

const friends = useFriendListStore()

const init = async () => {
    await friends.request()
}

onMounted(() => {
    init()
    
})
</script>

<style scoped>

</style>