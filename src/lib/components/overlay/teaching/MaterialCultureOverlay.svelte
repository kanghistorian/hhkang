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
				<LetterSlide reverse={letterReverse} letter="G" />
			</div>
			<div class="absolute top-[10%] left-[20%]">
				<LetterSlide reverse={letterReverse} letter="U" />
			</div>
			<div class="absolute top-[10%] left-[25%]">
				<LetterSlide reverse={letterReverse} letter="N" />
			</div>
			<div class="absolute top-[10%] left-[30%]">
				<LetterSlide reverse={letterReverse} letter="S" />
			</div>
		</div>

		<div>
			<div class="absolute top-[10%] left-[45%]">
				<LetterSlide reverse={letterReverse} letter="T" />
			</div>
			<div class="absolute top-[10%] left-[50%]">
				<LetterSlide reverse={letterReverse} letter="O" />
			</div>
			<div class="absolute top-[10%] left-[55%]">
				<LetterSlide reverse={letterReverse} letter="B" />
			</div>
			<div class="absolute top-[10%] left-[60%] z-20">
				<LetterSlide reverse={letterReverse} letter="A" />
			</div>
			<div class="absolute top-[10%] left-[65%] z-20">
				<LetterSlide reverse={letterReverse} letter="C" />
			</div>
			<div class="absolute top-[10%] left-[70%] z-20">
				<LetterSlide reverse={letterReverse} letter="C" />
			</div>
			<div class="absolute top-[10%] left-[75%] z-20">
				<LetterSlide reverse={letterReverse} letter="O" />
			</div>
		</div>

		<div>
			<div class="absolute top-[55%] left-[15.5%]">
				<LetterSlide reverse={letterReverse} letter="S" />
			</div>
			<div class="absolute top-[55%] left-[20%] font-inter">
				<LetterSlide reverse={letterReverse} letter="." />
			</div>
			<div class="absolute top-[55%] left-[30%]">
				<LetterSlide reverse={letterReverse} letter="P" />
			</div>
			<div class="absolute top-[55%] left-[35%]">
				<LetterSlide reverse={letterReverse} letter="O" />
			</div>
			<div class="absolute top-[55%] left-[40%]">
				<LetterSlide reverse={letterReverse} letter="T" />
			</div>
			<div class="absolute top-[55%] left-[45%]">
				<LetterSlide reverse={letterReverse} letter="A" />
			</div>
			<div class="absolute top-[55%] left-[50%]">
				<LetterSlide reverse={letterReverse} letter="T" />
			</div>
			<div class="absolute top-[55%] left-[55%]">
				<LetterSlide reverse={letterReverse} letter="O" />
			</div>
		</div>

		<div
			class="absolute top-[75%] leading-[4vh] left-[62.5%] text-[4vh] tracking-wider select-none"
		>
			<TextSlideY
				text={'A HISTORY OF MATERIAL CULTURE'}
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
	<DetailOverlay {color} {leftField} {rightField} customLabel={''} invert={false} path={'/'} />
{/if}
