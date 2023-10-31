<script>

	import Icon from "@iconify/svelte";

  let className = '';

  export let icon = '';

  export let width = 18;
  
  export {className as class};

</script>

<Icon {icon} class={'inline-block ' + className} inline={true} {width}></Icon> 