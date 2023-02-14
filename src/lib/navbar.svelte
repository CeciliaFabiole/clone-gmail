<script>
	// @ts-nocheck
	import Gmail from 'svelte-material-icons/Gmail.svelte';
	import Menu from 'svelte-material-icons/Menu.svelte';
	import Magnify from 'svelte-material-icons/Magnify.svelte';
	import HelpCircleOutline from 'svelte-material-icons/HelpCircleOutline.svelte';
	import CogOutline from 'svelte-material-icons/CogOutline.svelte';
	import Apps from 'svelte-material-icons/Apps.svelte';
	import Icon from './Icon.svelte';
	import { createSearchStore, searchHandler } from './stores/search';
	import { onDestroy } from 'svelte';

	export let data = {};
	export let emails = data.emailList;
	console.log('searchemails', emails);
	const searchPosts = emails.map((email) => ({
		...email,
		searchTerms: `${email.title} ${email.id} ${email.firstname} ${email.lastname}`
	}));
	const searchStore = createSearchStore(searchPosts);
	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));
	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="mb-5 flex items-center justify-between">
	<div class="flex w-1/4 items-center gap-2">
		<div
			class="flex items-center justify-center rounded-full hover:bg-[#E7EAED] md:h-10 md:w-10 lg:h-14 lg:w-14"
		>
			<button on:click><Icon icon={Menu} /></button>
		</div>
		<Icon icon={Gmail} />
		<h1 class="md:text-sm lg:text-2xl">Gmail</h1>
	</div>
	<div class="flex h-16 items-center sm:w-2/4">
		<input
			class="absolute h-12 rounded-md bg-[#E9F1FB] p-3 sm:w-2/4 sm:pl-10 lg:pl-16"
			placeholder="Cerca nella posta"
			type="search"
			bind:value={$searchStore.search}
		/>

		<div
			class="relative top-0 left-0 mx-2 flex items-center justify-center rounded-full hover:bg-[#E7EAED] md:h-10 md:w-10 lg:h-14 lg:w-14"
		>
			<Icon icon={Magnify} />
		</div>
	</div>
	<!-- <div class="absolute z-40 h-96 w-1/3 overflow-y-scroll rounded-lg bg-white p-5">
		{#each $searchStore.filtered as email}
			<div>
				<h2>{email.firstname} {email.lastname}</h2>
				<p>{email.title}</p>
			</div>
		{/each}
	</div> -->

	<div class="flex items-center justify-end sm:w-1/4">
		<div
			class="flex items-center justify-center rounded-full hover:bg-[#E7EAED] md:h-10 md:w-10 lg:h-14 lg:w-14"
		>
			<Icon icon={HelpCircleOutline} />
		</div>
		<div
			class="flex items-center justify-center rounded-full hover:bg-[#E7EAED] md:h-10 md:w-10 lg:h-14 lg:w-14"
		>
			<Icon icon={CogOutline} />
		</div>
		<div
			class="flex items-center justify-center rounded-full hover:bg-[#E7EAED] md:h-10 md:w-10 lg:h-14 lg:w-14"
		>
			<Icon icon={Apps} />
		</div>
		<div
			class="flex items-center justify-center rounded-full hover:bg-[#E7EAED] md:h-10 md:w-10 lg:h-14 lg:w-14"
		>
			<div class="h-10 w-10 rounded-full bg-[#5f6367]" />
		</div>
	</div>
</div>
