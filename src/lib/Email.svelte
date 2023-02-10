<script>
	// @ts-nocheck
	import Icon from './Icon.svelte';
	import TrashCanOutline from 'svelte-material-icons/TrashCanOutline.svelte';
	import StarOutline from 'svelte-material-icons/StarOutline.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	//put the data in the div
	export let email = {};
	let id = email.userId;
	let user = {};
	export async function getUsers() {
		const response = await fetch(`https://dummyjson.com/users/${id}`);
		const obj = await response.json();
		user = obj;
	}
	getUsers();

	//on hover show the trash
	let active = false;

	//delete an element
	function remove() {
		dispatch('delete');
	}
</script>

<div
	class="cursor-pointer"
	on:mouseenter={() => {
		active = true;
	}}
	on:mouseleave={() => {
		active = false;
	}}
>
	{#if !active}
		<div class="flex items-center justify-between p-3">
			<Icon icon={StarOutline} width="1.5em" />
			<div class="flex w-1/3 items-center justify-between">
				<p>{user.firstName} {user.lastName}</p>
			</div>
			<div class="flex w-1/3 items-center justify-between">
				<p>{email.title}</p>
			</div>
			<div class="flex w-1/3 items-center justify-end">
				<p>data and time</p>
			</div>
			<p />
		</div>
	{:else}
		<div
			class="flex h-16 border-spacing-1 cursor-pointer items-center justify-between border border-solid border-gray-400 p-3 shadow-lg"
		>
			<Icon icon={StarOutline} width="1.5em" />
			<div class="flex w-1/3 items-center justify-between">
				<p>{user.firstName} {user.lastName}</p>
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
