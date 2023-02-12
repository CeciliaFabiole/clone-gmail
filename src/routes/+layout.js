// @ts-nocheck

export async function load({ fetch }) {
	let emailList = [];
	const responsePost = await fetch('https://dummyjson.com/posts');
	const dataPost = await responsePost.json();
	const emails = dataPost.posts;
	// console.log('emails', dataPost.posts);
	emails.map(async (post) => {
		const responseUser = await fetch(`https://dummyjson.com/users/${post.userId}`);
		const user = await responseUser.json();
		// console.log('user:', user);
		emailList.push({
			id: post.userId,
			firstname: user.firstName,
			lastname: user.lastName,
			title: post.title,
			message: post.body
		});
		// console.log('data:', emailList);
	});
	// console.log('dataafter:', emailList);
	return { emailList };
}
