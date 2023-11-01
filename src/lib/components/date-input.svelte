<script>
	import flatpickr from 'flatpickr';
	import { onMount } from 'svelte';

	/** @type {HTMLElement}*/
	let el;

	/** @type {String}*/
	let className = '';

	export { className as class };

	/** @type {import('flatpickr/dist/types/options').BaseOptions | Object}*/
	export let config = {};

	onMount(() => {
		flatpickr(el, config || {});
	});
</script>

<!-- input-sm w-full -->
<input
	type="time"
	placeholder="Type here"
	class={'input input-bordered ' + className}
	bind:this={el}
/>
