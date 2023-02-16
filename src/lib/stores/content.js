// @ts-nocheck
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export let newEmails = writable([]);
let stored = browser && localStorage.getItem('newEmail');
console.log('stored', stored);
if (!stored) {
	browser && localStorage.setItem('newEmail', JSON.stringify([]));
}
console.log('stored', stored);
if (stored !== null && stored.length > 0) {
	const parsedStored = JSON.parse(stored);
	// console.log('parsedStored', parsedStored);
	newEmails.set(parsedStored);
}

export let starred = writable([]);
let starStored = browser && localStorage.getItem('newSpecial');
// console.log('starStored', starStored);
if (!starStored) {
	browser && localStorage.setItem('newSpecial', JSON.stringify([]));
}
// console.log('starStored', starStored);
if (starStored !== null && starStored.length > 0) {
	const parsedStar = JSON.parse(starStored);
	// console.log('parsedStored', parsedStar);
	starred.set(parsedStar);
}
