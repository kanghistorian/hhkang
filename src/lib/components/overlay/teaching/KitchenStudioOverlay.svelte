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
	const rightField: string = 'COURTESY OF NATIONALMUSEET, DANMARK';

	let visible: boolean = $state(false);

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<!-- Letters -->
	<div class="relative w-full h-full font-tny pointer-events-none" style:color>
		<div>
			<div class="absolute top-[10%] left-[7%]">
				<LetterSlide reverse={letterReverse} letter="K" />
			</div>
			<div class="absolute top-[10%] left-[12.5%]">
				<LetterSlide reverse={letterReverse} letter="I" />
			</div>
			<div class="absolute top-[10%] left-[15%]">
				<LetterSlide reverse={letterReverse} letter="T" />
			</div>
			<div class="absolute top-[10%] left-[20%]">
				<LetterSlide reverse={letterReverse} letter="C" />
			</div>
			<div class="absolute top-[10%] left-[25%]">
				<LetterSlide reverse={letterReverse} letter="H" />
			</div>
			<div class="absolute top-[10%] left-[30%]">
				<LetterSlide reverse={letterReverse} letter="E" />
			</div>
			<div class="absolute top-[10%] left-[35%]">
				<LetterSlide reverse={letterReverse} letter="N" />
			</div>
		</div>

		<div>
			<div class="absolute top-[10%] left-[60%]">
				<LetterSlide reverse={letterReverse} letter="S" />
			</div>
			<div class="absolute top-[10%] left-[65%]">
				<LetterSlide reverse={letterReverse} letter="T" />
			</div>
			<div class="absolute top-[10%] left-[70%]">
				<LetterSlide reverse={letterReverse} letter="U" />
			</div>
			<div class="absolute top-[10%] left-[75%]">
				<LetterSlide reverse={letterReverse} letter="D" />
			</div>
			<div class="absolute top-[10%] left-[80%]">
				<LetterSlide reverse={letterReverse} letter="I" />
			</div>
			<div class="absolute top-[10%] left-[82.5%]">
				<LetterSlide reverse={letterReverse} letter="O" />
			</div>
		</div>

		<div>
			<div class="absolute top-[55%] left-[15%]">
				<LetterSlide reverse={letterReverse} letter="F" />
			</div>
			<div class="absolute top-[55%] left-[20%]">
				<LetterSlide reverse={letterReverse} letter="A" />
			</div>
			<div class="absolute top-[55%] left-[25%]">
				<LetterSlide reverse={letterReverse} letter="C" />
			</div>
			<div class="absolute top-[55%] left-[30%]">
				<LetterSlide reverse={letterReverse} letter="T" />
			</div>
			<div class="absolute top-[55%] left-[35%]">
				<LetterSlide reverse={letterReverse} letter="O" />
			</div>
			<div class="absolute top-[55%] left-[40%]">
				<LetterSlide reverse={letterReverse} letter="R" />
			</div>
			<div class="absolute top-[55%] left-[45%]">
				<LetterSlide reverse={letterReverse} letter="Y" />
			</div>
		</div>

		<div class="absolute top-[75%] leading-[4vh] left-[55%] text-[4vh] tracking-wider select-none">
			<TextSlideY
				text={'CULTURES OF MAKING IN EAST ASIA'}
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
		invert={false}
		customLabel={'COURSE WEBSITE'}
		path={'https://www.kitchenstudiofactory.com/'}
	/>
{/if}
