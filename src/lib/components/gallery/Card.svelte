<script lang="ts">
	import type { Image } from '$lib/constants/gallery';
	import { fly } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import TextSlideX from '../effects/TextSlideX.svelte';
	import TextSlideY from '../effects/TextSlideY.svelte';

	let {
		index,
		image
	}: {
		index: number;
		image: Image;
	} = $props();
</script>

<div
	class="flex items-start justify-center font-crimson"
	in:fly={{
		y: '100vh',
		duration: 1000,
		opacity: 1,
		delay: 100 * (index % 12),
		easing: sineOut
	}}
>
	<div class="text-sm pr-2 h-full">
		<TextSlideX text={`${index + 1}`} delay={1000} />
	</div>
	<div class="w-full flex flex-col">
		<figure class="w-full">
			<img src={image.image} alt="Gallery" class="object-cover" />
		</figure>
		<div class="w-full pt-2 text-lg">
			<TextSlideY text={image.caption} center={false} delay={750} distance={'7rem'} />
		</div>
	</div>
</div>
