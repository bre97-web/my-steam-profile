import axios from "axios"

export type SteamApi = {
    url: string
    steamid: string
    method?: 'get' | 'post'
    version?: 'v1' | 'v2'
    appid?: string
    format?: 'json' | 'xml' | 'vdf'
}

export type SteamParameters = {
    name: string,
    type: string,
    optional: boolean,
    description: string
}

export type SteamMethods = {
    name: string,
    version: string,
    httpmethod: 'GET' | 'POST',
    parameters: SteamParameters[]
}

export type SteamInterface = {
    name: string,
    methods: SteamMethods[],
}

export type SteamApiList = {
    interfaces: SteamInterface[]
}

export type SteamFriend = {
    steamid: string,
    relationship: string,
    friend_since: string
}
export type SteamFriends = {
    friends: SteamFriend[]
}
export type SteamFriendsResponse = {
    friendslist: SteamFriends
}


const KEY = '1A092C6AD7E6B2FA4B2C09DEE5849D33'

export async function useSteamGet({ interfaceName, methodName, steamid, version = 'v1', appid = undefined, format = 'json' }: {
    interfaceName: string,
    methodName: string,
    steamid: string,
    version?: 'v1' | 'v2',
    appid?: string,
    format?: 'json' | 'xml' | 'vdf'
}) {
    return await axios.get(`${interfaceName}/${methodName}/${version}`, {
        params: {
            steamid: steamid,
            key: KEY
        }
    })
}
