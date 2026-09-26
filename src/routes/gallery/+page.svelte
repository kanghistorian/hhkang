<script lang="ts">
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import Card from '$lib/components/gallery/Card.svelte';
	import Loading from '$lib/components/overlay/Loading.svelte';
	import Logo from '$lib/components/overlay/Logo.svelte';
	import Tabs from '$lib/components/overlay/Tabs.svelte';
	import { images } from '$lib/constants/gallery';
	import { onDestroy, onMount, tick } from 'svelte';

	let colorState = $state({
		overlayColor: '#adb5ad',
		backgroundColor: '#121212'
	});

	let visible: boolean = $state(false);
	let trackVisible: boolean = $state(false);
	let innerHeight: number = $state(0);
	let scrollY = $state(0);
	let lenis: any;
	let progress: number = $state(0);

	let cutoff: number = $state(12);

	function loadMoreImages() {
		cutoff += 12;
	}

	onMount(async () => {
		window.scrollTo(0, 0);
		lenis = new Lenis({
			autoRaf: true
		});

		lenis.on('scroll', (e: any) => {
			scrollY = e.animatedScroll;
			progress = e.progress;

			const scrollTop = e.animatedScroll;
			const scrollHeight = document.documentElement.scrollHeight;
			const buffer = innerHeight * 0.95;

			if (scrollTop + innerHeight >= scrollHeight - buffer) {
				loadMoreImages();
			}
		});

		visible = true;
		await tick();

		setTimeout(() => {
			trackVisible = true;
		}, 300);
	});

	onDestroy(() => {
		if (lenis) lenis.destroy();
	});
</script>

<svelte:window bind:innerHeight />

{#if visible}
	<Tabs overlayColor={colorState.overlayColor} />
	<Logo overlayColor={colorState.overlayColor} />

	<div
		data-scroll-container
		class="dark min-h-screen w-screen overflow-x-hidden transition-colors max-w-[100%]
            duration-1000 ease-out text-crimson py-48 px-8 scrollbar-hidden"
		style:background-color={colorState.backgroundColor}
		style:color={colorState.overlayColor}
	>
		<div
			class="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
		          xl:grid-cols-4 gap-y-32 gap-x-4"
		>
			{#each images as image, i}
				{#if trackVisible && i < cutoff}
					<Card index={i} {image} />
				{/if}
			{/each}
		</div>
	</div>
{:else}
	<Loading progress={0} />
{/if}
