<script> 

	let emails = []
	let users = []
	export async function load() {
		const response = await fetch('https://dummyjson.com/posts')
		const data = await response.json()
		emails = [...data.posts]
	}
	load()
	
</script>

<div>
	{#each emails as email}
	<div class="h-14 flex items-center p-3">
		<p>{email.title}</p>
		
	</div>
	<hr/>
	{/each}
</div>


<style>
</style>
