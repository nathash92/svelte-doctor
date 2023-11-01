<script>
	import AppIcon from '$lib/components/app-icon.svelte';
	import debounce from 'lodash/debounce';

	/** @type {import('./$types').PageServerData} */
	export let data;

	let patients = data.patients || [];

	let loadingMore = false;

	/**
	 * @param {InputEvent} e
	 */
	function searchCb(e) {
		const v = e.target?.value ?? '';
		patients = data.patients.filter((x) => new RegExp(v, 'gi').test(x.name));
	}

	const onSearch = debounce(searchCb, 800);

	function loadMore() {
		loadingMore = true;
		const t = setTimeout(() => {
			patients = patients.concat(data.patients);
			loadingMore = false;
			clearTimeout(t);
		}, 1000);
	}
</script>

<div>
	<div class="mb-6">
		<input
			type="text"
			placeholder="Search by Name"
			class="input input-bordered w-full"
			on:input={onSearch}
		/>
	</div>

	<div class="grid grid-cols-4 gap-6 mb-10">
		{#each patients as p}
			<div class="text-center border rounded p-4">
				<div class="avatar">
					<div class="w-24 rounded-full">
						<img src="/imgs/person2.jpg" alt="img" />
					</div>
				</div>
				<div class="text-lg font-semibold mb-1">
					{p.name}
				</div>
				<div class="text-sm mb-1">
					<span class="font-semibold">ID:</span> <span class="text-gray-500">{p.id}</span>
				</div>
				<div class="text-sm text-gray-500">
					<AppIcon icon="ion:location-outline" />
					{p.location}
				</div>
				<div class="border-t my-3" />
				<div class="text-sm">
					<div class="flex mb-2">
						<div class="font-semibold">Mobile</div>
						<div class="text-right flex-grow text-gray-500">
							{p.mobile}
						</div>
					</div>
					<div class="flex mb-2">
						<div class="font-semibold">Age</div>
						<div class="text-right flex-grow text-gray-500">
							{p.age}
						</div>
					</div>
					<div class="flex">
						<div class="font-semibold">Blood Group</div>
						<div class="text-right flex-grow text-gray-500">
							{p.blood_group}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="text-center py-2">
		<button class="btn btn-sm btn-outline" disabled={loadingMore} on:click={loadMore}>
			{#if loadingMore}
				 <span class="loading loading-spinner"></span>
			{/if}
			Load More
		</button>
	</div>
</div>
