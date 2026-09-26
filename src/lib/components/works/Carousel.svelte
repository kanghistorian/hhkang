<script lang="ts">
	import { fade } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';

	let {
		images,
		selectedIndex
	}: {
		images: Array<{ index: number; image: string }>;
		selectedIndex: number;
	} = $props();

	let degree: number = $derived((selectedIndex == -1 ? 0 : selectedIndex / images.length) * 360);

	const radius = 300;

	function getMagnitude(index: number, total: number) {
		const direct = Math.abs(index - selectedIndex);
		const wrapAround = total - direct;

		const wrappedForward = (index - selectedIndex + total) % total;
		const wrappedBackward = (selectedIndex - index + total) % total;
		return {
			magnitude: Math.min(direct, wrapAround),
			direction: wrappedForward <= wrappedBackward ? 1 : -1
		};
	}

	function getTransform(index: number, total: number) {
		const { magnitude, direction } = getMagnitude(index, total);
		let angle = (index / total) * 2 * Math.PI;

		// When not default and in vicinity
		if (selectedIndex > -1 && magnitude < 4) {
			angle += magnitude * 0.03 * direction;
		}
		const x = -radius * Math.cos(angle);
		const y = -radius * Math.sin(angle);

		return `translate(${x + 15}px, ${y}px)`;
	}

	function getSize(index: number, total: number) {
		if (selectedIndex == -1) return '3rem';

		const { magnitude } = getMagnitude(index, total);
		// < 3 distance away (direct, and wrap around)
		if (magnitude >= 3) return '3rem';

		return `${7 - magnitude * 1.75}rem`;
	}
</script>

{#if selectedIndex != -1}
	<div
		class="absolute top-[50vh] left-[15%] w-1/2 2xl:w-2/3 h-full flex items-center justify-start"
	>
		<figure class="max-w-[25vw] max-h-[75vh]" transition:fade={{ duration: 300, easing: sineOut }}>
			<img
				src={images[selectedIndex].image}
				alt="Zoomed Imaged"
				class="w-full h-full object-cover"
			/>
		</figure>
	</div>
{/if}

<!-- <div class="sticky w-full h-auto"> -->
<div
	class="relative w-full h-full top-[50vh] xl:-right-[75%] 2xl:-right-[65%] flex flex-col
    transition-transform duration-1000 ease-out"
	style:transform="rotate(-{degree}deg)"
>
	{#each images as i}
		<figure
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              transition-[width,height,opacity,transform] duration-500 ease-out"
			style:transform="{getTransform(i.index, images.length)} rotate({degree}deg)"
			style:width={getSize(i.index, images.length)}
			style:height={getSize(i.index, images.length)}
			style:opacity="{selectedIndex == i.index ? 100 : 40}%"
		>
			<img src={i.image} alt="Carousel" class="w-full h-full object-cover" />
		</figure>
	{/each}
</div>
<!-- </div> -->
