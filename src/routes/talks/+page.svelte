<script lang="ts">
	import Logo from "$lib/components/overlay/Logo.svelte";
	import Tabs from "$lib/components/overlay/Tabs.svelte";
	import TextSlideY from "$lib/components/effects/TextSlideY.svelte";
	import { upcomingTalks, recordedTalks, talkPosters } from "$lib/constants/talks";

	const ink = "#121212";
	const mist = "#aeb4ae";

</script>

<svelte:head>
	<title>Talks — H. H. Kang</title>
	<meta
		name="description"
		content="Upcoming and recorded talks by historian H. H. Kang, with a selected poster archive."
	/>
</svelte:head>

<div class="talks-page min-h-screen overflow-x-hidden bg-[#121212] text-[#aeb4ae]">
	<Logo overlayColor={mist} />
	<Tabs overlayColor={mist} backgroundColor={ink} />

	<header
		class="mx-auto max-w-[1600px] px-8 pt-36 pb-12 md:px-12 md:pt-40 lg:px-20 lg:pb-16"
	>
		<div class="grid w-full gap-8 lg:grid-cols-12 lg:items-end">
			<div class="lg:col-span-12">
				<h1
					class="font-baskervville text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.9] font-normal tracking-[-0.07em] text-[#e6e6e6]"
				>
					<TextSlideY text="Talks" center={false} distance="3rem" />
				</h1>
				<p class="font-crimson mt-7 max-w-2xl text-xl leading-relaxed md:text-2xl">Selected lectures and presentations by H. H. Kang</p>
			</div>
		</div>
	</header>

	<main>
		<section aria-labelledby="upcoming-heading" class="border-y border-[#aeb4ae]/30 bg-[#d8d9d2] text-[#121212]">
			<div class="mx-auto max-w-[1600px] px-8 py-8 md:px-12 lg:px-20 lg:py-10">
				<h2 id="upcoming-heading" class="font-jws mb-6 text-xs tracking-[0.24em]">UPCOMING</h2>
				{#each upcomingTalks as talk, i}
					<article class="grid gap-3 py-6 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-8 {i > 0 ? 'border-t border-[#121212]/20' : ''}">
						<p class="font-crimson text-base italic text-[#49544c] md:pt-1">{talk.date}</p>
						<div class="max-w-4xl">
							<h3 class="font-baskervville text-2xl leading-[1.15] tracking-[-0.02em] md:text-3xl lg:text-4xl">{talk.title}</h3>
							<p class="font-crimson mt-3 text-lg leading-relaxed text-[#49544c]">{talk.venue}</p>
							{#if talk.image}
								<img src={talk.image} alt={talk.title} class="mt-4 h-auto max-w-full md:max-w-xs" />
							{/if}
							{#if talk.href}
								<a href={talk.href} target="_blank" rel="noreferrer" class="font-jws mt-4 inline-block text-xs tracking-[0.12em] underline decoration-[#49544c]/40 underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4">View event details ↗</a>
							{:else}
								<p class="font-crimson mt-4 text-sm italic text-[#49544c]">Event details forthcoming.</p>
							{/if}
						</div>
					</article>
				{/each}
			</div>
		</section>

		<section aria-labelledby="recordings-heading" class="mx-auto max-w-[1600px] px-8 py-14 md:px-12 lg:px-20 lg:py-20">
			<div class="mb-4 flex flex-wrap items-baseline justify-between gap-4 border-b border-[#aeb4ae]/30 pb-5">
				<h2 id="recordings-heading" class="font-baskervville text-4xl text-[#e6e6e6] md:text-5xl">Watch</h2>
				<p class="font-jws text-xs tracking-[0.2em]">SELECTED RECORDINGS</p>
			</div>
			{#each recordedTalks as talk, i}
				<article class="grid gap-4 py-8 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-8 {i > 0 ? 'border-t border-[#aeb4ae]/20' : ''}">
					<p class="font-crimson text-base italic md:pt-1">{talk.year.length === 4 ? talk.year : 'Selected lecture'}</p>
					<div class="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_14rem] xl:gap-10">
						<div>
							<h3 class="font-baskervville max-w-3xl text-2xl leading-[1.15] tracking-[-0.02em] text-[#e6e6e6] md:text-3xl lg:text-4xl">{talk.title}</h3>
							<p class="font-crimson mt-3 text-lg leading-relaxed">{talk.venue}</p>
							<a href={talk.href} target="_blank" rel="noreferrer" class="font-jws mt-5 inline-block text-xs tracking-[0.12em] text-[#d8d9d2] underline decoration-[#aeb4ae]/50 underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4">{talk.href.includes('/results?') ? 'Find on YouTube' : 'Watch recording'} ↗</a>
						</div>
						<a href={talk.href} target="_blank" rel="noreferrer" aria-label={'View ' + talk.title} class="block w-full max-w-xs overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4">
							<img src={talk.image} alt="" loading="lazy" class="aspect-video w-full object-cover opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0" />
						</a>
					</div>
				</article>
			{/each}
		</section>

		<section class="bg-[#20221f] px-8 py-24 md:px-12 lg:px-20 lg:py-36">
			<div class="mx-auto max-w-[1600px]">
				<div class="mb-16 grid gap-6 lg:grid-cols-2 lg:items-end">
					<h2 class="font-baskervville text-5xl text-[#e6e6e6] md:text-7xl">Poster archive</h2>
					<p class="font-crimson max-w-md text-xl leading-snug lg:justify-self-end">
						A visual record of past lectures, workshops, and conversations.
					</p>
				</div>
				<div class="poster-grid grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
					{#each talkPosters as poster, i}
						<article
							class="poster poster--{poster.tone} flex aspect-[3/4] flex-col justify-between p-7 text-[#121212] shadow-2xl transition duration-500 hover:-translate-y-2"
						>
							<div
								class="font-jws flex justify-end border-b border-current pb-3 text-[0.65rem] tracking-[0.2em]"
							>
								<span>0{i + 1}</span>
							</div>

							<div class="flex items-center justify-center my-0">
								<img
									src={poster.image}
									alt={poster.title}
									class="max-h-[85%] w-auto shadow-md border border-black/10"
								/>
							</div>

							<div class="border-t border-current pt-4">
								<h3 class="font-baskervville text-xl leading-tight tracking-tight mb-2">
									{poster.title}
								</h3>
								<p class="font-jws text-[0.65rem] tracking-[0.16em]">{poster.series}</p>
								<p class="font-crimson mt-1 text-sm leading-tight">{poster.institution}</p>
								<p class="font-baskervville mt-4 text-xl">{poster.date}</p>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	.poster--sage {
		background: #aeb4ae;
	}
	.poster--clay {
		background: #bd6e52;
	}
	.poster--paper {
		background: #ded9cc;
	}
	.poster:nth-child(even) {
		margin-top: 2.5rem;
	}
	@media (max-width: 639px) {
		.poster:nth-child(even) {
			margin-top: 0;
		}
	}
</style>
