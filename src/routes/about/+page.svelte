<script lang="ts">
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import Logo from '$lib/components/overlay/Logo.svelte';
	const hhkangBG: string =
		'https://ik.imagekit.io/easton/hhkang/images/HHKang%20BG.webp?updatedAt=1754094500655';
	const hhkangCutout: string =
		'https://ik.imagekit.io/easton/hhkang/images/HHKang%20Cutout.webp?updatedAt=1754094499447';
	const hhkangSteam: string =
		'https://ik.imagekit.io/easton/hhkang/images/HHKang%20Steam%20Cutout.webp?updatedAt=1754094498589';
	// import hhkangCutout from '$lib/media/HHKang Cutout.webp';
	// import hhkangBG from '$lib/media/HHKang BG.webp';
	// import hhkangSteam from '$lib/media/HHKang Steam Cutout.webp';
	import { onMount, onDestroy, tick } from 'svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';
	import TitleWords from '$lib/components/about/TitleWords.svelte';
	import Description1 from '$lib/components/about/Description1.svelte';
	import Description2 from '$lib/components/about/Description2.svelte';
	import Description3 from '$lib/components/about/Description3.svelte';
	import Loading from '$lib/components/overlay/Loading.svelte';
	import NavUi from '$lib/components/about/NavUI.svelte';
	import TextSlideY from '$lib/components/effects/TextSlideY.svelte';
	import Footer from '$lib/components/overlay/Footer.svelte';

	const preloadList = [hhkangCutout, hhkangBG, hhkangSteam];
	let amountLoaded: number = $state(0);

	let visible: boolean = $state(false);
	let innerHeight: number = $state(0);
	const textColor: string = '#aeb4ae';

	let scrollY = $state(0);
	let lenis: any;
	let snap: any;
	let progress: number = $state(0);

	let selectedIndex: number = $state(0);
	let maxIndex: number = $state(1);
	const page1Lines: Array<string> = ['HUMANITIES', 'SCIENCE', 'KOREA'];
	let page1Load: boolean = $state(false);
	let page1Content: boolean = $state(false);
	const page2Lines: Array<string> = ['MATERIAL_CULTURE'];
	let page2Load: boolean = $state(false);
	let page2Content: boolean = $state(false);
	const page3Lines: Array<string> = ['DIGITAL_HUMANITIES'];
	let page3Load: boolean = $state(false);
	let page3Content: boolean = $state(false);
	let page4Load: boolean = $state(false);
	let page4Content: boolean = $state(false);

	$effect(() => {
		// Page 0
		if (0 <= scrollY && scrollY <= innerHeight) {
			// selectedIndex = 0;
			if (innerHeight * 0.9 <= scrollY && scrollY <= innerHeight * 0.99) {
				page1Content = true;
			} else if (scrollY == innerHeight) {
				page2Load = true;
				maxIndex = Math.max(maxIndex, 2);
			}

			// Page 1
		} else if (innerHeight < scrollY && scrollY <= innerHeight * 2) {
			// selectedIndex = 1;
			if (innerHeight * 1.9 <= scrollY && scrollY <= innerHeight * 1.99) {
				page2Content = true;
			} else if (scrollY == innerHeight * 2) {
				page3Load = true;
				maxIndex = Math.max(maxIndex, 3);
			}

			// Page 2
		} else if (innerHeight * 2 < scrollY && scrollY <= innerHeight * 3) {
			// selectedIndex = 2;
			if (innerHeight * 2.9 <= scrollY && scrollY <= innerHeight * 2.99) {
				page3Content = true;
			} else if (scrollY == innerHeight * 3) {
				page4Load = true;
				maxIndex = Math.max(maxIndex, 4);
			}
		} else if (innerHeight * 3 < scrollY && scrollY <= innerHeight * 4) {
			if (innerHeight * 3.1 <= scrollY && scrollY <= innerHeight * 3.99) {
				page4Content = true;
			}
		}
	});

	function indexScrollTo(indexTo: number): boolean {
		if (indexTo > maxIndex || indexTo < 0) return false;
		lenis.scrollTo(indexTo * innerHeight, { lock: true });
		return true;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowUp' && selectedIndex > 0) {
			e.preventDefault();
			if (indexScrollTo(selectedIndex - 1)) selectedIndex--;
		} else if (e.key === 'ArrowDown' && selectedIndex < maxIndex) {
			e.preventDefault();
			if (indexScrollTo(selectedIndex + 1)) selectedIndex++;
		}
	}

	async function preload(srcs: Array<string>) {
		await Promise.all(
			srcs.map(
				(src) =>
					new Promise((resolve, reject) => {
						const img = new Image();
						img.onload = resolve;
						img.onerror = reject;
						img.src = src;
						amountLoaded++;
					})
			)
		);
	}

	onMount(async () => {
		window.scrollTo(0, 0);
		lenis = new Lenis({
			autoRaf: true
		});
		lenis.on('scroll', (e: any) => {
			scrollY = e.animatedScroll;
			progress = e.progress;
		});
		await preload(preloadList);
		visible = true;
		await tick();

		setTimeout(() => {
			page1Load = true;
		}, 500);
	});

	onDestroy(() => {
		if (lenis) lenis.destroy();
		if (snap) snap.destroy();
	});
