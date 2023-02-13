<script>
	// @ts-nocheck

	import { starred } from '$lib/stores/newemail.js';
	import Email from '$lib/Email.svelte';

	$starred;

	function handleRemove(i) {
		let newStarred = [...$starred];
		newStarred.splice(i, 1);
		$starred = [...newStarred];
	}
</script>

{#each $starred as email, i}
	<Email {email} on:delete={() => handleRemove(i)} special={true} />
	<hr />
{/each}
