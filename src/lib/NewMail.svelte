<script>
	import { newEmails } from '$lib/stores/newemail.js';
	import Icon from './Icon.svelte';
	import Close from 'svelte-material-icons/Close.svelte';
	let destinatario = '';
	let oggetto = '';
	let message = '';

	const handleSentEmail = () => {
		$newEmails = [
			...$newEmails,
			{
				destinatario: destinatario,
				oggetto: oggetto,
				message: message
			}
		];
		destinatario = '';
		oggetto = '';
		message = '';
	};
</script>

<div class="absolute bottom-0 right-9 h-1/2 w-1/4 rounded-t-xl bg-white shadow-2xl">
	<div class="flex items-center justify-between rounded-t-xl bg-[#F2F6FB] p-5">
		<p>Nuovo messaggio</p>
		<button on:click><Icon icon={Close} /></button>
	</div>
	<div class="ronded flex items-center justify-between py-3 px-5">
		<input class="outline-0" placeholder="A" bind:value={destinatario} />
	</div>
	<hr />
	<div class="ronded flex items-center justify-between py-3 px-5">
		<input class="outline-0" placeholder="Oggetto" bind:value={oggetto} />
	</div>
	<hr />
	<textarea class="h-1/2 w-full p-5 outline-0" bind:value={message} />
	<button class="mx-5 h-10 w-1/5 rounded-full bg-[#1C73E8]" on:click={handleSentEmail}>Invia</button
	>
</div>
