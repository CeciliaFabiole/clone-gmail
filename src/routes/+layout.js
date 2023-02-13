// @ts-nocheck

export async function load({ fetch }) {
	let emailList = [];
	const responsePost = await fetch('https://dummyjson.com/posts');
	const dataPost = await responsePost.json();
	const emails = dataPost.posts;
	// console.log('emails', dataPost.posts);
	const mappedEmails = emails.map(async (post) => {
		const responseUser = await fetch(`https://dummyjson.com/users/${post.userId}`);
		const user = await responseUser.json();
		// console.log('user:', user);
		emailList = [
			...emailList,
			{
				id: post.id,
				userId: post.userId,
				firstname: user.firstName,
				lastname: user.lastName,
				title: post.title,
				message: post.body
			}
		];
		// console.log('data:', emailList);
	});
	await Promise.all(mappedEmails);
	//console.log('dataafter:', emailList);
	// console.log(mappedEmails);

	return { emailList };
}
