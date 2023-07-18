import axios from "axios"

type SteamApi = {
    url: string
    steamid: string
    method?: 'get' | 'post'
    version?: 'v1' | 'v2'
    appid?: string
    format?: 'json' | 'xml' | 'vdf'
}

const KEY = '1A092C6AD7E6B2FA4B2C09DEE5849D33'

async function useSteamApi({ interfaceName, methodName, steamid, version = 'v1', appid = undefined, format = 'json' }: {
    interfaceName: string,
    methodName: string,
    steamid: string,
    method?: 'get' | 'post',
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

export type { SteamApi }
export { useSteamApi }
