<script lang="ts">
	import TextSlideY from '../effects/TextSlideY.svelte';

	let {
		text,
		color
	}: {
		text: string;
		color: string;
	} = $props();
</script>

<div class="w-72 flex text-[.8rem] justify-start font-bold" style:color>
	<TextSlideY {text} delay={0} />
</div>
