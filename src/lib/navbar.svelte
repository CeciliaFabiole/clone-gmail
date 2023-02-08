<script>
	import Gmail from 'svelte-material-icons/Gmail.svelte';
	import Menu from 'svelte-material-icons/Menu.svelte';
	import Magnify from 'svelte-material-icons/Magnify.svelte';
	import HelpCircleOutline from 'svelte-material-icons/HelpCircleOutline.svelte';
	import CogOutline from 'svelte-material-icons/CogOutline.svelte';
	import Apps from 'svelte-material-icons/Apps.svelte';
	import PencilOutline from 'svelte-material-icons/PencilOutline.svelte';
	import StarOutline from 'svelte-material-icons/StarOutline.svelte';
	import FileOutline from 'svelte-material-icons/FileOutline.svelte';
	export let size = '2em';
	export let width = size;
	export let height = size;
	export let color = '#5f6367';
	export let viewBox = '0 0 24 24';
</script>

<div class="mb-5 flex items-center">
	<div class="flex w-2/12 items-center gap-5">
		<Menu {color} {size} {width} {height} {viewBox} />
		<Gmail {color} {size} {width} {height} />
		<h1 class="text-2xl">Gmail</h1>
	</div>
	<div class="flex w-9/12 items-center">
		<input
			class="absolute w-1/3 rounded-md bg-[#E9F1FB] p-3 pl-14"
			placeholder="Cerca nella posta"
		/>
		<Magnify class="relative top-0 left-0 ml-3" {color} {size} {width} {height} {viewBox} />
	</div>

	<div class="flex items-center gap-5">
		<HelpCircleOutline class="icons-hover" {color} {size} {width} {height} {viewBox} />
		<CogOutline {color} {size} {width} {height} {viewBox} />
		<Apps {color} {size} {width} {height} {viewBox} />
		<div class="h-10 w-10 rounded-full bg-[#5f6367]" />
	</div>
</div>
