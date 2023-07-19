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
export type SteamGame = {
    appid: string
    img_icon_url: string
    name: string
    playtime_2weeks: number
    playtime_forever: number
    playtime_linux_forever: number
    playtime_mac_forever: number
    playtime_windows_forever: number
}
export type SteamRecentGames = {
    games: SteamGame[],
    total_count: number
}
export type SteamRecentGameResponse = {
    response: SteamRecentGames
}

export type SteamPlayer = {
    avatar: string,
    avatarmedium: string,
    avatarfull: string,
    avatarhash: string,
    communityvisibilitystate: number,
    lastlogoff: number,
    loccountrycode: number,
    locstatecode: string,
    loccityid: number,
    personaname: string,
    personastate: number,
    personastateflags: number,
    profileurl: string,
    profilestate: number,
    primaryclanid: string,
    realname: string,
    steamid: string,
    timecreated: number,
}
export type SteamPlayers = {
    players: SteamPlayer[]
}
export type SteamPlayerSummariesResponse = {
    response: SteamPlayers
}

const KEY = '1A092C6AD7E6B2FA4B2C09DEE5849D33'

export async function useSteamGet(interfaceName: string, methodName: string, { version = 'v1', appid = undefined, param = {} }: {
    version?: 'v1' | 'v2',
    appid?: string,
    param?: any
}) {
    return await axios.get(`/api/${interfaceName}/${methodName}/${version}`, {
        params: {
            ...param,
            key: KEY
        }
    })
}

export async function useSteamMediaGet(appid: string) {
    return await axios.get(`https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`)
}

export const useSteamMediaUrl = (appid: string, filename: string) => `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/${filename}`