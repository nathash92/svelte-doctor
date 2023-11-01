<script>
	import AppIcon from '$lib/components/app-icon.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let appointments = data.appointments;

	let loadingMore = false;

	function loadMore() {
		loadingMore = true;
		const t = setTimeout(() => {
			appointments = appointments.concat(data.appointments);
			loadingMore = false;
			clearTimeout(t);
		}, 1000);
	}
</script>

<div class="mb-6">
	<input type="text" placeholder="Search by Name" class="input input-bordered w-full" />
</div>

<div class="overflow-x-auto mb-3">
	<table class="table">
		<!-- head -->
		<thead>
			<tr>
				<th class="w-1/12">Sl No.</th>
				<th class="w-3/12">Patient</th>
				<th>Contact</th>
				<th>Requested On</th>
				<th class="w-2/12">Reason</th>
				<th>Status</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each appointments || [] as a, i}
				<tr class="text-sm hover">
					<td>
						{i + 1}
					</td>
					<td>
						<div class="flex items-center">
							<div class="me-2">
								<img src="/imgs/person2.jpg" alt="person" class="w-20 rounded" />
							</div>
							<div>
								<div class="font-semibold mb-1">{a.name}</div>
								<div class="text-xs">
									{a.location}
								</div>
							</div>
						</div>
					</td>
					<td>
						<div class="mb-1">
							<AppIcon icon="ion:call-outline" class="me-1" width={14} />
							{a.mobile}
						</div>
						<div>
							<AppIcon icon="ion:mail-outline" class="me-1" width={14} />
							{a.email}
						</div>
					</td>
					<td> 22 Jul 2023, 11:00 am </td>
					<td> Fever, headache, body pain </td>
					<td>
						<span
							class:text-primary={a.status == 'pending'}
							class:text-success={a.status == 'confirmed'}
							class:text-error={a.status == 'cancelled'}
							class="uppercase"
						>
							{a.status}
						</span>
					</td>
					<td>
						<div class="mb-3">
							<button class="w-full btn btn-xs btn-success btn-outline">Approve</button>
						</div>
						<div class="mb-3">
							<button class="w-full btn btn-xs btn-error btn-outline">Reject</button>
						</div>
						<div>
							<button class="w-full btn btn-xs btn-primary btn-outline">View</button>
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="text-center py-2">
	<button class="btn btn-sm btn-outline" disabled={loadingMore} on:click={loadMore}>
		{#if loadingMore}
			 <span class="loading loading-spinner"></span>
		{/if}
		Load More
	</button>
</div>
