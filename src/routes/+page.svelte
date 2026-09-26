<script lang="ts">
	import DescriptionOverlay from '$lib/components/overlay/DescriptionOverlay.svelte';
	import Logo from '$lib/components/overlay/Logo.svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';
	import VideoCitation from '$lib/components/overlay/VideoCitation.svelte';
	import bgvideo from '$lib/media/YZ Loop.mp4';
	import mobilebg from '$lib/media/XY Small.mp4';
	import Footer from '$lib/components/overlay/Footer.svelte';
	import { onMount } from 'svelte';

	let overlayColor: string = '#aeb4ae';

	let scrollY: number = $state(0);
	let loadedOnce: boolean = $state(false);

	function handleScroll() {
		scrollY = window.scrollY;
	}

	onMount(() => {
		setTimeout(() => {
			loadedOnce = true;
		}, 500);
	});
</script>

<svelte:window on:scroll={handleScroll} />

<div
	class="flex h-screen w-screen items-center justify-center bg-black overflow-hidden scrollbar-hidden"
>
	<div class="z-10">
		<Logo {overlayColor} />
		<Tabs {overlayColor} backgroundColor={'black'} delay={100} />
		<DescriptionOverlay {overlayColor} delay={loadedOnce ? 0 : 500} load={scrollY == 0} />
		<VideoCitation {overlayColor} delay={loadedOnce ? 0 : 500} load={scrollY == 0} />
	</div>

	<video autoplay muted loop id="bgvideo" class="absolute top-0 h-screen hidden lg:flex">
		<source src={bgvideo} type="video/mp4" />
	</video>

	<video
		autoplay
		muted
		loop
		id="mobilebg"
		class="absolute top-0 h-[100%] flex lg:hidden"
		playsinline
	>
		<source src={mobilebg} type="video/mp4" />
	</video>

	<div class="absolute w-full h-[25vh] -bottom-[25vh] left-0 bg-black">
		<Footer load={scrollY > 0} bg={'#000000'} text={'#aeb4ae'} dark={true} />
	</div>
</div>
