<script lang="ts">
	import '../../app.css';
	import Footer from '$lib/components/overlay/Footer.svelte';

	let { children } = $props();
</script>

<div class="flex flex-col">
	{@render children()}

	<div class="h-56 xl:h-96 w-full">
		<Footer load={true} bg={'#121212'} text={'#aeb4ae'} dark={true} />
	</div>
</div>
