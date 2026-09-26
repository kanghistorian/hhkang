<script lang="ts">
	import gun from '$lib/media/about-gun.webp';

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
	<figure class="absolute left-[7.5vw] top-[10vh] max-h-[83vh] w-[85vw] overflow-y-hidden">
		<img src={gun} alt="Chosŏn matchlock" class="object-cover" />
	</figure>

	<p
		class="prose prose-dark absolute left-[60vw] top-[55vh] w-[50ch] max-w-[34vw] font-crimson text-base text-[#aeb4ae] mix-blend-difference 2xl:text-[1.3rem]"
	>
		Kang examines early modern matchlocks to reconstruct the technical knowledge involved in their
		design, manufacture, and use. Working with artifacts from Chosŏn Korea, Tokugawa Japan, and
		Portuguese Malacca, he studies surviving mechanisms to understand how firearms were made and
		operated. His research on the subject has appeared in
		<a href="https://www.tandfonline.com/doi/full/10.1080/07341512.2022.2153206" target="_blank">
			<i>History and Technology</i>
		</a>
		and the
		<a href="https://muse.jhu.edu/pub/5/article/957972/pdf" target="_blank">
			<i>Journal of World History</i></a
		>.
	</p>
</div>
