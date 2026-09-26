<script lang="ts">
	import CloseIcon from '$lib/icons/CloseIcon.svelte';
	import MenuIcon from '$lib/icons/MenuIcon.svelte';
	import { onDestroy } from 'svelte';
	import TextSlideY from '../effects/TextSlideY.svelte';
	import TextSlideX from '../effects/TextSlideX.svelte';

	let {
		overlayColor = '#aeb4ae',
		backgroundColor = '#121212',
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
	let sidebarFont: string = $state('0px');

	function sidebarClick() {
		if (sidebarOpen) {
			sidebarOpen = false;
			setTimeout(() => {
				sidebarFont = '0px';
			}, 300);
		} else {
			sidebarOpen = true;
			sidebarFont = '1.5rem';
		}
	}

	const staggerAmount: number = stagger ? 0 : 100;

	onDestroy(() => {
		sidebarOpen = false;
	});
</script>

{#if cutoff}
	<div
		class="w-screen h-24 fixed top-0 left-0 z-30 bg-[rgba(255, 255, 255, 0.20)]
          backdrop-blur-[2px]"
	></div>
{/if}

<div
	class="absolute top-0 right-0 select-none flex flex-col lg:hidden items-center h-screen text-2xl
          justify-center z-40 transition-[width] duration-1000 ease-out text-jws space-y-8"
	style:width={sidebarOpen ? '100vw' : '0vw'}
	style:background-color={backgroundColor}
	style:color={overlayColor}
	style:font-size={sidebarFont}
>
	<a aria-label="About" href="/about" rel="noopener noreferrer">
		<TextSlideX text={'ABOUT'} load={sidebarOpen} />
	</a>
	<a aria-label="Teaching" href="/teaching" rel="noopener noreferrer">
		<TextSlideX text={'TEACHING'} load={sidebarOpen} />
	</a>
	<a aria-label="Gallery" href="/gallery" rel="noopener noreferrer">
		<TextSlideX text={'GALLERY'} load={sidebarOpen} />
	</a>
	<a aria-label="Works" href="/works" rel="noopener noreferrer">
		<TextSlideX text={'WORKS'} load={sidebarOpen} />
	</a>
</div>

<div
	class="absolute top-8 right-8 select-none flex lg:hidden items-end z-50
         transition-colors duration-1000 ease-out"
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
	class="absolute font-jws text-md space-x-12 text-sm 2xl:text-base top-8 2xl:top-12 right-12 select-none hidden
        lg:flex items-end leading-4 z-50 transition-colors duration-1000 ease-out"
	style:color={overlayColor}
>
	<a aria-label="About" href="/about" rel="noopener noreferrer">
		<TextSlideY text={'ABOUT'} {delay} />
	</a>
	<a aria-label="Teaching" href="/teaching" rel="noopener noreferrer">
		<TextSlideY text={'TEACHING'} delay={delay + staggerAmount * 2} />
	</a>
	<a aria-label="Gallery" href="/gallery" rel="noopener noreferrer">
		<TextSlideY text={'GALLERY'} delay={delay + staggerAmount * 1} />
	</a>
	<a aria-label="Works" href="/works" rel="noopener noreferrer">
		<TextSlideY text={'WORKS'} delay={delay + staggerAmount * 3} />
	</a>
</div>
