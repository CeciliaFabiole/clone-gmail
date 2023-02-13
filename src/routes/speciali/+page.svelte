<script>
	import { starred } from '$lib/stores/newemail.js';
	import Email from '$lib/Email.svelte';

	$starred;
</script>

{#each $starred as email}
	<Email {email} />
	<hr />
{/each}
