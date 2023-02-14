<script>
	// @ts-nocheck
	import Email from '$lib/Email.svelte';
	import { starred } from '$lib/stores/content.js';

	export let data = {};
	export let emails = data.emailList;
	console.log('emailsimport:', emails);
	console.log('starred', $starred);
	function handleRemove(i) {
		let newEmailList = [...emails];
		newEmailList.splice(i, 1);
		emails = [...newEmailList];
	}

	function handleSpecialEmail(e, i) {
		console.log('event', e);
		let special = e.detail.special;
		console.log('special', special);
		if (special) {
			$starred = [...$starred, emails[i]];
			console.log('starred1', $starred);
		} else {
			let newStarred = [...$starred];
			newStarred.splice(i, 1);
			$starred = [...newStarred];
		}
	}
	// $: console.log($starred.find((item) => item.id === 1) !== undefined);
</script>

<div>
	{#if emails.length > 0}
		{#each emails as email, i}
			<Email
				{email}
				on:delete={() => handleRemove(i)}
				on:special={(e) => handleSpecialEmail(e, i)}
				special={$starred.find((item) => item.id === email.id) !== undefined}
			/>
		{/each}
	{/if}
</div>

<style>
</style>
