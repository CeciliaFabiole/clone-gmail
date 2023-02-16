import { newEmails } from '$lib/stores/content';
import { get } from 'svelte/store';
export function load({ params }) {
	console.log('params', params);
	const newEmailsStore = get(newEmails);
	console.log('newEmailsStore', newEmailsStore);
	const email = newEmailsStore.find?.((newEmail) => newEmail.id == params.id) ?? {
		destinatario: '',
		oggetto: '',
		message: ''
	};

	console.log('email', email);

	return {
		email
	};
}
