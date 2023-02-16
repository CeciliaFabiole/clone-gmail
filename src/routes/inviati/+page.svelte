<script>
	// @ts-nocheck

	import { newEmails } from '$lib/stores/content.js';
	import NewEmail from '$lib/NewEmail.svelte';
	import { starred } from '$lib/stores/content.js';
	// console.log('newEmails', $newEmails);

	function handleRemove(id) {
		$starred = $starred.filter((item) => item.id !== id);
		$newEmails = $newEmails.filter((item) => item.id !== id);
		localStorage.setItem('newSpecial', JSON.stringify($starred));
		localStorage.setItem('newEmail', JSON.stringify($newEmails));
	}
	function handleSpecialEmail(special, id, email) {
		if (special) {
			$starred = [...$starred, email];
		} else {
			$starred = $starred.filter((item) => item.id !== id);
		}
		localStorage.setItem('newSpecial', JSON.stringify($starred));
	}
</script>

{#if $newEmails.length > 0}
	{#each $newEmails as newEmail}
		<a href="/inviati/{newEmail.id}">
			<NewEmail
				{newEmail}
				on:delete={() => handleRemove(newEmail.id)}
				on:special={({ detail }) => handleSpecialEmail(detail.special, detail.id, newEmail)}
				special={$starred.find((item) => item.id === newEmail.id) !== undefined}
			/>
		</a>
	{/each}
{/if}
