<script>
	// @ts-nocheck

	export let size = '2em';
	export let width = size;
	export let height = size;
	export let color = '#5f6367';
	export let viewBox = '0 0 24 24';
	import StarOutline from 'svelte-material-icons/StarOutline.svelte';

	export let email = {};

	let id = email.userId;
	let user = {};
	export async function getUsers() {
		const response = await fetch(`https://dummyjson.com/users/${id}`);
		const obj = await response.json();
		user = obj;
	}
	getUsers();

	export function putInSpecial() {}
</script>

<div class="flex h-14 items-center justify-between p-3">
	<StarOutline {size} width="1.5em" {height} {viewBox} />
	<div class="flex w-1/3 items-center justify-between p-3">
		<p>{user.firstName} {user.lastName}</p>
	</div>
	<div class="flex w-1/3 items-center justify-between p-3">
		<p>{email.title}</p>
	</div>
	<div class="flex w-1/3 items-center justify-end p-3">
		<p>data and time</p>
	</div>
	<p />
</div>
<hr />
