<script lang="ts">
	import '../../app.css';
	import AboutMobile from '$lib/mobile/AboutMobile.svelte';
	import Footer from '$lib/components/overlay/Footer.svelte';

	let { children } = $props();
</script>

<div class="hidden xl:flex">
	{@render children()}
</div>

<div class="flex flex-col xl:hidden w-screen justify-center items-center bg-[#e6e6e6]">
	<AboutMobile textColor={'#121212'} backgroundColor={'#e6e6e6'} />
	<div class="h-56 w-full">
		<Footer load={true} bg={'#e6e6e6'} text={'#121212'} dark={false} />
	</div>
</div>
