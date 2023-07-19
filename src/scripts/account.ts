import { reactive, watch } from "vue";

const account = reactive(JSON.parse(localStorage.getItem('account') as string) || {
    isLogin: false,
    steamid: '76561198298936075' as string
})

watch(account, () => {
    localStorage.setItem('account', JSON.stringify(account))
    
})
const setSteamId = (e: string) => {
    account.steamid = e
}
const getAccount = () => account

export { getAccount, setSteamId }
