<script lang="ts">
	import Logo from '$lib/components/overlay/Logo.svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';
	import gun from '$lib/media/about-gun.webp';
	import XZLoop from '$lib/media/XZ Loop.mp4';

	let {
		textColor,
		backgroundColor
	}: {
		textColor: string;
		backgroundColor: string;
	} = $props();
</script>

<Logo overlayColor={textColor} sticky={false} />
<Tabs overlayColor={textColor} {backgroundColor} />

<main class="w-full overflow-x-hidden font-crimson" style:background-color={backgroundColor}>
	<section
		class="prose prose-light min-h-screen max-w-none space-y-6 px-8 pb-16 pt-32 text-base md:px-16 md:text-lg"
		style:color={textColor}
	>
		<p>
			Hyeok Hweon Kang is a historian of early modern Korea and East Asia and Assistant Professor of
			East Asian Languages and Cultures at Washington University in St. Louis. His research brings
			together social and intellectual history, the history of science and technology, material
			culture, and digital humanities.
		</p>

		<p class="border-l border-current pl-4 text-[0.95em]">
			Affiliate Faculty, Comparative Literature and Thought and Department of History; Head of the
			Korean Section.
		</p>

		<p>
			His first book, <i>By Virtue of Craft: Sciences of Making in Chosŏn Korea</i> (University of Chicago
			Press, August 2027), recasts the relationship between technical knowledge and statecraft in Korean
			history. Combining archival research with material analysis and experimental reconstruction, it
			examines how artisans and experts recorded and theorized their knowledge of making. The book argues
			that these “sciences of making” took shape through changing political and moral commitments to useful
			knowledge and good government.
		</p>

		<p>
			Kang is currently working on two new book projects. <i>The Practical Age</i> examines how
			practical knowledge and expertise acquired new moral and intellectual authority in
			eighteenth-century Korea within a broader global turn toward usefulness.
			<i>Mr. Five Continents</i> is an intellectual biography of the encyclopedist Yi Kyugyŏng (1788–1856),
			exploring his efforts to master global knowledge of geography, technology, and the natural world
			from his study in provincial Korea.
		</p>

		<p>
			Raised in Guatemala City, Kang earned his BA at Emory University and his PhD in History and
			East Asian Languages at Harvard University. Before joining WashU in 2021, he held a D. Kim
			Foundation Postdoctoral Fellowship in the Department of the History of Science and Technology
			at Johns Hopkins University.
		</p>

		<p class="border-t border-current pt-6">
			Kang’s research received the 2021 Turriano Prize and the 2021 ICAS prize for the best
			humanities dissertation in English. He held an
			<a href="https://www.acls.org/" target="_blank"
				>American Council of Learned Societies Fellowship</a
			>
			in 2023–24 and serves as co-chair of the History of Science Society’s Forum for the History of Science
			in Asia.
		</p>
	</section>

	<section class="bg-[#121212] px-8 py-20 text-[#aeb4ae] md:px-16">
		<h2 class="mb-8 font-baskervville text-[12vw] leading-[0.85] md:text-7xl">
			DIGITAL_<br />HUMANITIES
		</h2>
		<video autoplay muted loop playsinline class="mb-8 w-full">
			<source src={XZLoop} type="video/mp4" />
		</video>
		<p class="text-base leading-relaxed md:text-lg">
			Kang uses digital methods to investigate historical relationships and material objects. His
			projects include a network analysis of seventeenth-century smuggling networks, published in
			the
			<a
				class="underline"
				href="https://culturalanalytics.org/article/68188-how-network-analysis-uncovers-international-networks-of-smuggling-history-criminals-in-nagasaki-japan-circa-1667"
				target="_blank"
			>
				<i>Journal of Cultural Analytics</i></a
			>. In collaboration with imaging scientists, designers, and engineers, he also uses CT
			scanning, 3D modeling, and experimental reconstruction to study historical artifacts. These
			collaborations connect written and visual sources with the construction and testing of
			objects, including sundials, water pumps, and steam engines.
		</p>
	</section>

	<section class="bg-[#121212] px-8 py-20 text-[#aeb4ae] md:px-16">
		<h2 class="mb-8 font-baskervville text-[12vw] leading-[0.85] md:text-7xl">
			MATERIAL_<br />CULTURE
		</h2>
		<img src={gun} alt="Chosŏn matchlock" class="mb-8 w-full" />
		<p class="text-base leading-relaxed md:text-lg">
			Kang examines early modern matchlocks to reconstruct the technical knowledge involved in their
			design, manufacture, and use. Working with artifacts from Chosŏn Korea, Tokugawa Japan, and
			Portuguese Malacca, he studies surviving mechanisms to understand how firearms were made and
			operated. His research on the subject has appeared in
			<a
				class="underline"
				href="https://www.tandfonline.com/doi/full/10.1080/07341512.2022.2153206"
				target="_blank"
			>
				<i>History and Technology</i>
			</a>
			and the
			<a class="underline" href="https://muse.jhu.edu/pub/5/article/957972/pdf" target="_blank">
				<i>Journal of World History</i></a
			>.
		</p>
	</section>
</main>
