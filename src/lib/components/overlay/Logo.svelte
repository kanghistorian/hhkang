<script lang="ts">
	import TextSlideX from '../effects/TextSlideX.svelte';

	const text: string = 'HH';

	let {
		overlayColor = '#AEB4AE',
		sticky = false,
		scrollY = 0
	}: {
		overlayColor: string;
		scrollY?: number;
		sticky?: boolean;
	} = $props();
</script>

{#if !sticky}
	<a
		aria-label="Home Logo Button"
		class="absolute font-baskervville text-3xl 2xl:text-5xl top-6 2xl:top-8 left-8 xl:left-12 z-50
          transition-colors duration-1000 ease-out select-none"
		href="/"
		style:color={overlayColor}
	>
		<TextSlideX {text} />
	</a>
{:else}
	<a
		aria-label="Home Logo Button"
		class="absolute font-baskervville text-3xl 2xl:text-5xl top-6 2xl:top-8 left-8 xl:left-12
          z-50 mix-blend-difference select-none"
		href="/"
		style="transform:translateY({scrollY}px);"
		style:color={overlayColor}
	>
		<TextSlideX {text} />
	</a>
{/if}
