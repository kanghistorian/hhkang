<script lang="ts">
	import Footer from '$lib/components/overlay/Footer.svelte';
	import '../../app.css';

	let { children } = $props();
</script>

<div class="hidden xl:flex">
	{@render children()}
</div>

<div class="xl:hidden flex flex-col">
	{@render children()}

	<div class="h-56 w-full">
		<Footer load={true} bg={'#121212'} text={'#aeb4ae'} dark={true} />
	</div>
</div>
