<template>
    <ul v-if="friends !== null">
        <li v-for="e in friends.friendslist.friends" :key="e.steamid">
            <h1>

                {{ e.steamid }}
                {{ e.relationship }}
                {{ e.friend_since }}
            </h1>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useSteamGet, SteamFriendsResponse } from '@/hooks/useSteam';
import { onMounted, ref } from 'vue';


const friends = ref<SteamFriendsResponse | null>(null)

onMounted(() => {
    useSteamGet('/api/ISteamUser', 'GetFriendList', {
        steamid: '76561198298936075'
    }).then(res => {
        console.log(res.data);
        
        friends.value = res.data
    })
})
</script>

<style scoped>

</style>