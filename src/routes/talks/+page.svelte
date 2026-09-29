<script lang="ts">
	import { talksPosters } from '\$lib/constants/talks';
</script>

<svelte:head>
	<title>Talks | Archive</title>
</svelte:head>

<div class="container mx-auto px-4 py-12">
	<header class="mb-12">
		<h1 class="text-4xl font-bold mb-4">Talks</h1>
		<p class="text-gray-600">Archival record of presentations and guest lectures.</p>
	</header>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each talksPosters as poster}
			<div class="group relative bg-white border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-lg">
				<!-- Image Section -->
				<div class="aspect-[3/4] overflow-hidden bg-gray-100">
					{#if poster.link}
						<a href={poster.link} target="_blank" rel="noopener noreferrer" class="block w-full h-full">
							<img 
								src={poster.image} 
								alt="Poster for {poster.title}" 
								class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
						</a>
					{:else}
						<img 
							src={poster.image} 
							alt="Poster for {poster.title}" 
							class="w-full h-full object-cover"
						/>
					{/if}
				</div>

				<!-- Content Section -->
				<div class="p-6">
					<div class="flex justify-between items-start mb-2">
						<h3 class="text-xl font-semibold">{poster.title}</h3>
						<span class="text-sm text-gray-500">{poster.year}</span>
					</div>
					
					{#if poster.description}
						<p class="text-gray-600 mb-4 text-sm">{poster.description}</p>
					{/if}

					{#if poster.link}
						<a 
							href={poster.link} 
							target="_blank" 
							rel="noopener noreferrer" 
							class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
						>
							{poster.linkLabel || 'View original material'}
							<svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
