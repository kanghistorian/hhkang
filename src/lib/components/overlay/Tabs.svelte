<script lang="ts">
	import CloseIcon from "$lib/icons/CloseIcon.svelte";
	import MenuIcon from "$lib/icons/MenuIcon.svelte";
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

	let sidebarOpen = $state(false);
	let mobileMenu: HTMLDialogElement;

	function closeMenu() {
		mobileMenu.close();
	}

	function openMenu() {
		mobileMenu.showModal();
		sidebarOpen = true;
	}

	const staggerAmount = $derived(stagger ? 0 : 100);

	$effect(() => {
		if (!sidebarOpen) return;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const desktop = window.matchMedia("(min-width: 1024px)");
		const onResize = () => { if (desktop.matches) closeMenu(); };
		desktop.addEventListener("change", onResize);
		return () => {
			document.body.style.overflow = previousOverflow;
			desktop.removeEventListener("change", onResize);
		};
	});

</script>

{#if cutoff}
	<div
		class="bg-[rgba(255, 255, 255, 0.20)] fixed top-0 left-0 z-30 h-24 w-screen
          backdrop-blur-[2px]"
	></div>
{/if}

<dialog
	bind:this={mobileMenu}
	id="mobile-navigation"
	aria-label="Main navigation"
	onclose={() => { sidebarOpen = false; }}
	class="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 p-0 backdrop:bg-black/50"
	style:background-color={backgroundColor}
	style:color={overlayColor}
>
	<button type="button" aria-label="Close navigation" onclick={closeMenu}
		class="absolute top-[22px] right-[22px] flex min-h-11 min-w-11 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-4">
		<CloseIcon {overlayColor} />
	</button>
	<nav aria-label="Mobile" class="font-jws flex min-h-full flex-col items-center justify-center gap-4 px-8 py-24 text-2xl">
		{#each [{ label: "About", href: "/about" }, { label: "Research", href: "/works" }, { label: "Teaching", href: "/teaching" }, { label: "Talks", href: "/talks" }, { label: "Gallery", href: "/gallery" }] as item}
			<a aria-label={item.label} href={item.href} onclick={closeMenu}
				class="flex min-h-11 items-center px-4 focus-visible:outline-2 focus-visible:outline-offset-4">
				<TextSlideX text={item.label.toUpperCase()} load={sidebarOpen} />
			</a>
		{/each}
	</nav>
</dialog>

<div class="absolute top-[22px] right-[22px] z-50 lg:hidden">
	<button type="button" aria-label="Open navigation" aria-expanded={sidebarOpen}
		aria-controls="mobile-navigation" onclick={openMenu}
		class="flex min-h-11 min-w-11 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-4">
		<MenuIcon {overlayColor} />
	</button>
</div>

<div
	class="font-jws text-md absolute top-8 right-12 z-50 hidden items-end space-x-12 text-sm leading-4
        transition-colors duration-1000 ease-out select-none lg:flex 2xl:top-12 2xl:text-base"
	style:color={overlayColor}
>
	<a aria-label="About" href="/about" rel="noopener noreferrer">
		<TextSlideY text={"ABOUT"} {delay} />
	</a>
	<a aria-label="Research" href="/works" rel="noopener noreferrer">
		<TextSlideY text={"RESEARCH"} delay={delay + staggerAmount * 1} />
	</a>
	<a aria-label="Teaching" href="/teaching" rel="noopener noreferrer">
		<TextSlideY text={"TEACHING"} delay={delay + staggerAmount * 2} />
	</a>
	<a aria-label="Talks" href="/talks" rel="noopener noreferrer">
		<TextSlideY text={"TALKS"} delay={delay + staggerAmount * 3} />
	</a>
	<a aria-label="Gallery" href="/gallery" rel="noopener noreferrer">
		<TextSlideY text={"GALLERY"} delay={delay + staggerAmount * 4} />
	</a>
</div>

