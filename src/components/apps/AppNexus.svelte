<script lang="ts">
    import type { AppID } from '__/stores/apps.store'
    export let appID: AppID
    export let isBeingDragged: boolean
</script>

{#if appID === 'wallpapers'}
    {#await import('./WallpaperApp/WallpaperSelectorApp.svelte') then { default: WallpaperSelector }}
        <WallpaperSelector />
    {/await}
{:else if appID === 'calendar'}
    {#await import('./Calendar/Calendar.svelte') then { default: Calendar }}
        <Calendar />
    {/await}
{:else}
    {#await import('./Placeholder/Placeholder.svelte') then { default: Placeholder }}
        <Placeholder {appID} />
    {/await}
{/if}
