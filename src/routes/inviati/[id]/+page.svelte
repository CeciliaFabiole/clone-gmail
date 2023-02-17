<script>
	// @ts-nocheck

	export let data;
	let files = data.email.allegato;
</script>

<div class="mx-auto flex h-full w-2/3 flex-col justify-between p-5">
	<div class="flex flex-col gap-10">
		<h1 class="text-2xl">{data.email.oggetto}</h1>
		<div class="-mx-24 flex items-center gap-10 text-lg">
			<div class=" h-12 w-12 rounded-full bg-black" />
			<p>{data.email.destinatario}</p>
		</div>
		<div class="">
			<p>{data.email.message}</p>
		</div>
		<hr />
		<h1>Allegati:</h1>
	</div>

	<div class="max-w-xl border">
		<img src={files} alt="logo" />
	</div>
</div>
