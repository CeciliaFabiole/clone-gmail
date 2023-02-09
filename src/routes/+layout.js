export async function load({ fetch }) {
	const response = await fetch('https://dummyjson.com/posts');
	const data = await response.json();
	return { emails: data.posts };
}
