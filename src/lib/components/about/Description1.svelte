<script lang="ts">
	// import profile from '$lib/media/p.webp';
	const profile: string = 'https://ik.imagekit.io/easton/hhkang/images/Profile1.jpg';
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
	<div class="w-[70vw] h-[90vh] overflow-hidden pt-20">
		<div class="w-full h-12/12 flex">
			<div
				class="w-[50%] h-full text-base 2xl:text-[1.2rem] flex items-start font-crimson pr-2 prose prose-light"
			>
				<div>
					Professor H. H. Kang grew up in Guatemala City, Guatemala. After completing secondary
					school there, he studied at Emory University and Harvard University, where he earned his
					Ph.D. in History and East Asian Languages. He joined the WashU faculty in 2021 as
					<a href="https://ealc.wustl.edu/" target="_blank"
						>Assistant Professor of East Asian Language and Cultures
					</a>, from Johns Hopkins University where he held a D. Kim Foundation Postdoctoral
					Fellowship in the Department of the History of Science and Technology in 2020–21.
					<br /><br />

					Kang’s first book, under contract with the University of Chicago Press, examines how
					artisans and “ingeniators” (leaders of artisans) shaped a vibrant culture of material
					design and knowledge-making in partnership with the Chosŏn Korean (1392–1910) state. His
					research on this subject has received international awards including the 2021
					International Committee on the History of Technology Turriano Prize and the 2021
					International Council of Asia Scholars Book Prize (English—Best Dissertation in the
					Humanities).

					<br /><br />
					Kang is in the early stages of writing two other books on Korean science.
					<i>Working Wisdom</i>
					examines eighteenth-century army men, rustic scholars, and noblewomen who contributed to a practical
					turn in Korean learning, by translating foreign knowledge into “everyday technologies” ranging
					from cooking and husbandry to medicine and magic.
					<i>Mr. Five Continents</i> centers Yi Kyugyŏng (1788–1856), a rustic bibliophile whose
					works were written under his style name “Five Continents,” embodying his ambition to
					master global science and technology from his provincial study on the eve of high
					imperialism.

					<br /><br />
					<!-- Kang maintains wide-ranging research and teaching interests in early modern science and technology, -->
					<!-- material culture studies, digital humanities, and global history. His works have appeared in -->
					<!-- <a -->
					<!-- 	href="https://www.journals.uchicago.edu/doi/abs/10.1086/718283?journalCode=isis" -->
					<!-- 	target="_blank">Isis</a -->
					<!-- >, -->
					<!-- <a -->
					<!-- 	href="https://www.tandfonline.com/doi/full/10.1080/07341512.2022.2153206" -->
					<!-- 	target="_blank">History and Technology</a -->
					<!-- >, -->
					<!-- <a href="https://muse.jhu.edu/pub/5/article/957972/pdf" target="_blank" -->
					<!-- 	>Journal of World History</a -->
					<!-- >, -->
					<!-- <a href="https://culturalanalytics.org/article/id/1299/" target="_blank" -->
					<!-- 	>Journal of Cultural Analytics</a -->
					<!-- >, and -->
					<!-- <a -->
					<!-- 	href="https://read.dukeupress.edu/journal-of-asian-studies/article-abstract/83/1/116/384189/Kingpins-at-CourtContraband-Diplomacy-between?redirectedFrom=fulltext" -->
					<!-- 	target="_blank">Journal of Asian Studies</a -->
					<!-- > -->
					<!-- , among others. -->
					<!---->
					<!-- <br /><br /> -->
					<!-- Kang was an -->
					<!-- <a href="https://www.acls.org/" target="_blank" -->
					<!-- 	>American Council of Learned Societies Fellow -->
					<!-- </a> -->
					<!-- in 2023–24. He is currently serving as co-chair of the Forum for the History of Science in Asia -->
					<!-- at the -->
					<!-- <a href="https://hssonline.org/" target="_blank">History of Science Society</a>. -->
					<!-- <a href="https://ealc.wustl.edu/" target="_blank">East Asian Languages and Cultures</a> -->
				</div>
			</div>

			<figure class="w-[50%] h-full pr-0">
				<img src={profile} alt="Saltpeter" class="object-cover h-full float-right" />
			</figure>
		</div>
	</div>
</div>
