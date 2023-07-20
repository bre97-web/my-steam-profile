import { SteamApp, SteamAppListResponse, SteamGame, SteamOwnedGamesResponse, useSteamGet } from "@/hooks/useSteam";
import { getAccount } from "@/scripts/account";
import { defineStore } from "pinia";

const useGameStore = defineStore('steam_game_store', {
    state: () => ({
        games: {
            allApps: [] as SteamApp[],
            owned: [] as SteamGame[],
            recent: [] as SteamGame[],
        },
    }),
    getters: {
        getGames: (s) => s.games,
        getRecentGames: (s) => s.games.recent,
        getOwnedGames: (s) => s.games.owned,
    },
    actions: {
        requestAppList() {
            if(this.games.allApps.length !== 0) {
                return 
            }
            this.games.allApps = []
            useSteamGet('ISteamApps', 'GetAppList', {
                version: 'v2'
            }).then(res => {
                (res.data as SteamAppListResponse)
                    .applist
                    .apps
                    .forEach(e => this.games.allApps[this.games.allApps.length] = e)
            })
        },
        requestPlayerOwnedAppList() {
            if(this.games.owned.length !== 0) {
                return 
            }
            this.games.owned = []
            useSteamGet('IPlayerService', 'GetOwnedGames', {
                param: {
                    steamid: getAccount().steamid,
                    include_appinfo: true,
                    include_played_free_games: true,
                    include_free_sub: false,
                    skip_unvetted_apps: false,
                    include_extended_appinfo: true,
                }
            }).then(res => {
                (res.data as SteamOwnedGamesResponse)
                    .response
                    .games
                    .forEach(e => this.games.owned[this.games.owned.length] = e)
            })
        },
        requestPlayerRecentAppList() {
            if(this.games.recent.length !== 0) {
                return
            }
            this.games.recent = []
            useSteamGet('IPlayerService', 'GetRecentlyPlayedGames', {
                param: {
                    steamid: getAccount().steamid
                }
            }).then(res => {
                this.games.recent.push(...(res.data as SteamOwnedGamesResponse).response.games)
            })
        },
        getGameById(id: string) {
            return this.games.owned.find(e => e.appid === id)
        },
    }
})

export { useGameStore }
