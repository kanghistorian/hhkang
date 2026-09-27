<script lang="ts">
	import Footer from '$lib/components/overlay/Footer.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-[#121212]">
	{@render children()}
	<div class="h-56 w-full xl:h-80">
		<Footer load={true} bg={'#121212'} text={'#aeb4ae'} dark={true} />
	</div>
</div>
