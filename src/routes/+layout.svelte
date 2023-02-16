<script>
	// @ts-nocheck

	import { emails } from '$lib/stores/email';

	import '../app.postcss';
	import Navbar from '$lib/Navbar.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import NewMail from '$lib/NewMail.svelte';
	import LittleSidebar from '$lib/LittleSidebar.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	export let data = {};

	let show = false;
	function handleShow() {
		show = true;
	}
	function handleHide() {
		show = false;
	}
	let showSidebar = false;
	function handleSidebar() {
		showSidebar = !showSidebar;
		// console.log(showSidebar);
	}
	onMount(() => {
		if ($emails.length === 0) {
			$emails = [...data.emailList];
		} else {
			localStorage.setItem('Emails', JSON.stringify($emails));
		}
	});
	setContext('search', {
		data: writable([]),
		filtered: writable([]),
		search: writable('')
	});
</script>

<div class="h-screen bg-[#F5F8FC] p-4">
	<Navbar on:click={handleSidebar} />
	<div class="flex h-5/6 w-full">
		{#if showSidebar}
			<Sidebar on:click={handleShow} />
		{:else}
			<LittleSidebar on:click={handleShow} />
		{/if}

		<div class="relative w-full overflow-y-auto rounded-md bg-[#FFFFFF]">
			<slot />
		</div>
		{#if show}
			<NewMail on:click={handleHide} />
		{/if}
	</div>
</div>
