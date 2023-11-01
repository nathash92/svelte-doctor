<script>
	import DateInput from '$lib/components/date-input.svelte';

	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const dtConfig = {
		noCalendar: true,
		enableTime: true,
		dateFormat: 'h:i K'
	};

	const timings = [
		{
			start: '08:00 am',
			end: '01:00 pm'
		},
		{
			start: '02:00 pm',
			end: '04:00 pm'
		},
		{
			start: '06:00 pm',
			end: '07:00 pm'
		}
	];

	let activeTabIndex = 0;

	/** @param {number} i*/
	function onTabClick(i) {
		activeTabIndex = i;
	}
</script>

<div class="join join-vertical lg:join-horizontal mb-5">
	{#each days as d, i}
		<button
			class="btn join-item"
			class:btn-primary={activeTabIndex == i}
			on:click={() => onTabClick(i)}>{d}</button
		>
	{/each}
</div>

<div class="grid grid-cols-3 gap-4 mb-5">
	<div>
		<div class="form-control">
			<label class="label-text">Start Time</label>
			<DateInput class="w-full input-sm" config={dtConfig} />
		</div>
	</div>
	<div>
		<div class="form-control">
			<label class="label-text">End Time</label>
			<DateInput class="w-full input-sm" config={dtConfig} />
		</div>
	</div>
	<div class="self-end">
		<button class="btn btn-success btn-sm"> Add </button>
	</div>
</div>

<div class="overflow-x-auto">
	<table class="table">
		<!-- head -->
		<thead>
			<tr>
				<th>Start Time</th>
				<th>End Time</th>				
			</tr>
		</thead>
		<tbody>
			{#each timings as t}
				<tr>
					<td>
						{t.start}
					</td>
					<td>
						{t.end}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
