<script lang="ts">
	import TextSlideX from '../effects/TextSlideX.svelte';
	import { fade } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let {
		color = '#e6e6e6'
	}: {
		color: string;
	} = $props();

	let visible: boolean = $state(false);

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 1500);
	});
</script>

{#if visible}
	<div
		class="h-full w-1/2 flex flex-col items-center justify-center absolute
          left-0 top-0 float-left"
		transition:fade={{ easing: sineOut, duration: 500 }}
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 17" width="5vw" height="3vw">
			<title>Right Arrow Key Pressed</title>
			<g data-name="Layer 2">
				<g data-name="Layer 1">
					<path
						fill={color}
						d="M 32 17 H 42 a 2 2 0 0 0 2 -2 V 11 a 2 2 0 0 0 -2 -2 H 32 a 2 2 0 0 0 -2 2 v 4 A 2 2 0 0 0 32 17 Z m 3 -5.5 L 39 13 l -4 1.5 Z M 2 17 H 12 a 2 2 0 0 0 2 -2 V 11 a 2 2 0 0 0 -2 -2 H 2 a 2 2 0 0 0 -2 2 v 4 A 2 2 0 0 0 2 17 Z m -1 -6 A 1 1 0 0 1 2 10 H 12 A 1 1 0 0 1 13 11 v 4 A 1 1 0 0 1 12 16 H 2 A 1 1 0 0 1 1 15 Z m 8 3.5 v -3 L 5 13 Z M 27 9 H 17 a 2 2 0 0 0 -2 2 v 4 a 2 2 0 0 0 2 2 H 27 a 2 2 0 0 0 2 -2 V 11 A 2 2 0 0 0 27 9 Z m 1 6 A 1 1 0 0 1 27 16 H 17 A 1 1 0 0 1 16 15 V 11 a 1 1 0 0 1 1 -1 H 27 A 1 1 0 0 1 28 11 Z m -4.5 -3.5 h -3 l 1.5 3 Z M 27 0 H 17 a 2 2 0 0 0 -2 2 V 6 a 2 2 0 0 0 2 2 H 27 a 2 2 0 0 0 2 -2 V 2 A 2 2 0 0 0 27 0 Z m 1 6 A 1 1 0 0 1 27 7 H 17 A 1 1 0 0 1 16 6 V 2 A 1 1 0 0 1 17 1 H 27 A 1 1 0 0 1 28 2 Z m -7.5 -0.5 h 3 L 22 2.5 Z"
					/>
				</g>
			</g>
		</svg>

		<div style:color class="font-jws text-[.75vw] select-none">
			<TextSlideX text="PRESS OR SWIPE" />
		</div>
		<!-- <div class="w-[100px] border-[0.5px] border-[#e6e6e6]"></div> -->
	</div>
{/if}
