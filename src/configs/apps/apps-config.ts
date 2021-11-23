import { createAppConfig } from '__/helpers/create-app-config'
const finder = createAppConfig({
    title: 'Finder',
    resizable: true,
})
const wallpapers = createAppConfig({
    title: 'Wallpapers',
    resizable: true,
    height: 600,
    width: 800,
})
const safari = createAppConfig({
    title: 'Safari',
    resizable: true,
})
const messages = createAppConfig({
    title: 'Messages',
    resizable: true,
})
const mail = createAppConfig({
    title: 'Mail',
    resizable: true,
})
const maps = createAppConfig({
    title: 'Maps',
    resizable: true,
})
const photos = createAppConfig({
    title: 'Photos',
    resizable: true,
})
const facetime = createAppConfig({
    title: 'FaceTime',
    resizable: true,
})
const calendar = createAppConfig({
    title: 'Calendar',
    resizable: true,
})
const contacts = createAppConfig({
    title: 'Contacts',
    resizable: true,
})
const reminders = createAppConfig({
    title: 'Reminders',
    resizable: true,
})
const notes = createAppConfig({
    title: 'Notes',
    resizable: true,
})
const music = createAppConfig({
    title: 'Music',
    resizable: true,
})
const podcasts = createAppConfig({
    title: 'Podcasts',
    resizable: true,
})
const appstore = createAppConfig({
    title: 'App Store',
    resizable: true,
})
const settings = createAppConfig({
    title: 'Settings',
    resizable: true,
})
export const appsConfig = {
    finder,
    wallpapers,
    safari,
    messages,
    mail,
    maps,
    photos,
    facetime,
    calendar,
    contacts,
    reminders,
    notes,
    music,
    podcasts,
    appstore,
    settings,
}
