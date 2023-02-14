<script>
	// @ts-nocheck
	import Icon from './Icon.svelte';
	import TrashCanOutline from 'svelte-material-icons/TrashCanOutline.svelte';
	import StarOutline from 'svelte-material-icons/StarOutline.svelte';
	import { createEventDispatcher } from 'svelte';
	import { createSearchStore } from './stores/search';

	const dispatch = createEventDispatcher();

	//put the data in the div
	export let email = {};
	// console.log('email :', email);

	//on hover show the trash
	let active = false;

	//delete an element
	function remove() {
		dispatch('delete');
	}
	//put in special
	export let special = false;
	// $: console.log(special);
	function putStar() {
		special = !special;
		dispatch('special', {
			special: special
		});
	}
</script>

<div
	class="cursor-pointer sm:text-xs lg:text-lg"
	on:mouseenter={() => {
		active = true;
	}}
	on:mouseleave={() => {
		active = false;
	}}
>
	{#if !active}
		<div class="flex items-center justify-between p-3">
			{#if !special}
				<button on:click={putStar}><Icon icon={StarOutline} width="1.5em" /></button>
			{:else}
				<button on:click={putStar}><Icon icon={StarOutline} width="1.5em" color="yellow" /></button>
			{/if}
			{#each $searchStore.filtered as email}
				<div class="flex w-1/3 items-center justify-between">
					<p>{email.firstname} {email.lastname}</p>
				</div>
				<div class="flex w-1/3 items-center justify-between">
					<p>{email.title}</p>
				</div>
				<div class="flex w-1/3 items-center justify-end">
					<p>data and time</p>
				</div>
				<p />
			{/each}
		</div>
	{:else}
		<div
			class="flex h-16 border-spacing-1 cursor-pointer items-center justify-between border border-solid border-gray-400 p-3 shadow-lg"
		>
			{#if !special}
				<button on:click={putStar}><Icon icon={StarOutline} width="1.5em" /></button>
			{:else}
				<button on:click={putStar}><Icon icon={StarOutline} width="1.5em" color="yellow" /></button>
			{/if}
			<div class="flex w-1/3 items-center justify-between">
				<p>{email.firstname} {email.lastname}</p>
			</div>
			<div class="flex w-1/3 items-center justify-between">
				<p>{email.title}</p>
			</div>
			<div class="flex w-1/3 items-center justify-end">
				<button on:click={remove}><Icon icon={TrashCanOutline} /></button>
			</div>
			<p />
		</div>
	{/if}
</div>
<hr />
