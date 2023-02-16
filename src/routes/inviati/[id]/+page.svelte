<script>
	// @ts-nocheck

	export let data;
	console.log(data);
</script>

<p>Destinatario: {data.email.destinatario}</p>
<h1>Title: {data.email.oggetto}</h1>
<p>messaggio: {data.email.message}</p>
<p>Allegato:</p>
