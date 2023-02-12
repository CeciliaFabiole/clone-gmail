<script>
	// @ts-nocheck

	import Gmail from 'svelte-material-icons/Gmail.svelte';
	import Menu from 'svelte-material-icons/Menu.svelte';
	import Magnify from 'svelte-material-icons/Magnify.svelte';
	import HelpCircleOutline from 'svelte-material-icons/HelpCircleOutline.svelte';
	import CogOutline from 'svelte-material-icons/CogOutline.svelte';
	import Apps from 'svelte-material-icons/Apps.svelte';
	import Icon from './Icon.svelte';
	// import { createSearchStore } from './stores/search';

	export let data = {};
	// export let emails = data.emails;
	// console.log(data);
	// console.log(emails);
	// const searchPosts = emails.map((email) => ({
	// 	...email,
	// 	searchTerms: `${email.title} ${email.userId}`
	// }));
	// const searchStore = createSearchStore(searchPosts);
</script>

<div class="mb-5 flex items-center">
	<div class="flex w-2/12 items-center gap-2">
		<div class="mr-3 flex h-14 w-14 items-center justify-center rounded-full hover:bg-[#E7EAED]">
			<Icon icon={Menu} />
		</div>
		<Icon icon={Gmail} />
		<h1 class="text-2xl">Gmail</h1>
	</div>
	<div class="flex w-8/12 items-center">
		<input
			class="absolute h-16 w-1/3 rounded-md bg-[#E9F1FB] p-3 pl-20"
			placeholder="Cerca nella posta"
		/>
		<!-- <pre>{JSON.stringify($searchStore.data, null, 2)}</pre> -->
		<div
			class="relative top-0 left-0 mx-2 flex h-14 w-14 items-center justify-center rounded-full hover:bg-[#E7EAED]"
		>
			<Icon icon={Magnify} />
		</div>
	</div>

	<div class="flex w-2/12 items-center justify-end gap-3">
		<div class="flex h-14 w-14 items-center justify-center rounded-full hover:bg-[#E7EAED]">
			<Icon icon={HelpCircleOutline} />
		</div>
		<div class="flex h-14 w-14 items-center justify-center rounded-full hover:bg-[#E7EAED]">
			<Icon icon={CogOutline} />
		</div>
		<div class="flex h-14 w-14 items-center justify-center rounded-full hover:bg-[#E7EAED]">
			<Icon icon={Apps} />
		</div>
		<div class="flex h-14 w-14 items-center justify-center rounded-full hover:bg-[#E7EAED]">
			<div class="h-10 w-10 rounded-full bg-[#5f6367]" />
		</div>
	</div>
</div>
