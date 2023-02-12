<script>
	// @ts-nocheck
	import Email from '$lib/Email.svelte';

	export let data = {};
	export let emails = data.emailList;
	// console.log('emailsimport:', emails);

	function handleRemove(i) {
		let newEmailList = [...emails];
		newEmailList.splice(i, 1);
		emails = [...newEmailList];
	}
	let special = false;
	function handleSpecialEmail() {
		special = !special;
	}
</script>

<div>
	{#if emails.length > 0}
		{#each emails as email, i}
			<Email {email} on:delete={() => handleRemove(i)} on:special={handleSpecialEmail(i)} />
		{/each}
	{/if}
</div>

<style>
</style>
