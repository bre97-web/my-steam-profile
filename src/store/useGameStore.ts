import { SteamApp, SteamAppListResponse, SteamGame, SteamOwnedGamesResponse, useSteamGet } from "@/hooks/useSteam";
import { getAccount } from "@/scripts/account";
import { defineStore } from "pinia";

/**
 * useFriendStore简单的保存了用户的好友列表, 包括用户的头像、姓名等信息
 */
const useGameStore = defineStore('steam_game_store', {
    state: () => ({
        games: [] as SteamGame[] | SteamApp[]
    }),
    getters: {
        getGames: (s) => s.games,
    },
    actions: {
        requestAppList() {
            if(this.games.length !== 0) {
                return 
            }

            useSteamGet('ISteamApps', 'GetAppList', {
                version: 'v2'
            }).then(res => {
                (res.data as SteamAppListResponse)
                    .applist
                    .apps
                    .forEach(e => this.games[this.games.length] = e)
            })
        },
        requestPlayerOwnedAppList() {
            if(this.games.length !== 0) {
                return 
            }

            useSteamGet('IPlayerService', 'GetOwnedGames', {
                param: {
                    steamid: getAccount().steamid,
                    include_appinfo: true,
                    include_played_free_games: true,
                    skip_unvetted_apps: true,
                    include_extended_appinfo: true,
                }
            }).then(res => {
                (res.data as SteamOwnedGamesResponse)
                    .response
                    .games
                    .forEach(e => this.games[this.games.length] = e)
                console.log(this.games);
                    
            })
        },
        getGameById(id: string) {
            return this.games.find(e => e.appid === id)
        },
    }
})

export { useGameStore }
