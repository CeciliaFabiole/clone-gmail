// @ts-nocheck
import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export let emails = writable([]);
let emailsStored = browser && localStorage.getItem('Emails');
// console.log('emailsStored', emailsStored);
if (!emailsStored) {
	browser && localStorage.setItem('Emails', JSON.stringify([]));
}
// console.log('starStored', starStored);
if (emailsStored !== null && emailsStored.length > 0) {
	const parsedEmail = JSON.parse(emailsStored);
	// console.log('parsedStored', parsedStar);
	emails.set(parsedEmail);
	// console.log('parsedEmail', parsedEmail);
}
