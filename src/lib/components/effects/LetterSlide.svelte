<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';

	let {
		letter,
		reverse,
		load = true,
		height = '30vh',
		size = '20vw',
		distance = 8,
		delay = 0
	}: {
		letter: string;
		reverse: boolean;
		load?: boolean;
		height?: string;
		size?: string;
		distance?: number;
		delay?: number;
	} = $props();

	let visible: boolean = $state(false);

	onMount(() => {
		visible = true;
	});
</script>

{#if visible && load}
	<div class="inline-block overflow-hidden" style:height>
		<div
			class="inline-block overflow-hidden select-none h-full"
			style:font-size={size}
			style:line-height={height}
			in:fly={{
				x: reverse ? `${distance}vw` : `${-distance}vw`,
				easing: sineOut,
				duration: 1000,
				opacity: 1,
				delay: delay
			}}
			out:fly={{
				x: reverse ? `${-distance}vw` : `${distance}vw`,
				easing: sineOut,
				duration: 1000,
				opacity: 1
			}}
		>
			{letter}
		</div>
	</div>
{/if}
