<script lang="ts">
	import '../../app.css';
	import TeachingMobile from '$lib/mobile/TeachingMobile.svelte';
	import Footer from '$lib/components/overlay/Footer.svelte';

	const textColor: string = '#aeb4ae';

	let { children } = $props();
</script>

<link
	rel="preload"
	as="font"
	href="/fonts/tny/TNY.woff2"
	type="font/woff2"
	crossorigin="anonymous"
/>

<div class="hidden lg:flex">
	{@render children()}
</div>

<div class="flex lg:hidden flex-col w-screen">
	<TeachingMobile {textColor} />
	<div class="h-56 w-full">
		<Footer load={true} bg={'#121212'} text={'#aeb4ae'} dark={true} />
	</div>
</div>
