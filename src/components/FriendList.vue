<template>
    <ul v-if="friends.getFriendsSummaries.length !== 0" class="flex flex-col">
        <li v-for="e in friends.getFriendsSummaries" :key="e.steamid" class="w-full h-full p-6 hover:bg-[var(--md-sys-color-surface-container-low)]">
            <div class="flex items-center justify-start gap-2">

                <div class="rounded-full overflow-clip w-10 h-10">
                    <img :src="e.avatarmedium">
                </div>
                
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