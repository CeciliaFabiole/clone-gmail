<script>
	// @ts-nocheck

	export let data;
	console.log('data', data);
	let files = data.email.allegato;
</script>

<p>Destinatario: {data.email.destinatario}</p>
<h1>Title: {data.email.oggetto}</h1>
<p>messaggio: {data.email.message}</p>
{#if files}
	{#each Array.from(files) as file}
		<p>Allegato : {file.name} ({file.size}bytes)</p>
		<img src={file.webkitRelativePath} alt="logo" />
	{/each}
{/if}
