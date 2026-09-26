<script lang="ts">
	import { onMount } from 'svelte';
	import LetterSlide from '$lib/components/effects/LetterSlide.svelte';
	import DetailOverlay from '../DetailOverlay.svelte';
	import TextSlideX from '$lib/components/effects/TextSlideX.svelte';

	let {
		color,
		letterReverse
	}: {
		color: string;
		letterReverse: boolean;
	} = $props();

	const leftField: string = 'UNDERGRADUATE LECTURE';
	const rightField: string = 'COURTESY OF NATIONAL MUSEUM OF KOREA';

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
				<LetterSlide reverse={letterReverse} letter="K" />
			</div>
			<div class="absolute top-[10%] left-[20%]">
				<LetterSlide reverse={letterReverse} letter="O" />
			</div>
			<div class="absolute top-[10%] left-[25%]">
				<LetterSlide reverse={letterReverse} letter="R" />
			</div>
			<div class="absolute top-[10%] left-[30%]">
				<LetterSlide reverse={letterReverse} letter="E" />
			</div>
			<div class="absolute top-[10%] left-[35%]">
				<LetterSlide reverse={letterReverse} letter="A" />
			</div>
			<div class="absolute top-[10%] left-[40%]">
				<LetterSlide reverse={letterReverse} letter="N" />
			</div>
		</div>

		<div>
			<div class="absolute top-[55%] left-[25%]">
				<LetterSlide reverse={letterReverse} letter="C" />
			</div>
			<div class="absolute top-[55%] left-[30%]">
				<LetterSlide reverse={letterReverse} letter="I" />
			</div>
			<div class="absolute top-[55%] left-[32.5%]">
				<LetterSlide reverse={letterReverse} letter="V" />
			</div>
			<div class="absolute top-[55%] left-[37.5%]">
				<LetterSlide reverse={letterReverse} letter="I" />
			</div>
			<div class="absolute top-[55%] left-[40%]">
				<LetterSlide reverse={letterReverse} letter="L" />
			</div>
			<div class="absolute top-[55%] left-[45%]">
				<LetterSlide reverse={letterReverse} letter="I" />
			</div>
			<div class="absolute top-[55%] left-[47.5%]">
				<LetterSlide reverse={letterReverse} letter="Z" />
			</div>
			<div class="absolute top-[55%] left-[52.5%]">
				<LetterSlide reverse={letterReverse} letter="A" />
			</div>
			<div class="absolute top-[55%] left-[57.5%]">
				<LetterSlide reverse={letterReverse} letter="T" />
			</div>
			<div class="absolute top-[55%] left-[62.5%]">
				<LetterSlide reverse={letterReverse} letter="I" />
			</div>
			<div class="absolute top-[55%] left-[65%]">
				<LetterSlide reverse={letterReverse} letter="O" />
			</div>
			<div class="absolute top-[55%] left-[70%]">
				<LetterSlide reverse={letterReverse} letter="N" />
			</div>
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
