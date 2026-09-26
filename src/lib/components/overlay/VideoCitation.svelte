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

	const line1: string = 'KOREAN IVORY SCAPHE DIAL';
	const line2: string = 'OXFORD HISTORY OF SCIENCE MUSEUM';
	const line3: string = 'X-RAY CT WITH PAUL WILSON, UNIVERSITY OF WARWICK';
</script>

{#if load}
	<div
		class="absolute text-[0.6rem] lg:text-xs leading-2.5 flex-col font-jws hidden lg:flex
        bottom-8 right-8 lg:bottom-12 lg:left-12 items-end justify-end mix-blend-difference"
		style:color={overlayColor}
	>
		<TextSlideY text={line1} stagger={false} {delay} />
		<TextSlideY text={line2} stagger={false} delay={delay + 100} />
		<TextSlideY text={line3} stagger={false} delay={delay + 200} />
	</div>
{/if}
