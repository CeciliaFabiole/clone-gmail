<script>
	import { starred } from '$lib/stores/newemail.js';

	$starred;
</script>

{#each $starred as star}
	<div class="flex h-14 items-center justify-between p-3">
		<div class="flex w-1/3 items-center justify-between p-3">
			<p>{star.mittente}</p>
		</div>
		<div class="flex w-1/3 items-center justify-between p-3">
			<p>{star.oggetto}</p>
		</div>
		<div class="flex w-1/3 items-center justify-end p-3">
			<p>data and time</p>
		</div>
		<p />
	</div>
	<hr />
{/each}
