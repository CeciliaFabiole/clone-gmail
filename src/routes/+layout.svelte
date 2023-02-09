<script>
	import '../app.postcss';
	import Navbar from '$lib/Navbar.svelte';
	import Sidebar from '$lib/Sidebar.svelte';

	export let data = {};
</script>

<div class="h-screen bg-[#F5F8FC] p-4">
	<Navbar {data} />
	<div class="flex h-5/6 w-full ">
		<Sidebar />
		<div class=" w-10/12 overflow-y-auto rounded-md bg-[#FFFFFF]">
			<slot />
		</div>
		<div class="width:1/12" />
	</div>
</div>
