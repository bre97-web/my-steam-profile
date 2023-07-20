import { SteamAppNew, SteamAppNewsResponse, SteamOwnedGamesResponse, useSteamGet } from "@/hooks/useSteam";
import { getAccount } from "@/scripts/account";
import { defineStore } from "pinia";

/**
 * useFriendStore简单的保存了用户的好友列表, 包括用户的头像、姓名等信息
 */
const useSteamNewsStore = defineStore('steam_news_store', {
    state: () => ({
        news: {
            steam: [] as SteamAppNew[],
            following: [] as SteamAppNew[],
        },
    }),
    getters: {
        getNews: (s) => s.news,
    },
    actions: {
        async request() {
            if(this.news.following.length !== 0) {
                return
            }

            /**
             * Following Game's News
             */
            useSteamGet('IPlayerService', 'GetOwnedGames', {
                param: {
                    steamid: getAccount().steamid,
                    include_appinfo: true,
                    include_played_free_games: true,
                    include_free_sub: false,
                    skip_unvetted_apps: true,
                }
            }).then(res => {
                (res.data as SteamOwnedGamesResponse).response.games.forEach(e => {
                    useSteamGet('ISteamNews', 'GetNewsForApp', {
                        version: 'v2',
                        param: {
                            appid: e.appid
                        }
                    }).then(res => {
                        this.news.following.push(...(res.data as SteamAppNewsResponse).appnews.newsitems)

                        this.sort()
                    })
                })
            })
        },
        sort() {
            this.news.following.sort((x, y) => y.date - x.date)
        }
    }
})

export { useSteamNewsStore }
