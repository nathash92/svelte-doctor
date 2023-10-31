<script>
	import AppIcon from '$lib/components/app-icon.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

</script>

{#each data?.appointments ?? [] as p}
	<div class="flex p-5 border mb-4">
		<div class="me-5">
			<img src="/imgs/person2.jpg" alt="person" class="w-36 h-32 rounded" />
		</div>
		<div class="flex-grow">
			<div class="text-lg font-semibold mb-2">{p.name}</div>
			<div class="text-gray-500 text-xs">
				<div class="mb-2">
					<AppIcon icon="ion:time-outline" class="me-1" width={14} />
					<span>{p.appointmentDate}</span>
				</div>
				<div class="mb-2">
					<AppIcon icon="ion:location-outline" class="me-1" width={14} />
					<span>{p.location}</span>
				</div>
				<div class="mb-2">
					<AppIcon icon="ion:mail-outline" class="me-1" width={14} />
					{p.email}
				</div>
				<div>
					<AppIcon icon="ion:call-outline" class="me-1" width={14} />
					{p.mobile}
				</div>
			</div>
		</div>
		<div class="self-center">
			<span class="text-primary text-sm cursor-pointer"> View </span>
			<span class="mx-2"> | </span>
			<span class="text-green-500 text-sm cursor-pointer"> Accept </span>
			<span class="mx-2"> | </span>
			<span class="text-error text-sm cursor-pointer"> Cancel </span>
		</div>
	</div>
{/each}

<div class="text-center">
	<div class="join grid-cols-2 inline-grid">
		<button class="join-item btn btn-outline">Previous page</button>
		<a class="join-item btn btn-outline" href="?page=2">Next</a>
	</div>
</div>
