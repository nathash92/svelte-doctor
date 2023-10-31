<script>
	let className = '';

	export { className as class };

	/**
	 * @typedef {Object} Breadcrumb
	 * @property {string} path - The redirect path
	 * @property {number} name - The name of the link
	 */

	/**
	 * @type Array<Breadcrumb>
	 */
	export let breadcrumbs = [];

	$: breadcrumbLen = breadcrumbs?.length || 0;
</script>

<div class={'text-sm breadcrumbs ' + className}>
	<ul>
		{#each (breadcrumbs || []) as b, i}
			<li>
				{#if breadcrumbLen - 1 == i}
					{b.name}
				{:else}
					<a href={b.path}>{b.name}</a>
				{/if}
			</li>
		{/each}
	</ul>
</div>
