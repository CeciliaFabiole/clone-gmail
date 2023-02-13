<script>
	import '../app.postcss';
	import Navbar from '$lib/Navbar.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import NewMail from '$lib/NewMail.svelte';
	import LittleSidebar from '$lib/LittleSidebar.svelte';

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
		console.log(showSidebar);
	}
</script>

<div class="h-screen bg-[#F5F8FC] p-4">
	<Navbar {data} on:click={handleSidebar} />
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
