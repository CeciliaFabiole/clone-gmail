<script>
	import PencilOutline from 'svelte-material-icons/PencilOutline.svelte';
	import StarOutline from 'svelte-material-icons/StarOutline.svelte';
	import FileOutline from 'svelte-material-icons/FileOutline.svelte';
	import SquareOutline from 'svelte-material-icons/SquareOutline.svelte';
	import ArrowRightThick from 'svelte-material-icons/ArrowRightThick.svelte';
	import DeleteVariant from 'svelte-material-icons/DeleteVariant.svelte';
	import TicketOutline from 'svelte-material-icons/TicketOutline.svelte';
	import Icon from './Icon.svelte';
</script>

<div class="w-1/3 px-2 md:text-xs lg:text-lg">
	<div class="flex items-center">
		<button class="absolute h-16 rounded-2xl bg-[#C2E7FE] p-5 pl-10 hover:shadow-lg " on:click
			>Scrivi</button
		>
		<Icon classes="relative top-0 left-0" color="black" icon={PencilOutline} />
	</div>

	<div class="mt-10 leading-10">
		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full px-2 hover:bg-[#D3E2FD]">
			<Icon classes="relative top-0 left-0" color="black" icon={SquareOutline} width="1.5em" />

			<p><a href="/">Posta in arrivo</a></p>
		</div>

		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full px-2 hover:bg-[#D3E2FD]">
			<Icon classes="relative top-0 left-0" color="black" icon={StarOutline} width="1.5em" />

			<p><a href="/speciali">Speciali</a></p>
		</div>
		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full px-2 hover:bg-[#D3E2FD]">
			<Icon classes="relative top-0 left-0" color="black" icon={TicketOutline} width="1.5em" />

			<p><a href="">Importanti</a></p>
		</div>
		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full px-2 hover:bg-[#D3E2FD]">
			<Icon classes="relative top-0 left-0" color="black" icon={ArrowRightThick} width="1.5em" />

			<p><a href="/inviati">Inviati</a></p>
		</div>

		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full px-2  hover:bg-[#D3E2FD]">
			<Icon classes="relative top-0 left-0" color="black" icon={FileOutline} width="1.5em" />
			<p><a href="">Bozze</a></p>
		</div>
		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full px-2  hover:bg-[#D3E2FD]">
			<Icon classes="relative top-0 left-0" color="black" icon={DeleteVariant} width="1.5em" />
			<p><a href="">Cestino</a></p>
		</div>
	</div>
</div>
