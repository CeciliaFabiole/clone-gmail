<script> 
	import Email from '$lib/Email.svelte'

	let emails = []
	
	export async function getPosts() {
		const response = await fetch('https://dummyjson.com/posts')
		const data = await response.json()
		emails = [...data.posts]
	}
	getPosts()
	
</script>

<div>
	{#each emails as email}
		<Email email = {email}/>
	{/each}
</div>


<style>
</style>
