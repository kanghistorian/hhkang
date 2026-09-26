<script lang="ts">
	import { onMount } from 'svelte';
	import { sineOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let {
		text,
		center = true,
		delay = 0,
		letterDelay = 50,
		visibleDelay = 0,
		stagger = false,
		distance = '2vh',
		load = true,
		duration = 1000
	}: {
		text: string;
		center?: boolean;
		delay?: number;
		letterDelay?: number;
		visibleDelay?: number;
		stagger?: boolean;
		distance?: string;
		load?: boolean;
		duration?: number;
	} = $props();

	let visible: boolean = $state(false);

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 100 + visibleDelay);
	});
</script>

<div class="flex items-start overflow-hidden {center ? 'justify-center' : 'justify-start'}">
	{#if stagger}
		{#each text as c, i}
			{#if visible && load}
				<div
					in:fly={{
						y: distance,
						easing: sineOut,
						duration: duration,
						delay: i * letterDelay + delay,
						opacity: 1
					}}
					out:fly={{
						y: distance,
						easing: sineOut,
						duration: duration / 2,
						delay: 0,
						opacity: 1
					}}
				>
					{#if c != ' '}
						{c}
					{:else}
						&nbsp;
					{/if}
				</div>
			{/if}
		{/each}
	{:else if visible && load}
		<div
			in:fly={{
				y: distance,
				easing: sineOut,
				duration: duration,
				delay: delay,
				opacity: 1
			}}
			out:fly={{
				y: distance,
				easing: sineOut,
				duration: duration / 2,
				delay: 0,
				opacity: 1
			}}
		>
			{@html text}
		</div>
	{/if}
</div>
