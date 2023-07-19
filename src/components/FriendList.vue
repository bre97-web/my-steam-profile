<template>
    <ul v-if="friends.getFriendsAll.length !== 0">
        <li v-for="e in friends.getFriendsAll" :key="e.steamid">
            <h1>
                {{ e.steamid }}
                {{ e.relationship }}
                {{ e.friend_since }}
            </h1>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useFriendStore } from '@/store/useFriendStore'
import { usePlayerStore } from '@/store/usePlayerStore'

const friends = useFriendStore()
const players = usePlayerStore()

const init = async () => {
    await friends.request()

    let ids = friends.getFriendsAll.map(e => e.steamid)
    
    await players.request(ids)
    
    // console.log(players.getPlayersAll);
}

onMounted(() => {

    init()
    
})
</script>

<style scoped>

</style>