<script lang="ts">
	import Logo from "$lib/components/overlay/Logo.svelte";
	import Tabs from "$lib/components/overlay/Tabs.svelte";
	import TextSlideY from "$lib/components/effects/TextSlideY.svelte";
	import { upcomingTalks, recordedTalks, talkPosters } from "$lib/constants/talks";
	import { fade } from "svelte/transition";

	const ink = "#121212";
	const mist = "#aeb4ae";

	let selectedIndex: number = $state(-1);

	function onMouseEnter(index: number) {
		selectedIndex = index;
	}

	function onMouseLeave() {
		selectedIndex = -1;
	}
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
		class="mx-auto flex min-h-[68vh] max-w-[1600px] items-end px-8 pt-36 pb-16 md:px-12 lg:px-20 lg:pb-24"
	>
		<div class="grid w-full gap-8 lg:grid-cols-12 lg:items-end">
			<div class="lg:col-span-12">
				<p class="font-jws mb-5 text-xs tracking-[0.3em]">LECTURES · CONVERSATIONS · COLLOQUIA</p>
				<h1
					class="font-baskervville text-[clamp(5rem,15vw,14rem)] leading-[0.68] font-normal tracking-[-0.07em] text-[#e6e6e6]"
				>
					<TextSlideY text="Talks" center={false} distance="5rem" />
				</h1>
			</div>
		</div>
	</header>

	<main>
		<section class="border-y border-[#aeb4ae]/30 bg-[#d8d9d2] text-[#121212]">
			<div class="mx-auto max-w-[1600px]">
				{#each upcomingTalks as talk, i}
					<div class="grid grid-cols-1 lg:grid-cols-12 {i > 0 ? \"border-t border-[#121212]/25\" : \"\"}">
						<div
							class="border-b border-[#121212]/25 p-8 md:p-12 lg:col-span-4 lg:border-r lg:border-b-0 lg:p-16"
						>
							<p class="font-jws text-xs tracking-[0.28em]">UPCOMING</p>
							<p class="font-crimson mt-24 text-lg italic lg:mt-48">{talk.date}</p>
							
							{#if talk.image}
								<div class="mt-8 overflow-hidden border border-[#121212]/20 shadow-sm">
									<img src={talk.image} alt={talk.title} class="w-full h-auto grayscale" />
								</div>
							{/if}
						</div>
						<div class="p-8 md:p-12 lg:col-span-8 lg:p-16">
							<p class="font-jws text-xs tracking-[0.24em]">{talk.venue.toUpperCase()}</p>
							<h2
								class="font-baskervville mt-12 max-w-4xl text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl xl:text-8xl"
							>
								{talk.title}
							</h2>
							<div
								class="font-crimson mt-16 flex flex-wrap items-center justify-between gap-8 border-t border-[#121212]/35 pt-6 text-lg"
							>
								{#if talk.href}
									<a href={talk.href} target="_blank" rel="noreferrer" class="hover:underline underline-offset-4">
										View event details
									</a>
								{:else}
									<p>Details to be announced shortly.</p>
								{/if}
								<span aria-hidden="true" class="text-4xl">↗</span>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<section class="mx-auto max-w-[1600px] px-8 py-24 md:px-12 lg:px-20 lg:py-36">
			<div class="mb-14 flex items-end justify-between border-b border-[#aeb4ae]/30 pb-5">
				<h2 class="font-baskervville text-5xl text-[#e6e6e6] md:text-7xl">Watch</h2>
				<p class="font-jws text-xs tracking-[0.25em]">{recordedTalks.length} SELECTED TALKS</p>
			</div>
			<div class="grid gap-12 lg:grid-cols-2 lg:gap-7">
				{#each recordedTalks as talk, i}
					<a class="video-card group block" href={talk.href} target="_blank" rel="noreferrer">
						<div class="relative aspect-video overflow-hidden bg-[#292b29]">
							<img
								src={talk.image}
								alt=""
								class="h-full w-full object-cover opacity-70 grayscale transition duration-700 group-hover:scale-[1.03] group-hover:opacity-90 group-hover:grayscale-0"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"
							></div>
							<div
								class="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-black/20 text-xl text-white backdrop-blur-sm transition group-hover:bg-[#d8d9d2] group-hover:text-black"
							>
								<span class="ml-1">▶</span>
							</div>
							<span class="font-jws absolute top-5 right-5 text-xs tracking-[0.2em] text-white"
								>0{i + 1}</span
							>
						</div>
						<div class="grid grid-cols-[1fr_auto] gap-5 border-b border-[#aeb4ae]/30 py-6">
							<div>
								<h3 class="font-crimson text-2xl leading-tight text-[#e6e6e6] md:text-3xl">
									{talk.title}
								</h3>
								<p class="font-jws mt-3 text-xs tracking-[0.14em]">{talk.venue}</p>
							</div>
							<p class="font-crimson text-lg italic">{talk.year}</p>
						</div>
					</a>
				{/each}
			</div>
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
							class="relative overflow-hidden flex aspect-[3/4] flex-col justify-between p-7 text-white shadow-2xl transition duration-500 hover:-translate-y-2"
							style:background-image="url({poster.image})"
							style:background-size="cover"
							style:background-position="center"
						>
							<div class="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
							
							<div class="relative z-10 font-jws flex justify-between border-b border-white/30 pb-3 text-[0.65rem] tracking-[0.2em]">
								<span>H. H. KANG</span><span>0{i + 1}</span>
							</div>
							<h3
								class="relative z-10 font-baskervville text-[clamp(2rem,3vw,3.6rem)] leading-[0.92] tracking-[-0.04em]"
							>
								{poster.title}
							</h3>
							<div class="relative z-10 border-t border-white/30 pt-4">
								<p class="font-jws text-[0.65rem] tracking-[0.16em]">{poster.venue}</p>
								<p class="font-crimson mt-2 text-base leading-tight">{poster.location}</p>
								<p class="font-baskervville mt-6 text-2xl">{poster.date}</p>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	.poster:nth-child(even) {
		margin-top: 2.5rem;
	}
	@media (max-width: 639px) {
		.poster:nth-child(even) {
			margin-top: 0;
		}
	}
</style>
