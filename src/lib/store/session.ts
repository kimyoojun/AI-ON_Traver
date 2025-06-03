import type { AuthSession } from "@supabase/supabase-js"
import { writable } from "svelte/store"

export const session= (() => {
    const store = writable <AuthSession | null>()

    return {
        ...store
    }
})()
