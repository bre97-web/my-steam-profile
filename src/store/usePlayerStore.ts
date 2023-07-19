import { SteamPlayer, SteamPlayerSummariesResponse, useSteamGet } from "@/hooks/useSteam";
import { defineStore } from "pinia";


const usePlayerStore = defineStore('friends_store', {
    state: () => ({
        players: [] as SteamPlayer[]
    }),
    getters: {
        getPlayersAll: (s) => s.players
    },
    actions: {
        async request(steamids: string[]) {
            await useSteamGet('ISteamUser', 'GetPlayerSummaries', {
                param: {
                    steamids: steamids
                }
            }).then(res => {
                console.log(res.data);
                
                this.players = (res.data as SteamPlayerSummariesResponse).response
            })
        }
    }
})

export { usePlayerStore }
