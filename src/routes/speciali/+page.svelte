<script>
	// @ts-nocheck

	import { starred } from '$lib/stores/content.js';
	import Email from '$lib/Email.svelte';
	import { browser } from '$app/environment';

	$starred;
	console.log('starred in special', $starred);

	function handleRemove(i) {
		let newStarred = [...$starred];
		newStarred.splice(i, 1);
		$starred = [...newStarred];
	}

	browser && localStorage.setItem('newSpecial', JSON.stringify($starred));
</script>

{#each $starred as email, i}
	<Email {email} on:delete={() => handleRemove(i)} special={true} />

	<hr />
{/each}
