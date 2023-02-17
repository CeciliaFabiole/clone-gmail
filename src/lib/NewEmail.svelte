<script>
	// @ts-nocheck

	import StarOutline from 'svelte-material-icons/StarOutline.svelte';
	import Icon from '$lib/Icon.svelte';
	import dayjs from 'dayjs';
	import TrashCanOutline from 'svelte-material-icons/TrashCanOutline.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let newEmail = {};
	// console.log('newEmail', newEmail);
	let now = dayjs(new Date()).format('MMM DD, YYYY hh:mm A');
	let active = false;

	//delete an element
	function remove() {
		dispatch('delete');
	}

	//put in special
	export let special = false;
	function putStar() {
		special = !special;
		dispatch('special', {
			special: special,
			id: newEmail.id
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

			<div class="flex w-1/3 items-center justify-between">
				<p>{newEmail.destinatario}</p>
			</div>
			<div class="flex w-1/3 items-center justify-between">
				<p>{newEmail.oggetto}</p>
			</div>
			<div class="flex w-1/3 items-center justify-end">
				<p>{now}</p>
			</div>
			<p />
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
				<p>{newEmail.destinatario}</p>
			</div>
			<div class="flex w-1/3 items-center justify-between">
				<p>{newEmail.oggetto}</p>
			</div>
			<div class="flex w-1/3 items-center justify-end">
				<button on:click={remove}><Icon icon={TrashCanOutline} /></button>
			</div>
		</div>
	{/if}
</div>

<hr />
