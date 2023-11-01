<script>
	/** @type {import('./$types').PageServerData}*/
	export let data;

	let activeTabIndex = 0;

	const tabs = [
		{
			name: 'Basic Info',
			key: 'basic'
		},
		{
			name: 'Appointments',
			key: 'appointments'
		},
		{
			name: 'Medical History',
			key: 'history'
		},
		{
			name: 'Billing',
			key: 'billing'
		}
	];

	/**
	 * @param {number} i
	 */
	function onTabClick(i) {
		activeTabIndex = i;
	}
</script>

<div class="flex items-center mb-6">
	<div class="me-3">
		<img src="/imgs/person2.jpg" alt="person" class="w-40 rounded" />
	</div>
	<div>
		<div class="font-bold text-2xl mb-2">John Doe</div>
		<div class="text-sm">
			<span class="font-semibold">Patient ID:</span> P00192
		</div>
	</div>
</div>

<div class="text-center">
	<div class="tabs tabs-boxed">
		{#each tabs as t, i}
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a
				href="javascript:;"
				class="tab"
				class:tab-active={activeTabIndex == i}
				on:click={() => onTabClick(i)}
			>
				{t.name}
			</a>
		{/each}
	</div>
</div>

<div class="py-6">
	{#if tabs[activeTabIndex].key == 'basic'}
		<div class="grid grid-cols-4 gap-4">
			<div>
				<div class="mb-1 font-semibold">Age</div>
				<div>52</div>
			</div>
			<div>
				<div class="mb-1 font-semibold">Gender</div>
				<div>Male</div>
			</div>
			<div>
				<div class="mb-1 font-semibold">Mobile</div>
				<div>123456789</div>
			</div>
			<div>
				<div class="mb-1 font-semibold">Email</div>
				<div>someexample@gmail.com</div>
			</div>
			<div>
				<div class="mb-1 font-semibold">Blood Group</div>
				<div>A+</div>
			</div>
		</div>
	{/if}

	{#if tabs[activeTabIndex].key == 'billing'}
		<div class="grid grid-cols-4 gap-4 mb-5">
			<div class="border rounded px-6 py-3">
				<div class="mb-2 text-lg font-semibold">Total Paid</div>
				<div class="text-2xl font-bold mb-1">Rs.10,000</div>
				<div class="text-sm text-gray-500">40 bills</div>
			</div>

			<div class="border rounded px-6 py-3">
				<div class="mb-2 text-lg font-semibold">Total UnPaid</div>
				<div class="text-2xl font-bold mb-1 text-red-500">Rs.5,000</div>
				<div class="text-sm text-gray-500">5 bills</div>
			</div>

			<div class="border rounded px-6 py-3">
				<div class="mb-2 text-lg font-semibold">Over Due</div>
				<div class="text-2xl font-bold mb-1 text-red-500">Rs.3,000</div>
				<div class="text-sm text-gray-500">5 bills</div>
			</div>
		</div>

		<div class="font-semibold mb-3">
			Payment History
		</div>

		<div class="tabs tabs-boxed">
			<a href="javascript:;" class="tab tab-active">
				All 
			</a>
			<a href="javascript:;" class="tab">
				UnPaid
			</a>
			<a href="javascript:;" class="tab">
				Over Due
			</a>
		</div>

		<div class="overflow-x-auto">
			<table class="table">
				<!-- head -->
				<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Job</th>
						<th>Favorite Color</th>
					</tr>
				</thead>
				<tbody>
					<!-- row 1 -->
					<tr class="bg-base-200">
						<th>1</th>
						<td>Cy Ganderton</td>
						<td>Quality Control Specialist</td>
						<td>Blue</td>
					</tr>
					<!-- row 2 -->
					<tr>
						<th>2</th>
						<td>Hart Hagerty</td>
						<td>Desktop Support Technician</td>
						<td>Purple</td>
					</tr>
					<!-- row 3 -->
					<tr>
						<th>3</th>
						<td>Brice Swyre</td>
						<td>Tax Accountant</td>
						<td>Red</td>
					</tr>
				</tbody>
			</table>
		</div>



	{/if}
</div>
