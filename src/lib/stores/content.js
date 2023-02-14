// @ts-nocheck
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export let newEmails = writable([]);
// Get the value out of storage on load.
let stored = browser && localStorage.getItem('newEmail');
if (!stored) {
	browser && localStorage.setItem('newEmail', JSON.stringify([]));
}
// console.log('stored', stored);
if (stored.length > 0) {
	const parsedStored = JSON.parse(stored);
	// console.log('parsedStored', parsedStored);
	newEmails.set(parsedStored);
}

// export let starred = writable([]);
// let starStored = browser && localStorage.getItem('newSpecial');
// if (!starStored) {
// 	browser && localStorage.setItem('newSpecial', JSON.stringify([]));
// }
// console.log('star', starStored);
// if (starStored.length > 0) {
// 	const parsedStar = JSON.parse(starStored);
// 	console.log('parsedStar', parsedStar);
// 	starred.set(parsedStar);
// }
export let starred = writable([]);
console.log('starred', starred);
// Get the value out of storage on load.
let starStored = browser && localStorage.getItem('newSpecial');
console.log('starStored', starStored);
if (!starStored) {
	browser && localStorage.setItem('newSpecial', JSON.stringify([]));
}
console.log('starStored', starStored);
if (stored.length > 0) {
	const parsedStar = JSON.parse(starStored);
	// console.log('parsedStored', parsedStored);
	starred.set(parsedStar);
}
