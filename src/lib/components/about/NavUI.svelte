<script lang="ts">
	import scrollDown from '$lib/media/scroll-down.webm';
	import scrollDownDark from '$lib/media/scroll-down-dark.webm';
	import TextSlideX from '../effects/TextSlideX.svelte';
	import { sineOut } from 'svelte/easing';
	import { slide, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let {
		index,
		dark,
		scrollTo = (indexTo: number) => {},
		load = false,
		unload = false
	}: {
		index: number;
		dark: boolean;
		scrollTo: (indexTo: number) => void;
		load?: boolean;
		unload?: boolean;
	} = $props();
</script>

{#if index > 0}
	<div
		class="inline-block absolute top-12 right-12 font-crimson text-lg"
		style:color={dark ? '#aeb4ae' : '#121212'}
	>
		<TextSlideX {load} text={`_${index}`} />
	</div>

	<div
		class="absolute flex justify-end top-24 right-12 items-end"
		style:color={dark ? '#aeb4ae' : '#121212'}
	>
		<!-- Middle -->
		<div class="space-y-2 2xl:space-y-4 flex flex-col items-center justify-end">
			<!-- Line -->
			{@render line()}
			<!-- Plus -->
			{@render plus()}
		</div>
	</div>
{/if}

{#if load && !unload}
	<video
		autoplay
		muted
		loop
		class="absolute right-9 cursor-pointer z-50"
		style:width={index == 0 ? '7vh' : '5vh'}
		style:height={index == 0 ? '7vh' : '5vh'}
		style:top={index == 0 ? '90%' : '50%'}
		onclick={() => scrollTo(index + 1)}
		in:fly={{
			y: '-5vh',
			duration: 1000,
			delay: 1500,
			easing: sineOut,
			opacity: 0
		}}
	>
		{#if dark}
			<source src={scrollDownDark} type="video/webm" />
		{:else}
			<source src={scrollDown} type="video/webm" />
		{/if}
	</video>
{/if}

{#snippet plus()}
	{#if load}
		<div class="h-[2vh]">
			<div in:slide={{ duration: 750, delay: 1000, easing: sineOut }}>
				<svg width="auto" height="2vh" viewBox="0 0 14 14">
					<polygon
						fill={dark ? '#aeb4ae' : '#121212'}
						points="7 11.04 6.08 11.04 6.08 7.89 2.96 7.89 2.96 6.1 6.08 6.1 6.08 2.96 7.92 2.96 7.92 6.1 11.04 6.1 11.04 7.89 7.92 7.89 7.92 11.04"
					></polygon>
				</svg>
			</div>
		</div>
	{/if}
{/snippet}

{#snippet line()}
	<div class="overflow-y-hidden">
		<div
			class="trasition-[height] duration-750 delay-500 ease-out border-l"
			style:height={load ? '5vh' : '0px'}
			style:border-color={dark ? '#aeb4ae' : '#121212'}
		></div>
	</div>
{/snippet}
