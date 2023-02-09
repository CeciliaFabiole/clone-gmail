export async function load({ fetch }) {
	const response = await fetch('https://dummyjson.com/posts');
	const data = await response.json();
	console.log(response.status);
	return { emails: data.posts };
}
