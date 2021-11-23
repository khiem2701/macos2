import { writable } from 'svelte/store'
import type { appsConfig } from '__/configs/apps/apps-config'
export type AppID = keyof typeof appsConfig
/** Which apps are currently open */
export const openApps = writable<Record<AppID, boolean>>({
    finder: false,
    wallpapers: false,
    safari: false,
    messages: false,
    mail: false,
    maps: false,
    photos: false,
    facetime: false,
    calendar: false,
    contacts: false,
    reminders: false,
    notes: false,
    music: false,
    podcasts: false,
    appstore: false,
    settings: false,
})
export const activeApp = writable<AppID>('finder')
export const activeAppZIndex = writable(-2)
