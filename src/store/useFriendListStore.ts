import { SteamFriend, SteamFriendsResponse, SteamPlayer, SteamPlayerSummariesResponse, useSteamGet } from "@/hooks/useSteam";
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
            await useSteamGet('ISteamUser', 'GetFriendList', {
                param: {
                    steamid: '76561198298936075'
                }
            }).then(res => {
                this.friends = (res.data as SteamFriendsResponse).friendslist.friends
            })

            let ids = this.friends.map(e => e.steamid)
            console.log(ids);
            
            await useSteamGet('ISteamUser', 'GetPlayerSummaries', {
                version: 'v2',
                param: {
                    steamids: ids.toString()
                }
            }).then(res => {
                this.summaries = (res.data as SteamPlayerSummariesResponse).response.players
            })
            console.log(this.summaries);
        }
    }
})

export { useFriendListStore }
