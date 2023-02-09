<script>
	// @ts-nocheck
	import Email from '$lib/Email.svelte';
	export let data = {};
</script>

<div>
	{#if data.emails.length > 0}
		{#each data.emails as email}
			<Email {email} />
		{/each}
	{/if}
</div>

<style>
</style>
