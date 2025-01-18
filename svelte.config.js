import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	
	kit: {
		adapter: adapter({
			pages: "build",
            assets: "build",
            precompress: false,
            trailingSlash: 'always',
			fallback: '404.html',
		}),
		paths: {
			base: dev ? '' : '/endangered-recipes',
		}
	}
};

export default config;