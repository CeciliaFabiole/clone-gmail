<script>
	import '../app.postcss';
	import Navbar from '$lib/Navbar.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import NewMail from '$lib/NewMail.svelte';

	export let data = {};

	let show = false;
	function handleShow() {
		show = true;
	}
	function handleHide() {
		show = false;
	}
</script>

<div class="h-screen bg-[#F5F8FC] p-4">
	<Navbar {data} />
	<div class="flex h-5/6 w-full">
		<Sidebar on:click={handleShow} />
		<div class="relative w-10/12 overflow-y-auto rounded-md bg-[#FFFFFF]">
			<slot />
		</div>
		{#if show}
			<NewMail on:click={handleHide} />
		{/if}
	</div>
</div>
