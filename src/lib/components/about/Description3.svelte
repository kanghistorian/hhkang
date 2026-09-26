<script lang="ts">
	import XZLoop from '$lib/media/XZ Loop.mp4';

	let {
		overlayColor
	}: {
		overlayColor: string;
	} = $props();
</script>

<div
	class="flex h-full w-full items-center justify-center transition-colors duration-1000 ease-out"
	style:color={overlayColor}
>
	<video
		autoplay
		muted
		loop
		playsinline
		id="bgvideo"
		class="absolute left-[7.5vw] top-[25vh] w-[65vw]"
	>
		<source src={XZLoop} type="video/mp4" />
	</video>

	<p
		class="prose prose-dark absolute left-[65vw] top-[35vh] w-[45ch] max-w-[30vw] font-crimson text-base text-[#aeb4ae] mix-blend-difference 2xl:text-[1.3rem]"
	>
		Kang uses digital methods to investigate historical relationships and material objects. His
		projects include a network analysis of seventeenth-century smuggling networks, published in the
		<a
			href="https://culturalanalytics.org/article/68188-how-network-analysis-uncovers-international-networks-of-smuggling-history-criminals-in-nagasaki-japan-circa-1667"
			target="_blank"
		>
			<i>Journal of Cultural Analytics</i></a
		>. In collaboration with imaging scientists, designers, and engineers, he also uses CT scanning,
		3D modeling, and experimental reconstruction to study historical artifacts. These collaborations
		connect written and visual sources with the construction and testing of objects, including
		sundials, water pumps, and steam engines.
	</p>
</div>
