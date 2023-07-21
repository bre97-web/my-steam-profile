import { SteamFriend, SteamFriendsResponse, SteamPlayer, SteamPlayerSummariesResponse, useSteamGet } from "@/hooks/useSteam";
import { getAccount } from "@/utils/account";
import { defineStore } from "pinia";

/**
 * useFriendStore简单的保存了用户的好友列表, 包括用户的头像、姓名等信息
 */
const useFriendListStore = defineStore('friends_list_store', {
    state: () => ({
        friends: [] as SteamFriend[],
        summaries: [] as SteamPlayer[]
    }),
    getters: {
        getFriendsAll: (s) => s.friends,
        getFriendsSummaries: (s) => s.summaries
    },
    actions: {
        async request() {
            if(this.friends.length !== 0 || this.summaries.length !== 0) {
                return
            }
            await useSteamGet('ISteamUser', 'GetFriendList', {
                param: {
                    steamid: getAccount().steamid
                }
            }).then(res => {
                this.friends = (res.data as SteamFriendsResponse).friendslist.friends
            })

            await useSteamGet('ISteamUser', 'GetPlayerSummaries', {
                version: 'v2',
                param: {
                    steamids: this.friends.map(e => e.steamid).toString()
                }
            }).then(res => {
                this.summaries = (res.data as SteamPlayerSummariesResponse).response.players
                this.sort()
            })
        },
        async refresh() {
            await useSteamGet('ISteamUser', 'GetFriendList', {
                param: {
                    steamid: getAccount().steamid
                }
            }).then(res => {
                this.friends = (res.data as SteamFriendsResponse).friendslist.friends
            })

            await useSteamGet('ISteamUser', 'GetPlayerSummaries', {
                version: 'v2',
                param: {
                    steamids: this.friends.map(e => e.steamid).toString()
                }
            }).then(res => {
                this.summaries = (res.data as SteamPlayerSummariesResponse).response.players
                this.sort()
            })
        },
        sort() {
            this.friends.sort()
            this.summaries.sort((x, y) => y.personastate - x.personastate)
            this.summaries.sort((x, y) => parseInt(y.steamid) - parseInt(x.steamid))
        }
    }
})

export { useFriendListStore }
