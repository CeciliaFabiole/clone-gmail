<script>
	// @ts-nocheck

	import { starred } from '$lib/stores/content.js';
	import Email from '$lib/Email.svelte';
	// import { browser } from '$app/environment';
	import { emails } from '$lib/stores/email.js';
	import NewEmail from '$lib/NewEmail.svelte';
	// console.log('starred in special', $starred);

	function handleRemove(id) {
		$emails = $emails.filter((item) => item.id !== id);
		$starred = $starred.filter((item) => item.id !== id);
		localStorage.setItem('newSpecial', JSON.stringify($starred));
		localStorage.setItem('Emails', JSON.stringify($emails));
	}
	function handleSpecialEmail(special, id) {
		if (!special) {
			$starred = $starred.filter((item) => item.id !== id);
			localStorage.setItem('newSpecial', JSON.stringify($starred));
		}
	}

	let moving = false;
	const drop = (e, target) => {
		// console.log('e', e);
		// console.log('target', target);
		e.dataTransfer.dropEffect = 'move';
		const start = parseInt(e.dataTransfer.getData('text/plain'));
		// console.log('start', start);
		const newTracklist = $starred;

		if (start < target) {
			newTracklist.splice(target + 1, 0, newTracklist[start]);
			newTracklist.splice(start, 1);
		} else {
			newTracklist.splice(target, 0, newTracklist[start]);
			newTracklist.splice(start + 1, 1);
		}
		$starred = newTracklist;
		moving = null;
	};
	const dragstart = (e, i) => {
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.dropEffect = 'move';
		const start = i;
		// console.log('start in start', start);
		e.dataTransfer.setData('text/plain', start);
		// console.log(e.dataTransfer);
	};
	// $: console.log('starred', $starred);
</script>

{#each $starred as email, i}
	<div
		draggable={true}
		on:dragstart={(e) => dragstart(e, i)}
		on:drop|preventDefault={(e) => drop(e, i)}
		ondragover="return false"
		on:dragenter={() => moving === i}
	>
		<Email
			{email}
			on:delete={() => handleRemove(email.id)}
			on:special={({ detail }) => handleSpecialEmail(detail.special, detail.id)}
			special={true}
		/>
		<hr />
	</div>
{/each}
<!-- {#each $starred as newEmail, i}
	<div
		draggable={true}
		on:dragstart={(e) => dragstart(e, i)}
		on:drop|preventDefault={(e) => drop(e, i)}
		ondragover="return false"
		on:dragenter={() => moving === i}
	>
		<NewEmail
			{newEmail}
			on:delete={() => handleRemove(newEmail.id)}
			on:special={({ detail }) => handleSpecialEmail(detail.special, detail.id)}
			special={true}
		/>
		<hr />
	</div>
{/each} -->
