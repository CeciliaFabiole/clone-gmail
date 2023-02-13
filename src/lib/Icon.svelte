<script>
	// @ts-nocheck

	export let icon;
	export let size = '1.5em';
	export let width = size;
	export let height = size;
	export let color = '#5f6367';
	export let viewBox = '0 0 24 24';
	export let classes = '';
</script>

<svelte:component this={icon} {size} {width} {height} {color} {viewBox} class={classes} />
