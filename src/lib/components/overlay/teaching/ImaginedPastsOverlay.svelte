<script lang="ts">
	import { onMount } from 'svelte';
	import LetterSlide from '$lib/components/effects/LetterSlide.svelte';
	import DetailOverlay from '../DetailOverlay.svelte';
	import TextSlideY from '$lib/components/effects/TextSlideY.svelte';

	let {
		color,
		letterReverse
	}: {
		color: string;
		letterReverse: boolean;
	} = $props();

	const leftField: string = 'UNDERGRADUATE SEMINAR';
	const rightField: string = 'FORBIDDEN DREAM (2019)';

	let visible: boolean = $state(false);

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<!-- Letters -->
	<div class="relative w-full h-full font-tny pointer-events-none" style:color>
		<div>
			<div class="absolute top-[10%] left-[15%]">
				<LetterSlide reverse={letterReverse} letter="I" />
			</div>
			<div class="absolute top-[10%] left-[17.5%]">
				<LetterSlide reverse={letterReverse} letter="M" />
			</div>
			<div class="absolute top-[10%] left-[24%]">
				<LetterSlide reverse={letterReverse} letter="A" />
			</div>
			<div class="absolute top-[10%] left-[29%]">
				<LetterSlide reverse={letterReverse} letter="G" />
			</div>
			<div class="absolute top-[10%] left-[34%] z-20">
				<LetterSlide reverse={letterReverse} letter="I" />
			</div>
			<div class="absolute top-[10%] left-[36.5%] z-20">
				<LetterSlide reverse={letterReverse} letter="N" />
			</div>
			<div class="absolute top-[10%] left-[41.5%] z-20">
				<LetterSlide reverse={letterReverse} letter="E" />
			</div>
			<div class="absolute top-[10%] left-[45.5%] z-20">
				<LetterSlide reverse={letterReverse} letter="D" />
			</div>
		</div>

		<div>
			<div class="absolute top-[55%] left-[20%]">
				<LetterSlide reverse={letterReverse} letter="P" />
			</div>
			<div class="absolute top-[55%] left-[25%]">
				<LetterSlide reverse={letterReverse} letter="A" />
			</div>
			<div class="absolute top-[55%] left-[30%]">
				<LetterSlide reverse={letterReverse} letter="S" />
			</div>
			<div class="absolute top-[55%] left-[35%]">
				<LetterSlide reverse={letterReverse} letter="T" />
			</div>
			<div class="absolute top-[55%] left-[40%]">
				<LetterSlide reverse={letterReverse} letter="S" />
			</div>
		</div>

		<div class="absolute top-[75%] leading-[4vh] left-[50%] text-[4vh] tracking-wider select-none">
			<TextSlideY
				text={'TRADITIONAL KOREAN CULTURE THROUGH FILM'}
				center={false}
				distance={'4vh'}
				visibleDelay={500}
				letterDelay={10}
				duration={700}
				stagger={true}
			/>
		</div>
	</div>

	<!-- Bottom Overlay -->
	<DetailOverlay
		{color}
		{leftField}
		{rightField}
		customLabel={''}
		invert={false}
		path={'https://www.kitchenstudiofactory.com/'}
	/>
{/if}
