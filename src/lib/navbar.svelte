<script>
	import Gmail from 'svelte-material-icons/Gmail.svelte';
	import Menu from 'svelte-material-icons/Menu.svelte';
	import Magnify from 'svelte-material-icons/Magnify.svelte';
	import HelpCircleOutline from 'svelte-material-icons/HelpCircleOutline.svelte';
	import CogOutline from 'svelte-material-icons/CogOutline.svelte';
	import Apps from 'svelte-material-icons/Apps.svelte';
	export let size = '2em';
	export let width = size;
	export let height = size;
	export let color = '#5f6367';
	export let viewBox = '0 0 24 24';

	export let data;
	console.log('datasearch:', data);
	console.log('datasearch:', data.emails);
	const searchProducts = data.emails.map((email) => ({
		...email,
		searchTerms: `${email.title} ${email.userId}`
	}));
	console.log('searchproduct:', searchProducts);
</script>

<div class="mb-5 flex items-center">
	<div class="flex w-2/12 items-center gap-2">
		<div class="mr-3 flex h-14 w-14 items-center justify-center rounded-full hover:bg-[#E7EAED]">
			<Menu {color} {size} {width} {height} {viewBox} />
		</div>
		<Gmail {color} {size} {width} {height} {viewBox} />
		<h1 class="text-2xl">Gmail</h1>
	</div>
	<div class="flex w-8/12 items-center">
		<input
			class="absolute h-16 w-1/3 rounded-md bg-[#E9F1FB] p-3 pl-20"
			placeholder="Cerca nella posta"
		/>
		<div
			class="relative top-0 left-0 mx-2 flex h-14 w-14 items-center justify-center rounded-full hover:bg-[#E7EAED]"
		>
			<Magnify {color} {size} {width} {height} {viewBox} />
		</div>
	</div>

	<div class="flex w-2/12 items-center justify-end gap-3">
		<div class="flex h-14 w-14 items-center justify-center rounded-full hover:bg-[#E7EAED]">
			<HelpCircleOutline class="icons-hover" {color} {size} {width} {height} {viewBox} />
		</div>
		<div class="flex h-14 w-14 items-center justify-center rounded-full hover:bg-[#E7EAED]">
			<CogOutline {color} {size} {width} {height} {viewBox} />
		</div>
		<div class="flex h-14 w-14 items-center justify-center rounded-full hover:bg-[#E7EAED]">
			<Apps {color} {size} {width} {height} {viewBox} />
		</div>
		<div class="flex h-14 w-14 items-center justify-center rounded-full hover:bg-[#E7EAED]">
			<div class="h-10 w-10 rounded-full bg-[#5f6367]" />
		</div>
	</div>
</div>
