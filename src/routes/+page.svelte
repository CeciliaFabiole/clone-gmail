<script>
	// @ts-nocheck
	import Email from '$lib/Email.svelte';
	import { starred } from '$lib/stores/content.js';
	import { emails } from '$lib/stores/email.js';

	export let data = {};
	// console.log('data', data);
	$emails = [...data.emailList];
	// console.log('emailsimport:', $emails);
	// console.log('starred', $starred);

	function handleRemove(id) {
		$starred = $starred.filter((item) => item.id !== id);
		$emails = $emails.filter((item) => item.id !== id);
	}

	function handleSpecialEmail(e, id, email) {
		// console.log('event', e);
		let special = e.detail.special;
		// console.log('special', special);
		if (special) {
			$starred = [...$starred, email];
			// console.log('starred1', $starred);
		} else {
			$starred = $starred.filter((item) => item.id !== id);
		}
	}
	// $: console.log($starred.find((item) => item.id === 1) !== undefined);
</script>

<div>
	{#if $emails.length > 0}
		{#each $emails as email}
			<Email
				{email}
				on:delete={() => handleRemove(email.id)}
				on:special={(e) => handleSpecialEmail(e, email.id, email)}
				special={$starred.find((item) => item.id === email.id) !== undefined}
			/>
		{/each}
	{/if}
</div>
