<script>
	import { goto } from '$app/navigation';
	import Loading from '$lib/components/overlay/Loading.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	onMount(() => {
		if (page.status === 404) {
			goto('/');
		}
	});
</script>

<Loading progress={0} />
