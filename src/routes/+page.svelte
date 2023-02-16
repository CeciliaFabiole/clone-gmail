<script>
	// @ts-nocheck
	import Email from '$lib/Email.svelte';
	import { starred } from '$lib/stores/content.js';
	import { emails } from '$lib/stores/email.js';
	import { getContext, onMount } from 'svelte';

	console.log('emailsimport:', $emails);

	// console.log('data', data);

	// console.log('starred', $starred);

	function handleRemove(id) {
		$starred = $starred.filter((item) => item.id !== id);
		$emails = $emails.filter((item) => item.id !== id);
		localStorage.setItem('newSpecial', JSON.stringify($starred));
		localStorage.setItem('Emails', JSON.stringify($emails));
	}

	function handleSpecialEmail(special, id, email) {
		// console.log('event', e);
		// console.log('special', special);
		if (special) {
			$starred = [...$starred, email];
			// console.log('starred1', $starred);
		} else {
			$starred = $starred.filter((item) => item.id !== id);
		}
		localStorage.setItem('newSpecial', JSON.stringify($starred));
	}

	const { filtered } = getContext('search');
	// $: console.log($starred.find((item) => item.id === 1) !== undefined);
</script>

<div>
	{#if $emails.length > 0}
		{#each $filtered as email}
			<Email
				{email}
				on:delete={() => handleRemove(email.id)}
				on:special={({ detail }) => handleSpecialEmail(detail.special, detail.id, email)}
				special={$starred.find((item) => item.id === email.id) !== undefined}
			/>
		{/each}
	{/if}
</div>
