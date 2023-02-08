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

<div class="w-2/12">
	<div class="my-10 flex items-center">
		<button class="absolute h-16 w-40 rounded-2xl bg-[#C2E7FE] p-3">Scrivi</button>
		<PencilOutline
			class="relative top-0 left-0 mx-5"
			fill="black"
			{size}
			{width}
			{height}
			{viewBox}
		/>
	</div>
	<ul class="m-5 text-lg leading-10">
		<div class="flex items-center gap-5">
			<StarOutline {size} width="1.5em" {height} {viewBox} />
			<li><a href="/">Posta in arrivo</a></li>
		</div>

		<div class="flex items-center gap-5">
			<StarOutline {size} width="1.5em" {height} {viewBox} />
			<li><a href="/speciali">Speciali</a></li>
		</div>
		<div class="flex items-center gap-5">
			<StarOutline {size} width="1.5em" {height} {viewBox} />
			<li><a href="">Importanti</a></li>
		</div>
		<div class="flex items-center gap-5">
			<StarOutline {size} width="1.5em" {height} {viewBox} />
			<li><a href="/inviati">Inviati</a></li>
		</div>

		<div class="flex items-center gap-5">
			<FileOutline {size} width="1.5em" {height} {viewBox} />
			<li><a href="">Bozze</a></li>
		</div>
		<div class="flex items-center gap-5">
			<StarOutline {size} width="1.5em" {height} {viewBox} />
			<li><a href="">Cestino</a>Cestino</li>
		</div>
	</ul>
	<p>Etichette</p>
</div>
