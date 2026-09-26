<script lang="ts">
	import TextSlideY from '../effects/TextSlideY.svelte';

	let {
		load = true,
		bg = '#121212',
		text = '#aeb4ae',
		dark = true
	}: {
		load: boolean;
		bg?: string;
		text?: string;
		dark?: boolean;
	} = $props();

	let mailingLines: Array<string> = [
		'WASHINGTON UNIVERSITY',
		'MSC 111-107-115',
		'ONE BROOKINGS DRIVE',
		'ST.LOUIS, MO 63130-4899'
	];
</script>

{#if load}
	<div class={`w-full bg-[${bg}] text-[${text}] flex flex-col h-full`}>
		<div class="w-full flex items-center justify-between md:justify-center md:px-8 lg:px-24 h-full">
			<div
				class="font-jws text-xs lg:text-sm w-1/2 md:w-1/3 h-full flex items-center justify-center"
			>
				<div class="flex flex-col items-start justify-center">
					<div
						class={`text-sm md:text-md lg:text-lg mb-4 text-left prose ${dark ? 'prose-dark' : 'prose-light'}`}
					>
						<TextSlideY text={'CONTACT INFO:'} stagger={true} letterDelay={10} distance={'3vh'} />
					</div>
					<div>
						<a
							aria-label="Email"
							href="mailto:hhkang@wustl.edu"
							target="_blank"
							rel="noopener noreferrer"
						>
							<TextSlideY text={'HHKANG@WUSTL.EDU'} stagger={true} letterDelay={10} delay={100} />
						</a>
					</div>
					<div>&nbsp;</div>
					<div>&nbsp;</div>
					<div>&nbsp;</div>
				</div>
			</div>

			<!-- <div -->
			<!-- 	class="font-jws text-xs lg:text-sm w-1/2 md:w-1/3 h-full flex items-center justify-center" -->
			<!-- > -->
			<!-- 	<div class="flex flex-col items-start justify-center"> -->
			<!-- 		<div class="text-sm md:text-md lg:text-lg mb-4"> -->
			<!-- 			<TextSlideY -->
			<!-- 				text={'MAILING ADDRESS:'} -->
			<!-- 				stagger={true} -->
			<!-- 				letterDelay={10} -->
			<!-- 				distance={'3vh'} -->
			<!-- 			/> -->
			<!-- 		</div> -->
			<!-- 		{#each mailingLines as l, i} -->
			<!-- 			<div> -->
			<!-- 				<TextSlideY text={l} stagger={true} letterDelay={10} delay={100 + 50 * i} /> -->
			<!-- 			</div> -->
			<!-- 		{/each} -->
			<!-- 	</div> -->
			<!-- </div> -->

			<div
				class="font-jws text-xs lg:text-sm w-1/2 md:w-1/3 h-full items-center justify-center flex"
			>
				<div class="flex flex-col items-start justify-center">
					<div class="text-sm md:text-md lg:text-lg mb-4">
						<TextSlideY text={'LINKS:'} stagger={true} letterDelay={10} distance={'3vh'} />
					</div>
					<a
						aria-label="WashU"
						href="https://ealc.wustl.edu/people/hyeok-hweon-kang"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TextSlideY text={'WASHU'} stagger={true} letterDelay={10} delay={100} />
					</a>
					<a
						aria-label="GOOGLE SCHOLAR"
						href="https://scholar.google.com/citations?user=pflXcdgAAAAJ&hl=en"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TextSlideY text={'GOOGLE SCHOLAR'} stagger={true} letterDelay={10} delay={150} />
					</a>
					<a
						aria-label="ACADEMIA"
						href="https://wustl.academia.edu/hhkang"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TextSlideY text={'ACADEMIA'} stagger={true} letterDelay={10} delay={200} />
					</a>
					<a
						aria-label="ORCID"
						href="https://orcid.org/0000-0002-0893-0427"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TextSlideY text={'ORCID'} stagger={true} letterDelay={10} delay={250} />
					</a>
				</div>
			</div>
		</div>

		<div class="w-full items-end justify-start hidden sm:flex text-xs pl-4 pb-4 opacity-40">
			<a
				aria-label="DESIGN & DEV BY EASTON"
				href="https://eastonkang.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<TextSlideY text={'DESIGN & DEV BY EASTON'} stagger={true} letterDelay={10} delay={200} />
			</a>
		</div>
	</div>
{/if}
