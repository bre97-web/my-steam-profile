import { reactive, watch } from "vue";

type Account = {
    isLogin: boolean
    steamid: string
}

const account: Account = reactive(JSON.parse(localStorage.getItem('account') as string) || {
    isLogin: false,
    steamid: '' as string
})

watch(account, () => {
    localStorage.setItem('account', JSON.stringify(account))
    
})
const setSteamId = (e: string) => {
    account.steamid = e
}
const setIsLogin = (e: boolean) => {
    account.isLogin = e
}
const getAccount = () => account

export { getAccount, setSteamId, setIsLogin }
