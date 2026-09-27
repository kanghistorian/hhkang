<script lang="ts">
	import CloseIcon from "$lib/icons/CloseIcon.svelte";
	import MenuIcon from "$lib/icons/MenuIcon.svelte";
	import { onDestroy } from "svelte";
	import TextSlideY from "../effects/TextSlideY.svelte";
	import TextSlideX from "../effects/TextSlideX.svelte";

	let {
		overlayColor = "#aeb4ae",
		backgroundColor = "#121212",
		cutoff = false,
		delay = 0,
		stagger = false
	}: {
		overlayColor: string;
		backgroundColor?: string;
		cutoff?: boolean;
		delay?: number;
		stagger?: boolean;
	} = $props();

	let sidebarOpen: boolean = $state(false);
	let sidebarFont: string = $state("0px");

	function sidebarClick() {
		if (sidebarOpen) {
			sidebarOpen = false;
			setTimeout(() => {
				sidebarFont = "0px";
			}, 300);
		} else {
			sidebarOpen = true;
			sidebarFont = "1.5rem";
		}
	}

	const staggerAmount: number = stagger ? 0 : 100;

	onDestroy(() => {
		sidebarOpen = false;
	});
</script>

{#if cutoff}
	<div
		class="bg-[rgba(255, 255, 255, 0.20)] fixed top-0 left-0 z-30 h-24 w-screen
          backdrop-blur-[2px]"
	></div>
{/if}

<div
	class="text-jws absolute top-0 right-0 z-40 flex h-screen flex-col items-center justify-center
          space-y-8 text-2xl transition-[width] duration-1000 ease-out select-none lg:hidden"
	style:width={sidebarOpen ? "100vw" : "0vw"}
	style:background-color={backgroundColor}
	style:color={overlayColor}
	style:font-size={sidebarFont}
>
	<a aria-label="About" href="/about" rel="noopener noreferrer">
		<TextSlideX text={"ABOUT"} load={sidebarOpen} />
	</a>
	<a aria-label="Teaching" href="/teaching" rel="noopener noreferrer">
		<TextSlideX text={"TEACHING"} load={sidebarOpen} />
	</a>
	<a aria-label="Works" href="/works" rel="noopener noreferrer">
		<TextSlideX text={"WORKS"} load={sidebarOpen} />
	</a>
	<a aria-label="Talks" href="/talks" rel="noopener noreferrer">
		<TextSlideX text={"TALKS"} load={sidebarOpen} />
	</a>
	<a aria-label="Gallery" href="/gallery" rel="noopener noreferrer">
		<TextSlideX text={"GALLERY"} load={sidebarOpen} />
	</a>
</div>

<div
	class="absolute top-8 right-8 z-50 flex items-end transition-colors duration-1000
         ease-out select-none lg:hidden"
>
	{#if sidebarOpen}
		<button onclick={() => sidebarClick()}>
			<CloseIcon {overlayColor} />
		</button>
	{:else}
		<button onclick={() => sidebarClick()}>
			<MenuIcon {overlayColor} />
		</button>
	{/if}
</div>

<div
	class="font-jws text-md absolute top-8 right-12 z-50 hidden items-end space-x-12 text-sm leading-4
        transition-colors duration-1000 ease-out select-none lg:flex 2xl:top-12 2xl:text-base"
	style:color={overlayColor}
>
	<a aria-label="About" href="/about" rel="noopener noreferrer">
		<TextSlideY text={"ABOUT"} {delay} />
	</a>
	<a aria-label="Teaching" href="/teaching" rel="noopener noreferrer">
		<TextSlideY text={"TEACHING"} delay={delay + staggerAmount * 2} />
	</a>
	<a aria-label="Works" href="/works" rel="noopener noreferrer">
		<TextSlideY text={"WORKS"} delay={delay + staggerAmount * 1} />
	</a>
	<a aria-label="Talks" href="/talks" rel="noopener noreferrer">
		<TextSlideY text={"TALKS"} delay={delay + staggerAmount * 3} />
	</a>
	<a aria-label="Gallery" href="/gallery" rel="noopener noreferrer">
		<TextSlideY text={"GALLERY"} delay={delay + staggerAmount * 4} />
	</a>
</div>

