<script>
	// @ts-nocheck

	import { newEmails } from '$lib/stores/content.js';
	import Icon from './Icon.svelte';
	import Close from 'svelte-material-icons/Close.svelte';
	import { browser } from '$app/environment';
	let destinatario = '';
	let oggetto = '';
	let message = '';
	let files;

	$: if (files) {
		console.log('files', files);
		for (const file of files) {
			console.log('file', file);
			console.log('name', `${file.name} : ${file.size} bytes`);
		}
	}
	const handleSentEmail = () => {
		$newEmails = [
			...$newEmails,
			{
				id: Math.round(Math.random() * 100),
				destinatario: destinatario,
				oggetto: oggetto,
				message: message,
				allegato: files
			}
		];
		destinatario = '';
		oggetto = '';
		message = '';
		files = [];

		browser && localStorage.setItem('newEmail', JSON.stringify($newEmails));
	};
</script>

<form
	class="absolute bottom-0 right-9 rounded-t-xl bg-white shadow-2xl md:w-3/4 lg:w-2/4"
	on:submit|preventDefault={handleSentEmail}
>
	<div class="flex items-center justify-between rounded-t-xl bg-[#F2F6FB] p-5">
		<p>Nuovo messaggio</p>
		<button on:click><Icon icon={Close} /></button>
	</div>
	<div class="ronded flex items-center justify-between py-3 px-5">
		<input class="outline-0" placeholder="A" bind:value={destinatario} type="email" required />
	</div>
	<hr />
	<div class="ronded flex items-center justify-between py-3 px-5">
		<input class="outline-0" placeholder="Oggetto" bind:value={oggetto} type="text" required />
	</div>
	<hr />
	<textarea class="h-40 w-full p-5 outline-0" bind:value={message} />
	{#if files}
		{#each Array.from(files) as file}
			<p>{file.name} ({file.size}bytes)</p>
		{/each}
	{/if}
	<button type="submit" class="m-5 h-10 w-1/5 rounded-full bg-[#1C73E8]">Invia</button>
	<input bind:files id="many" multiple type="file" />
</form>
