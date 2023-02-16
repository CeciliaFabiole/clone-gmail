// @ts-nocheck

export const searchHandler = (search, data) => {
	const searchTerm = search.toLowerCase() || '';
	return data.filter((item) => item.searchTerms.toLowerCase().includes(searchTerm));
};
