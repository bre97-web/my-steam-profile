<template>
    <div v-if="account != null" class="border-b p-6">
        <div class="flex items-stretch justify-between">
            <div class="flex gap-2">
                <div class="rounded-full overflow-clip w-32 h-32">
                    <img :src="account.avatarfull" class="w-full">
                </div>
                <section>
                    <h1 class="text-4xl">{{ account.personaname }}</h1>
                    <p class="text-xs mt-2">Joined {{ moment(account.timecreated, 'X').calendar() }}</p>
                    <p v-if="account.personastate != 1" class="text-xs">{{ moment(account.lastlogoff, 'X').fromNow() }}</p>
                    <p v-else class="text-xs">Online</p>
                    <p v-if="account.gameextrainfo" class="text-xs">Playing {{ account.gameextrainfo }}</p>
                </section>
            </div>
            <div class="flex flex-col justify-between">
                <a :href="account.profileurl" >
                    <md-outlined-button>
                        <md-icon slot="icon">home</md-icon>
                        Your website
                    </md-outlined-button>
                </a>

                <LogoutButton></LogoutButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SteamPlayer, SteamPlayerSummariesResponse, useSteamGet } from '@/hooks/useSteam';
import { getAccount } from '@/scripts/account';
import moment from 'moment';
import { onMounted, ref } from 'vue';
import LogoutButton from './LogoutButton.vue';

const account = ref<SteamPlayer | null>(null)

onMounted(() => {
    useSteamGet('ISteamUser', 'GetPlayerSummaries', {
        version: 'v2',
        param: {
            steamids: getAccount().steamid
        }
    }).then(res => {
        account.value = (res.data as SteamPlayerSummariesResponse).response.players[0]
    })
})

</script>

<style scoped>

</style>