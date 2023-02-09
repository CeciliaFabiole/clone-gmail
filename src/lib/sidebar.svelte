<script>
	import PencilOutline from 'svelte-material-icons/PencilOutline.svelte';
	import StarOutline from 'svelte-material-icons/StarOutline.svelte';
	import FileOutline from 'svelte-material-icons/FileOutline.svelte';
	import Icon from './Icon.svelte';
</script>

<div class="w-2/12">
	<div class="my-5 flex items-center">
		<button class="absolute h-16 w-40 rounded-2xl bg-[#C2E7FE] p-3 hover:shadow-lg " on:click
			>Scrivi</button
		>
		<Icon classes="relative top-0 left-0 mx-5" color="black" icon={PencilOutline} />
	</div>

	<div class="mt-10 text-lg leading-10">
		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full p-5 hover:bg-[#D3E2FD]">
			<Icon classes="relative top-0 left-0 mx-5" color="black" icon={StarOutline} width="1.5em" />

			<p><a href="/">Posta in arrivo</a></p>
		</div>

		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full p-5 hover:bg-[#D3E2FD]">
			<Icon classes="relative top-0 left-0 mx-5" color="black" icon={StarOutline} width="1.5em" />

			<p><a href="/speciali">Speciali</a></p>
		</div>
		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full p-5 hover:bg-[#D3E2FD]">
			<Icon classes="relative top-0 left-0 mx-5" color="black" icon={StarOutline} width="1.5em" />

			<p><a href="">Importanti</a></p>
		</div>
		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full p-5 hover:bg-[#D3E2FD]">
			<Icon classes="relative top-0 left-0 mx-5" color="black" icon={StarOutline} width="1.5em" />

			<p><a href="/inviati">Inviati</a></p>
		</div>

		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full p-5 hover:bg-[#D3E2FD]">
			<Icon classes="relative top-0 left-0 mx-5" color="black" icon={FileOutline} width="1.5em" />
			<p><a href="">Bozze</a></p>
		</div>
		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full p-5 hover:bg-[#D3E2FD]">
			<Icon classes="relative top-0 left-0 mx-5" color="black" icon={StarOutline} width="1.5em" />
			<p><a href="">Cestino</a></p>
		</div>
	</div>
</div>
