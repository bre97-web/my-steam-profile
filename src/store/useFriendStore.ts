import { SteamFriend, SteamFriendsResponse, useSteamGet } from "@/hooks/useSteam";
import { defineStore } from "pinia";


const useFriendStore = defineStore('friends_store', {
    state: () => ({
        friends: [] as SteamFriend[]
    }),
    getters: {
        getFriendsAll: (s) => s.friends
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
        }
    }
})

export { useFriendStore }
