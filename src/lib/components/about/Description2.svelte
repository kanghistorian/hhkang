<script lang="ts">
	import gun from '$lib/media/about-gun.webp';
	import TextSlideX from '../effects/TextSlideX.svelte';

	let {
		overlayColor
	}: {
		overlayColor: string;
	} = $props();
</script>

<div
	class="w-full h-full transition-colors duration-1000 ease-out flex items-center justify-center"
	style:color={overlayColor}
>
	<figure class="absolute left-[7.5vw] top-[10vh] w-[85vw] max-h-[83vh] overflow-y-hidden">
		<img src={gun} alt="Choson Gun" class="object-cover" />
	</figure>

	<div
		class="absolute left-[60vw] top-[55vh] w-[50ch] font-crimson text-base 2xl:text-[1.3rem] text-[#aeb4ae] mix-blend-difference prose prose-dark"
	>
		Kang collects and disassembles matchlock guns from the early modern period to reverse engineer
		their mechanisms and reconstruct the systems of knowledge, use, and production around them. His
		research on the subject was published in
		<a href="https://www.tandfonline.com/doi/full/10.1080/07341512.2022.2153206" target="_blank">
			<i> History and Technology </i>
		</a>
		and the
		<a href="https://muse.jhu.edu/pub/5/article/957972/pdf" target="_blank">
			<i>Journal of World History</i>
		</a>
		. His collection includes artifacts from Chosŏn Korea, Tokugawa Japan, and Portuguese Malacca.
	</div>
</div>
