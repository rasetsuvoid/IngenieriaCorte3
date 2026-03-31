import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: '/IngenieriaCorte3'
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
