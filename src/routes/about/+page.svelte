<script lang="ts">
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import Logo from '$lib/components/overlay/Logo.svelte';
	import { onDestroy, onMount, tick } from 'svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';
	import TitleWords from '$lib/components/about/TitleWords.svelte';
	import Description1 from '$lib/components/about/Description1.svelte';
	import Description2 from '$lib/components/about/Description2.svelte';
	import Description3 from '$lib/components/about/Description3.svelte';
	import Loading from '$lib/components/overlay/Loading.svelte';
	import NavUi from '$lib/components/about/NavUI.svelte';
	import Footer from '$lib/components/overlay/Footer.svelte';

	const hhkangBG =
		'https://ik.imagekit.io/easton/hhkang/images/HHKang%20BG.webp?updatedAt=1754094500655';
	const hhkangCutout =
		'https://ik.imagekit.io/easton/hhkang/images/HHKang%20Cutout.webp?updatedAt=1754094499447';
	const hhkangSteam =
		'https://ik.imagekit.io/easton/hhkang/images/HHKang%20Steam%20Cutout.webp?updatedAt=1754094498589';
	const preloadList = [hhkangCutout, hhkangBG, hhkangSteam];
	const page1Lines = ['HUMANITIES', 'SCIENCE', 'KOREA'];
	const page2Lines = ['MATERIAL_CULTURE'];
	const page3Lines = ['DIGITAL_HUMANITIES'];

	let amountLoaded = $state(0);
	let visible = $state(false);
	let scrollY = $state(0);
	let selectedIndex = $state(0);
	let lenis: Lenis;
	let heroSection = $state<HTMLElement>();
	let biographySection = $state<HTMLElement>();
	let digitalSection = $state<HTMLElement>();
	let materialSection = $state<HTMLElement>();
	let footerSection = $state<HTMLElement>();

	function sections(): HTMLElement[] {
		return [heroSection, biographySection, digitalSection, materialSection, footerSection].filter(
			(section): section is HTMLElement => Boolean(section)
		);
	}

	function updateSelectedIndex(position: number) {
		const availableSections = sections();
		const viewportMiddle = position + window.innerHeight / 2;
		selectedIndex = availableSections.reduce(
			(current, section, index) => (section.offsetTop <= viewportMiddle ? index : current),
			0
		);
	}

	function indexScrollTo(indexTo: number): boolean {
		const target = sections()[indexTo];
		if (!target) return false;
		lenis.scrollTo(target.offsetTop, { lock: true });
		return true;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
		const nextIndex = selectedIndex + (event.key === 'ArrowDown' ? 1 : -1);
		if (nextIndex < 0 || nextIndex >= sections().length) return;
		event.preventDefault();
		indexScrollTo(nextIndex);
	}

	async function preload(srcs: string[]) {
		await Promise.all(
			srcs.map(
				(src) =>
					new Promise<void>((resolve) => {
						const img = new Image();
						img.onload = () => {
							amountLoaded++;
							resolve();
						};
						img.onerror = () => {
							amountLoaded++;
							resolve();
						};
						img.src = src;
					})
			)
		);
	}

	onMount(async () => {
		window.scrollTo(0, 0);
		lenis = new Lenis({ autoRaf: true });
		lenis.on('scroll', (event: { animatedScroll: number }) => {
			scrollY = event.animatedScroll;
			updateSelectedIndex(scrollY);
		});
		await preload(preloadList);
		visible = true;
		await tick();
		updateSelectedIndex(0);
	});

	onDestroy(() => lenis?.destroy());
</script>

<svelte:window onkeydown={handleKeydown} />

{#if visible}
	<Logo overlayColor={'#e6e6e6'} sticky={true} {scrollY} />
	<Tabs overlayColor={'#e6e6e6'} />
	<div class="dark flex min-h-screen w-full flex-col bg-[#121212] text-[#aeb4ae]">
		<section bind:this={heroSection} class="relative h-screen w-full overflow-hidden">
			<figure class="h-full w-full">
				<img src={hhkangBG} alt="HHKang background" class="h-full w-full object-cover" />
			</figure>
			<figure
				class="absolute -bottom-[16vh] left-0 w-full"
				style="transform: translateY({scrollY * 0.2}px);"
			>
				<img src={hhkangCutout} alt="Hyeok Hweon Kang" class="w-full" />
			</figure>
			<figure
				class="absolute -bottom-[16vh] right-0 w-full"
				style="transform: translateY({scrollY * 0.4}px);"
			>
				<img src={hhkangSteam} alt="Steam illustration" class="w-full" />
			</figure>
			<TitleWords
				color={'#e6e6e6'}
				{scrollY}
				lines={page1Lines}
				delay={100}
				load={selectedIndex === 0}
			/>
			<NavUi index={0} dark={true} load={selectedIndex === 0} scrollTo={indexScrollTo} />
		</section>

		<section
			bind:this={biographySection}
			class="relative min-h-screen w-full bg-[#e6e6e6] text-[#121212]"
		>
			<Description1 overlayColor={'#121212'} />
			<NavUi index={1} dark={false} load={selectedIndex === 1} scrollTo={indexScrollTo} />
		</section>

		<section bind:this={digitalSection} class="relative h-screen w-full bg-black text-[#aeb4ae]">
			<Description3 overlayColor={'#aeb4ae'} />
			<TitleWords lines={page3Lines} load={selectedIndex === 2} size={'9vw'} />
			<NavUi index={2} dark={true} load={selectedIndex === 2} scrollTo={indexScrollTo} />
		</section>

		<section
			bind:this={materialSection}
			class="relative h-screen w-full bg-[#121212] text-[#aeb4ae]"
		>
			<Description2 overlayColor={'#aeb4ae'} />
			<TitleWords lines={page2Lines} load={selectedIndex === 3} />
			<NavUi index={3} dark={true} load={selectedIndex === 3} scrollTo={indexScrollTo} />
		</section>

		<section bind:this={footerSection} class="h-96 w-full">
			<Footer load={selectedIndex === 4} />
		</section>
	</div>
{:else}
	<Loading progress={Math.round((amountLoaded / preloadList.length) * 100)} />
{/if}
