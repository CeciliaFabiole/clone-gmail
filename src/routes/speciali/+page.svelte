<script>
	import Navbar from '$lib/navbar.svelte';
	import Sidebar from '$lib/sidebar.svelte';
</script>

<div class="h-screen bg-[#F5F8FC] p-4">
	<Navbar />
	<div class="flex h-5/6 w-full ">
		<Sidebar />
		<div class=" w-10/12 overflow-y-auto rounded-md bg-[#FFFFFF]" />
		<div class="width:1/12" />
	</div>
</div>
