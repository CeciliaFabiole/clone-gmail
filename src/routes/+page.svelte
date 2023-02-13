<script>
	// @ts-nocheck
	import Email from '$lib/Email.svelte';
	// import { starred } from '$lib/stores/newemail.js';

	export let data = {};
	export let emails = data.emailList;
	// console.log('emailsimport:', emails);

	function handleRemove(i) {
		let newEmailList = [...emails];
		newEmailList.splice(i, 1);
		emails = [...newEmailList];
	}
	export let special = false;
	function handleSpecialEmail() {
		special = !special;
		// 	if (!special) {
		// 		$starred = [...$starred, email[i]];
		// 	}
		// 	if (special) {
		// 		let newStarred = [...$starred];
		// 		newStarred.splice(i, 1);
		// 		$starred = [...newStarred];
		// 	}
	}
</script>

<div>
	{#if emails.length > 0}
		{#each emails as email, i}
			<Email
				{email}
				on:delete={() => handleRemove(i)}
				on:special={handleSpecialEmail}
				bind:special
			/>
		{/each}
	{/if}
</div>

<style>
</style>
