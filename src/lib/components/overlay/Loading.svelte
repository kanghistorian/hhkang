<script lang="ts">
	import TextSlideX from '../effects/TextSlideX.svelte';
	let {
		progress = 0
	}: {
		progress: number;
	} = $props();
</script>

<div
	class="h-screen w-screen bg-[#121212] text-[#aeb4ae] font-crimson text-3xl
        flex items-start justify-start pl-8 pt-8"
>
	<!-- {`${progress}`} -->
	{'Loading'}
</div>
