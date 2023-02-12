<script>
	import { starred } from '$lib/stores/newemail.js';

	$starred;
	let special = false;
	const handleSpecialEmail = (id) => {
		special = !special;
		console.log(special);
		if (special) {
			$starred = [
				...$starred,
				{
					id: email.id,
					mittente: `${user.firstName} ${user.lastName}`,
					oggetto: email.title
				}
			];
			console.log($starred);
		}
		if (!special) {
			$starred.filter((star) => star.id != id);
		}
	};
</script>

{#each $starred as star}
	<Email />
	<hr />
{/each}
