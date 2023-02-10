<script>
	import { newEmails } from '$lib/stores/newemail';
	import StarOutline from 'svelte-material-icons/StarOutline.svelte';
	import Icon from '$lib/Icon.svelte';

	$newEmails;
</script>

{#each $newEmails as { destinatario, oggetto }}
	<div class="flex h-14 items-center justify-between p-3">
		<Icon icon={StarOutline} width="1.5em" />
		<div class="flex w-1/3 items-center justify-between p-3">
			<p>{destinatario}</p>
		</div>
		<div class="flex w-1/3 items-center justify-between p-3">
			<p>{oggetto}</p>
		</div>
		<div class="flex w-1/3 items-center justify-end p-3">
			<p>data and time</p>
		</div>
		<p />
	</div>
	<hr />
{/each}
