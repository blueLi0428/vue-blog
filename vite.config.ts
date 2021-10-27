import vue from '@vitejs/plugin-vue';
import type { UserConfig } from 'vite';
import {resolve} from "path";
import { loadEnv } from '/@/utils/viteBuild';

const { VITE_PORT, VITE_OPEN, VITE_PUBLIC_PATH } = loadEnv();

const pathResolve = (dir: string): any => {
	return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
	'/@': pathResolve('./src/'),
	'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
};

const viteConfig: UserConfig = {
	plugins: [vue()],
	root: process.cwd(),
	resolve: { alias },
	base: process.env.NODE_ENV === 'production' ? VITE_PUBLIC_PATH : './',
	server: {
		host: '0.0.0.0',
		port: 8089,
		open: VITE_OPEN,
		// proxy: {
		// 	'/gitee': {
		// 		target: 'https://gitee.com',
		// 		ws: true,
		// 		changeOrigin: true,
		// 		rewrite: (path) => path.replace(/^\/gitee/, ''),
		// 	},
		// 	'/development/system': {
		// 		target: 'http://127.0.0.1:8912',
		// 		ws: true,
		// 		changeOrigin: true,
		// 		rewrite: (path) => path.replace(/^\/development/, ''),
		//
		// 	},
		// 	'/development': {
		// 		target: 'http://127.0.0.1:8911',
		// 		// ws: true,
		// 		changeOrigin: true,
		// 		rewrite: (path) => path.replace(/^\/development/, ''),
		//
		// 	}
		// },
	},
}

export default viteConfig;
