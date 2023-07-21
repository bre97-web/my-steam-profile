import { SteamGame } from "@/hooks/useSteam";
import { defineStore } from "pinia";

const useFocusGameStore = defineStore('focus_game_store', {
    state: () => ({
        current: null as SteamGame | null,
    }),
    getters: {
        getFocusGame: (s) => s.current,
    },
    actions: {
        setFocusGame(e: SteamGame) {
            this.current = e
        }
    }
})

export { useFocusGameStore }
