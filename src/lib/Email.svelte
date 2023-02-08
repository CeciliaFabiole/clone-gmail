<script>
    export let email = {}

    
    let id = email.userId
    let user = {}
	export async function getUsers() {
		const response = await fetch(`https://dummyjson.com/users/${id}`)
		const obj = await response.json()
        console.log(user)
        user = obj
	}
	getUsers()
</script>

<div class="flex h-14 items-center p-3 justify-between">
    <div class="flex w-1/3 items-center p-3 justify-between">
        <p>{user.firstName} {user.lastName}</p>
    </div>
    <div class="flex w-1/3 items-center p-3 justify-between">
        <p>{email.title}</p>
    </div>
    <div class="flex w-1/3 items-center p-3 justify-end">
        <p>data and time</p>
    </div>
    <p></p>
	
</div>
<hr />
