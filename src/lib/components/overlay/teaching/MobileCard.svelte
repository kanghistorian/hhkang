<script lang="ts">
	import type { Image } from '$lib/constants/teaching';

	let {
		image
	}: {
		image: Image;
	} = $props();
</script>

<div class="w-full flex flex-col">
	{#if image.url}
		<a href={image.url} target="_blank">
			<figure class="">
				<img src={image.image} alt="Course Img" />
			</figure>
		</a>
	{:else}
		<figure class="">
			<img src={image.image} alt="Course Img" />
		</figure>
	{/if}
	<div class="w-full h-24 flex flex-col items-start">
		<div class="text-2xl">
			{image.title}
		</div>
		<div class="text-md">
			{image.subtitle}
		</div>
		<div class="text-sm opacity-50">
			{image.type}
		</div>
	</div>
</div>
