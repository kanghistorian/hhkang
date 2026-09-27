<script lang="ts">
	const profile: string = 'https://ik.imagekit.io/easton/hhkang/images/Profile1.jpg';

	let {
		overlayColor
	}: {
		overlayColor: string;
	} = $props();
</script>

<div
	class="flex min-h-screen w-full items-center justify-center py-28 transition-colors duration-1000 ease-out"
	style:color={overlayColor}
>
	<div class="grid w-[82vw] grid-cols-[minmax(0,3fr)_minmax(18rem,2fr)] gap-12 2xl:w-[76vw]">
		<div class="max-w-none font-crimson text-base leading-relaxed 2xl:text-[1.15rem]">
			<p>
				Hyeok Hweon "H. H." Kang is a historian of early modern Korea and East Asia whose research spans social and intellectual history, digital humanities, and the history of science and technology. He is currently Assistant Professor of East Asian Languages and Cultures at Washington University in St. Louis, where he also holds an appointment by courtesy in the Department of History and the Department of Comparative Literature and Thought.
			</p>

			<p class="mt-6">
				Kang's first book, <i>By Virtue of Craft: Sciences of Making in Chosŏn Korea</i> (University of Chicago Press, August 2027), recasts the relationship between technical knowledge and statecraft in Korean history. Combining archival research with material analysis and experimental reconstruction, it examines how artisans and experts recorded and theorized their knowledge of making. The book argues that these “sciences of making” took shape through changing political and moral commitments to useful knowledge and good government.
			</p>

			<p class="mt-6">
				Kang is currently working on two new book projects. The first, <i>The Practical Age</i>, examines how practical knowledge and expertise acquired new moral and intellectual authority in eighteenth-century Korea within a broader global turn toward usefulness. The second, <i>Mr. Five Continents</i>, is an intellectual biography of the encyclopedist Yi Kyugyŏng (1788–1856) that explores his efforts to master global knowledge of geography, technology, and the natural world from his study in provincial Korea.
			</p>

			<p class="mt-6">
				Kang’s articles examine artisanal knowledge, contraband trade between Korea and Japan, global comparisons of military technology, and digital approaches to Korean history.
			</p>

			<p class="mt-6">
				Growing up in Guatemala City, Guatemala, he earned his BA from Emory University and his PhD from Harvard University. Before joining WashU, he was a D. Kim Foundation Postdoctoral Fellow in the Department of the History of Science and Technology at Johns Hopkins University.
			</p>
		</div>

		<figure class="min-h-[32rem] overflow-hidden self-stretch">
			<img src={profile} alt="Hyeok Hweon Kang" class="h-full w-full object-cover object-center" />
		</figure>
	</div>
</div>
