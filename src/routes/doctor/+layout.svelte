<script>
	import AppIcon from '$lib/components/app-icon.svelte';

	const menus = [
		{
			name: 'Appointments',
			icon: 'ion:calendar-outline',
			redirect: {
				path: '/doctor/appointments'
			}
		},
		{
			name: 'My Patients',
			icon: 'ion:people-outline',
			redirect: {
				path: '/doctor/my-patients'
			}
		},
		{
			name: 'Schedule Timings',
			icon: 'ion:alarm-outline'
		},
		{
			name: 'Available Timings',
			icon: 'ion:time-outline'
		},
		{
			name: 'Invoices',
			icon: 'ion:document-text-outline'
		},
		{
			name: 'Accounts',
			icon: 'ion:key-outline'
		},
		{
			name: 'Reviews',
			icon: 'ion:star-outline'
		},
		{
			name: 'Messages',
			icon: 'ion:chatbubbles-outline'
		},
		{
			name: 'Profile Settings',
			icon: 'ion:person-outline'
		},
		{
			name: 'Social Media',
			icon: 'ion:share-social-outline'
		},
		{
			name: 'Change Password',
			icon: 'ion:lock-closed-outline'
		},
		{
			name: 'Logout',
			icon: 'ion:log-out-outline'
		}
	];

	const menusCount = menus.length;
</script>

<div class="flex py-4">
	<div class="w-3/12 me-6">
		<div class="border sticky top-20">
			<div class="border-b p-3 text-center">
				<div class="avatar">
					<div class="w-36 border rounded-full">
						<img src="/imgs/doctor.jpg" alt="doctor" />
					</div>
				</div>

				<div class="mb-1 font-semibold">
					Dr. Sarah Mitchell, MD
				</div>

				<div class="text-sm text-gray-500">
					Doctor of Philosophy (PhD) (MD)
				</div>
			</div>
			<div>
				{#each menus as m, i}
					<a
						href={m.redirect?.path}
						class="p-3 hover:text-primary text-gray-600 text-sm block"
						class:border-b={i != menusCount - 1}
					>
						<AppIcon icon={m.icon} class="me-1" />
						{m.name}
					</a>
				{/each}
			</div>
		</div>
	</div>
	<div class="w-9/12">
		<slot />
	</div>
</div>
