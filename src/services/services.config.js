import { URL } from 'url';

export const SLT_APIKEY = process.env.SLT_APIKEY || global.SLT_APIKEY;

//this should help standerdize the way the key is added to the url, and allow endpoints to be customized with query params
function wrapEndpoint(url, apiKey) {
	return () => {
		// I imagine this is the minimum most endpoints will require
		let endpoint = new URL(url);
		endpoint.searchParams.append('key', apiKey);
		return endpoint;
	};
}

// SLT End points at the moment should be a function that returns a url object with the api key appeneded to the search params
export const SLT_STORE_ENDPOINT = wrapEndpoint(
	process.env.SLT_STORE_ENDPOINT || global.SLT_STORE_ENDPOINT,
	SLT_APIKEY
);

export default { SLT_APIKEY, SLT_STORE_ENDPOINT };
