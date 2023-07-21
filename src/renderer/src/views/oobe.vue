<template>
    <div class="fixed p-8 top-0 right-0 w-screen h-screen z-50 bg-[var(--md-sys-color-background)]">
        <Oobe></Oobe>
    </div>
</template>

<script setup lang="tsx">
import { SteamPlayer, SteamPlayerSummariesResponse, useSteamGet } from '@/hooks/useSteam';
import { setIsLogin, setSteamId } from '@/utils/account';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';


const currentIndex = ref(0)
const setCurrentIndex = (e: number) => {
    currentIndex.value = e
}

const Index = () => (
    <header class="space-y-4">
        <h1 class="text-6xl font-black text-center">Steam Experiencer</h1>
        <p class="text-2xl font-semibold text-center">use it like twitter</p>
    </header>
)

const steamid = ref<string>('')
const targetPlayer = ref<SteamPlayer | null>(null)
const isPass = ref<boolean>(true)
watch(steamid, () => {
    isPass.value = false

    if(steamid.value === '') {
        return
    }
    
    useSteamGet('ISteamUser', 'GetPlayerSummaries', {
        version: 'v2',
        param: {
            steamids: steamid.value
        }
    }).then(res => {
        targetPlayer.value = (res.data as SteamPlayerSummariesResponse).response.players[0]
    })
})
const InputSteamId = () => {
    isPass.value = false
    
    return (
        <div class="space-y-4">
            <h1 class="text-6xl font-black text-center">Tell me your SteamID</h1>
            <p class="text-2xl font-semibold text-center">This will not reveal your private data, we only get your ID</p>
            <div class="flex flex-col">
                <md-filled-text-field onInput={(e: InputEvent) => steamid.value = (e.target as EventTarget & HTMLInputElement).value} label="SteamID"></md-filled-text-field>
            </div>
                <div class="text-center">
            {
                targetPlayer.value != undefined || targetPlayer.value != null ?
                    <div class="flex flex-row items-center justify-center gap-2 md:flex-col">
                        <h1>
                            <mark>{ targetPlayer.value?.personaname }</mark>
                            { ' ' } is that you?
                        </h1>
                        <img src={targetPlayer.value.avatarmedium} />
                        <md-filled-button onClick={() => {
                            isPass.value = true
                            setSteamId(steamid.value)
                            setIsLogin(true)
                        }}>Yes</md-filled-button>
                    </div> : 
                    <h1 class={steamid.value === '' ? 'hidden' : 'block'}>Not found</h1>
            }
                </div>
        </div>
    )
}

const AllDone = () => (
    <div>
        <h1 class="text-6xl font-black text-center">All done, start Steamer!</h1>
    </div>
)

const components = [
    <Index></Index>,
    <InputSteamId></InputSteamId>,
    <AllDone></AllDone>
]

const router = useRouter()
const Oobe = () => (
    <div class="grid place-content-center w-full h-full space-y-16">
        {
            components[currentIndex.value]
        }

        <div class="mx-auto">
            <md-tonal-button
                disabled={!isPass.value}
                onClick={() => {
                    if(currentIndex.value === components.length - 1) {
                        router.push('/')
                    }
                    setCurrentIndex(currentIndex.value + 1)

                }}
            >
                {
                    currentIndex.value === components.length - 1 ? 'Done' : 'Next'
                }
            </md-tonal-button>
        </div>
    </div>
)
</script>

<style scoped>

</style>@/utils/account