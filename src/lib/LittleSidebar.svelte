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

<div class="w-1/12 px-2 md:text-xs lg:text-lg">
	<div class="flex items-center">
		<button class="absolute h-12 rounded-2xl bg-[#C2E7FE] px-2 hover:shadow-lg" on:click
			><Icon classes="relative top-0 left-0" color="black" icon={PencilOutline} /></button
		>
	</div>

	<div class="mt-10 leading-10">
		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full px-2 hover:bg-[#D3E2FD]">
			<a href="/"
				><Icon
					classes="relative top-0 left-0"
					color="black"
					icon={SquareOutline}
					width="1.5em"
				/></a
			>
		</div>

		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full px-2 hover:bg-[#D3E2FD]">
			<a href="/speciali"
				><Icon classes="relative top-0 left-0" color="black" icon={StarOutline} width="1.5em" />
			</a>
		</div>
		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full px-2 hover:bg-[#D3E2FD]">
			<Icon classes="relative top-0 left-0" color="black" icon={TicketOutline} width="1.5em" />
		</div>
		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full px-2 hover:bg-[#D3E2FD]">
			<a href="/inviati"
				><Icon classes="relative top-0 left-0" color="black" icon={ArrowRightThick} width="1.5em" />
			</a>
		</div>

		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full px-2  hover:bg-[#D3E2FD]">
			<Icon classes="relative top-0 left-0" color="black" icon={FileOutline} width="1.5em" />
		</div>
		<div class="flex h-10 w-10/12 items-center gap-5 rounded-full px-2  hover:bg-[#D3E2FD]">
			<Icon classes="relative top-0 left-0" color="black" icon={DeleteVariant} width="1.5em" />
		</div>
	</div>
</div>
