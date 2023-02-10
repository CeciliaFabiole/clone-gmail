<script>
	// @ts-nocheck
	import Email from '$lib/Email.svelte';

	export let data = {};
	export let emails = data.emails;

	function handleRemove(i) {
		let newEmailList = [...emails];
		newEmailList.splice(i, 1);
		emails = [...newEmailList];
	}
</script>

<div>
	{#if emails.length > 0}
		{#each emails as email, i}
			<Email {email} on:delete={() => handleRemove(i)} />
		{/each}
	{/if}
</div>

<style>
</style>
