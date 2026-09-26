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
				Hyeok Hweon Kang is a historian of early modern Korea and East Asia and Assistant Professor
				of East Asian Languages and Cultures at Washington University in St. Louis. His research
				brings together social and intellectual history, the history of science and technology,
				material culture, and digital humanities.
			</p>

			<p class="mt-4 border-l border-current pl-4 text-[0.95em]">
				Affiliate Faculty, Comparative Literature and Thought and Department of History; Head of the
				Korean Section.
			</p>

			<p class="mt-6">
				His first book, <i>By Virtue of Craft: Sciences of Making in Chosŏn Korea</i> (University of Chicago
				Press, August 2027), recasts the relationship between technical knowledge and statecraft in Korean
				history. Combining archival research with material analysis and experimental reconstruction, it
				examines how artisans and experts recorded and theorized their knowledge of making. The book argues
				that these “sciences of making” took shape through changing political and moral commitments to
				useful knowledge and good government.
			</p>

			<p class="mt-6">
				Kang is currently working on two new book projects. <i>The Practical Age</i> examines how
				practical knowledge and expertise acquired new moral and intellectual authority in
				eighteenth-century Korea within a broader global turn toward usefulness.
				<i>Mr. Five Continents</i> is an intellectual biography of the encyclopedist Yi Kyugyŏng (1788–1856),
				exploring his efforts to master global knowledge of geography, technology, and the natural world
				from his study in provincial Korea.
			</p>

			<p class="mt-6">
				Raised in Guatemala City, Kang earned his BA at Emory University and his PhD in History and
				East Asian Languages at Harvard University. Before joining WashU in 2021, he held a D. Kim
				Foundation Postdoctoral Fellowship in the Department of the History of Science and
				Technology at Johns Hopkins University.
			</p>

			<p class="mt-8 border-t border-current pt-6">
				Kang’s research received the 2021 Turriano Prize and the 2021 ICAS prize for the best
				humanities dissertation in English. He held an
				<a href="https://www.acls.org/" target="_blank"
					>American Council of Learned Societies Fellowship</a
				>
				in 2023–24 and serves as co-chair of the History of Science Society’s Forum for the History of
				Science in Asia.
			</p>
		</div>

		<figure class="min-h-[32rem] overflow-hidden self-stretch">
			<img src={profile} alt="Hyeok Hweon Kang" class="h-full w-full object-cover object-center" />
		</figure>
	</div>
</div>
