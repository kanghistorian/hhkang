<script lang="ts">
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import '../app.css';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let { children } = $props();

	console.log('<Developed by Easton Kang>\nFullstack | Motion Engineer\nhttps://eastonkang.com');
</script>

<link
	rel="preload"
	as="font"
	href="/fonts/crimson/CrimsonText-Regular.ttf"
	type="font/ttf"
	crossorigin="anonymous"
/>

{@render children()}
