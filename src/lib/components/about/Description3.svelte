<script lang="ts">
	import sundial from '$lib/media/sundial.webp';
	import XZLoop from '$lib/media/XZ Loop.mp4';
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
	<video autoplay muted loop id="bgvideo" class="absolute left-[7.5vw] top-[25vh] w-[65vw]">
		<source src={XZLoop} type="video/mp4" />
	</video>

	<div
		class="absolute left-[65vw] top-[35vh] w-[45ch] font-crimson text-base 2xl:text-[1.3rem] text-[#aeb4ae] mix-blend-difference prose prose-dark"
	>
		Professor Kang has wide-ranging interests in digital humanities and material culture studies.
		His projects include a network analysis of international criminals in seventeenth-century
		Nagasaki, published in the
		<a
			href="https://culturalanalytics.org/article/68188-how-network-analysis-uncovers-international-networks-of-smuggling-history-criminals-in-nagasaki-japan-circa-1667"
			target="_blank"
		>
			<i>Journal of Cultural Analytics</i>
		</a>
		. He also collaborates with imaging scientists, game designers, and mechanical engineers to critically
		“rework” historical material culture. This work spans CT scanning of artifacts, 3D modeling of artisanal
		drawings, and prototype fabrication for experimental testing—applied across a diverse array of objects
		such as sundials, water pumps, and steam engines.
	</div>
</div>
