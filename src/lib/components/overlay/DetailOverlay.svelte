<script lang="ts">
	import { onMount } from 'svelte';
	import TextSlideY from '../effects/TextSlideY.svelte';
	import TextSlideX from '../effects/TextSlideX.svelte';
	import { sineOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import CourseType from './CourseType.svelte';
	import ImageCitation from './ImageCitation.svelte';

	let {
		color,
		leftField,
		rightField,
		customLabel = 'EXPLORE',
		path
	}: {
		color: string;
		leftField: string;
		rightField: string;
		customLabel?: string;
		path?: string;
	} = $props();

	let lineHeight: string = $state('0px');
	let lineWidth: string = $state('0px');
	let visible: boolean = $state(false);

	onMount(() => {
		visible = true;
		setTimeout(() => {
			lineWidth = '100%';
			lineHeight = '2rem';
		}, 500);
	});
</script>

{#snippet plus()}
	{#if visible}
		<div class="h-[2vh]">
			<div in:slide={{ duration: 1000, delay: 500, easing: sineOut }}>
				<svg width="auto" height="2vh" viewBox="0 0 14 14">
					<polygon
						fill={color}
						points="7 11.04 6.08 11.04 6.08 7.89 2.96 7.89 2.96 6.1 6.08 6.1 6.08 2.96 7.92 2.96 7.92 6.1 11.04 6.1 11.04 7.89 7.92 7.89 7.92 11.04"
					></polygon>
				</svg>
			</div>
		</div>
	{/if}
{/snippet}

{#snippet line()}
	<div class="h-8">
		<div
			class="trasition-[height] duration-750 delay-200 ease-out border-l"
			style:height={lineHeight}
			style:border-color={color}
		></div>
	</div>
{/snippet}

{#snippet explore()}
	<a
		href={path ? path : '/#'}
		class="flex flex-col items-end text-xs leading-3 cursor-pointer select-none"
	>
		<TextSlideX text={customLabel} letterDelay={50} />
		<div class="relative bg-white w-full">
			<div
				class="border-t transition-[width] duration-1000 ease-out
               absolute bottom-0 left-0"
				style:width={lineWidth}
				style:border-color={color}
			></div>
		</div>
	</a>
{/snippet}

<!-- Bottom Panel -->
<div
	class="absolute w-full flex justify-center font-jws
         bottom-8 2xl:bottom-12 items-end"
	style:color
>
	<!-- Middle -->
	<div class="w-24 space-y-2 2xl:space-y-4 flex flex-col items-center justify-end">
		<!-- Explore -->
		{@render explore()}
		<!-- Line -->
		{@render line()}
		<!-- Plus -->
		{@render plus()}
	</div>
</div>

<!-- Left -->
<div class="absolute bottom-8 2xl:bottom-12 left-12">
	<CourseType {color} text={leftField} />
</div>

<!-- Right -->
<div class="absolute bottom-8 2xl:bottom-12 right-12">
	<ImageCitation {color} text={rightField} />
</div>
