<script>
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
	<div class="my-5 flex items-center">
		<button class="absolute h-16 w-40 rounded-2xl bg-[#C2E7FE] p-3 hover:shadow-lg " on:click
			>Scrivi</button
		>
		<PencilOutline
			class="relative top-0 left-0 mx-5"
			color="black"
			{size}
			{width}
			{height}
			{viewBox}
		/>
	</div>

	<div class="mt-10 text-lg leading-10">
		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full p-5 hover:bg-[#D3E2FD]">
			<StarOutline {size} width="1.5em" {height} {viewBox} />
			<p><a href="/">Posta in arrivo</a></p>
		</div>

		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full p-5 hover:bg-[#D3E2FD]">
			<StarOutline {size} width="1.5em" {height} {viewBox} />
			<p><a href="/speciali">Speciali</a></p>
		</div>
		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full p-5 hover:bg-[#D3E2FD]">
			<StarOutline {size} width="1.5em" {height} {viewBox} />
			<p><a href="">Importanti</a></p>
		</div>
		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full p-5 hover:bg-[#D3E2FD]">
			<StarOutline {size} width="1.5em" {height} {viewBox} />
			<p><a href="/inviati">Inviati</a></p>
		</div>

		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full p-5 hover:bg-[#D3E2FD]">
			<FileOutline {size} width="1.5em" {height} {viewBox} />
			<p><a href="">Bozze</a></p>
		</div>
		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full p-5 hover:bg-[#D3E2FD]">
			<StarOutline {size} width="1.5em" {height} {viewBox} />
			<p><a href="">Cestino</a></p>
		</div>
	</div>
</div>
