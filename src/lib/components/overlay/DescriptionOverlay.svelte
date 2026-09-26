<script lang="ts">
	import TextSlideY from '../effects/TextSlideY.svelte';

	let {
		overlayColor = '#FFFFFF',
		delay = 0,
		load = true
	}: {
		overlayColor: string;
		delay?: number;
		load?: boolean;
	} = $props();

	const line1: string = 'ASSISTANT PROFESSOR OF EAST ASIAN LANGUAGES & CULTURES';
	const line2: string = 'WASHINGTON UNIVERSITY IN ST. LOUIS';
</script>

{#if load}
	<div
		class="absolute text-[0.6rem] lg:text-xs leading-2.5 flex flex-col font-jws
          bottom-8 left-8 lg:bottom-12 lg:left-12 items-start justify-end mix-blend-difference"
		style:color={overlayColor}
	>
		<TextSlideY text={line1} stagger={false} {delay} />
		<TextSlideY text={line2} stagger={false} delay={delay + 100} />
	</div>
{/if}
