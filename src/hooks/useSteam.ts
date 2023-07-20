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

export type SteamApp = {
    appid: string
    name: string
}
export type SteamAppList = {
    apps: SteamApp[]
}
export type SteamAppListResponse = {
    applist: SteamAppList
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
    playtime_disconnected: number
    rtime_last_played: number
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
    gameid: string,
    gameextrainfo: string
}
export type SteamPlayers = {
    players: SteamPlayer[]
}
export type SteamPlayerSummariesResponse = {
    response: SteamPlayers
}

export type SteamOwnedGames = {
    game_count: number,
    games: SteamGame[]
}
export type SteamOwnedGamesResponse = {
    response: SteamOwnedGames
}

export type SteamAppNew = {
    gid: string
    title: string
    url: string
    is_external_url: boolean
    author: string
    contents: string
    feedlabel: string
    date: number
    feedname: string
    feed_type: number
    appid: string
    img_icon_url?: string
    name?: string
    playtime_2weeks?: number
    playtime_forever?: number
    playtime_linux_forever?: number
    playtime_mac_forever?: number
    playtime_windows_forever?: number
    playtime_disconnected?: number
    rtime_last_played?: number
}
export type SteamAppNews = {
    appid: string
    newsitems: SteamAppNew[]
    count: number
}
export type SteamAppNewsResponse = {
    appnews: SteamAppNews
}

export type SteamAppDetails = {
    type: string
    name: string
    steam_appid: string
    required_age: string
    is_free: true
    dlc: string
    detailed_description: string
    about_the_game: string
    short_description: string
    supported_languages: string
    reviews: string
    header_image: string
    capsule_image: string
    capsule_imagev5: string
    website: string
    pc_requirements: {
        minimum: string
    }
    mac_requirements: {
        minimum: string
    }
    linux_requirements: {
        minimum: string
    }
    developers: string[]
    publishers: string[]
    packages: number[]
    package_groups: [
        {
            name: string
            title: string
            description: string
            selection_text: string
            save_text: string
            display_type: number
            is_recurring_subscription: string
            subs: [
                {
                    packageid: number
                    percent_savings_text: string
                    percent_savings: number
                    option_text: string
                    option_description: string
                    can_get_free_license: string
                    is_free_license: true
                    price_in_cents_with_discount: number
                }
            ]
        }
    ]
    platforms: {
        windows: boolean
        mac: boolean
        linux: boolean
    }
    metacritic: {
        score: number
        url: string
    }
    categories: [
        {
            id: number
            description: string
        }
    ]
    genres: [
        {
            id: string
            description: string
        }
    ]
    screenshots: [
        {
            id: number
            path_thumbnail: string
            path_full: string
        }
    ]
    movies: [
        {
            id: number
            name: string
            thumbnail: string
            webm: {
                480: string
                max: string
            }
            mp4: {
                480: string
                max: string
            }
            highlight: true
        }
    ]
    recommendations: {
        total: number
    }
    release_date: {
        coming_soon: false
        date: string
    }
    support_info: {
        url: string
        email: string
    }
    background: string
    background_raw: string
    content_descriptors: {
        ids: []
        notes: string | null
    }
}


const KEY = '1A092C6AD7E6B2FA4B2C09DEE5849D33'

const apiService = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : 'https://api.steampowered.com',
    timeout: 4500,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': true,
    },
    responseType: 'json',
})

export async function useSteamGet(interfaceName: string, methodName: string, { version = 'v1', param = {} }: {
    version?: 'v1' | 'v2',
    param?: any
} = {}) {
    return await apiService.get(`/${interfaceName}/${methodName}/${version}`, {
        params: {
            ...param,
            key: KEY
        }
    })
}

const storeService = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '/steamstore' : 'https://store.steampowered.com/api/appdetails',
    timeout: 4500,
    headers: {
        'Content-Type': 'application/json',
    },
})
export async function useSteamStoreGet(interfaceName: string, { param = {} }: {
    param?: any
} = {}) {
    return await storeService.get(`/${interfaceName}`, {
        params: {
            ...param,
        }
    })
}

export async function useSteamMediaGet(appid: string) {
    return await axios.get(`https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`)
}

export enum MediaJpgType {
    hero = 'hero_capsule.jpg',
    header = 'header.jpg',
    capsult_medium = 'capsule_616x353.jpg',
    capsult_small = 'capsule_231x87.jpg',
}

export const useSteamMediaUrl = (appid: string, filename: MediaJpgType) => `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/${filename}`