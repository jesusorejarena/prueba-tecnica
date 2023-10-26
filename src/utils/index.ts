export const extractPart = (url: string) => {
	const match = url.match(/\/(\d+)\/$/);
	return match ? match[0] : '';
};