</script>

<svelte:window on:keydown={handleKeydown} bind:innerHeight />

{#if visible}
	<Logo overlayColor={'#e6e6e6'} sticky={true} {scrollY} />
	<Tabs overlayColor={'#e6e6e6'} />
	<div
		data-scroll-container
		class="dark min-h-screen flex flex-col w-[100%] bg-[#121212]"
		style:color={textColor}
	>
		<div class="max-h-screen w-full overflow-hidden relative">
			<figure class="w-full">
				<img src={hhkangBG} alt="HHKang BG" class="object-cover w-full" />
			</figure>

			<figure
				class="absolute -bottom-[16vh] left-0 w-full"
				style="transform: translateY({scrollY * 0.2}px);"
			>
				<img src={hhkangCutout} alt="HHKang Cutout" class="w-full" />
			</figure>

			<figure
				class="absolute -bottom-[16vh] right-0 w-full"
				style="transform: translateY({scrollY * 0.4}px);"
			>
				<img src={hhkangSteam} alt="HHKang Steam" class="w-full" />
			</figure>
			<TitleWords
				color={'#e6e6e6'}
				{scrollY}
				lines={page1Lines}
				delay={100}
				load={progress <= 0.05}
			/>
			<NavUi index={0} dark={true} load={page1Load && progress <= 0.05} scrollTo={indexScrollTo} />
		</div>

		<div class="h-screen w-full bg-[#e6e6e6] text-[#121212] relative">
			<Description1 overlayColor={'#121212'} />
			<NavUi
				index={1}
				dark={false}
				load={page1Content}
				unload={page2Content}
				scrollTo={indexScrollTo}
			/>
		</div>

		{#if page2Load}
			<div class="h-screen w-full bg-black text-[#aeb4ae] relative">
				<Description3 overlayColor={'#aeb4ae'} />
				<TitleWords lines={page3Lines} load={page2Content} size={'9vw'} />
				<NavUi
					index={2}
					dark={true}
					load={page2Content}
					unload={page3Content}
					scrollTo={indexScrollTo}
				/>
			</div>
		{/if}

		{#if page3Load}
			<div class="h-screen w-full bg-[#121212] text-[#aeb4ae] relative">
				<Description2 overlayColor={'#aeb4ae'} />
				<TitleWords lines={page2Lines} load={page3Content} />
				<NavUi index={3} dark={true} load={page3Content} unload={true} scrollTo={indexScrollTo} />
			</div>
		{/if}

		{#if page4Load}
			<div class="h-96 w-full">
				<Footer load={page4Content} />
			</div>
		{/if}
	</div>
{:else}
	<Loading progress={Math.round((amountLoaded / preloadList.length) * 100)} />
{/if}
