<script lang="ts">
	import Logo from '$lib/components/overlay/Logo.svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';
	import MobileCard from '$lib/components/overlay/teaching/MobileCard.svelte';
	import { images } from '$lib/constants/teaching';

	let {
		textColor
	}: {
		textColor: string;
	} = $props();
</script>

<Logo overlayColor={textColor} sticky={true} />
<Tabs overlayColor={textColor} />

<div
	class="dark min-h-screen w-screen flex flex-col bg-[#121212] font-crimson
        space-y-12 px-8 pb-12 pt-32"
	style:color={textColor}
>
	{#each images as img, i}
		<MobileCard image={img} />
	{/each}
</div>
