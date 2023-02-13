<script>
	// @ts-nocheck
	import Email from '$lib/Email.svelte';
	import { starred } from '$lib/stores/newemail.js';

	export let data = {};
	export let emails = data.emailList;
	// console.log('emailsimport:', emails);
	console.log('starred', $starred);
	function handleRemove(i) {
		let newEmailList = [...emails];
		newEmailList.splice(i, 1);
		emails = [...newEmailList];
	}

	function handleSpecialEmail(e, i) {
		console.log(e);
		let special = e.detail.special;
		console.log(special);
		if (special === true) {
			$starred = [...$starred, emails[i]];
			console.log('starred1', $starred);
		}
		if (special === false) {
			let newStarred = [...$starred];
			newStarred.splice(i, 1);
			$starred = [...newStarred];
		}
	}
</script>

<div>
	<!-- {#if emails.length > 0} -->
	{#each emails as email, i}
		<Email {email} on:delete={() => handleRemove(i)} on:special={(e) => handleSpecialEmail(e, i)} />
	{/each}
	<!-- {/if} -->
</div>

<style>
</style>
