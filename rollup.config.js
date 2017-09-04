
import progress from 'rollup-plugin-progress';
import uglify from 'rollup-plugin-uglify-es';

import path from 'path';
import babel from 'rollup-plugin-babel';

export default {
	entry: 'redux-store-mixin.js',
	dest: 'build/' + (process.env.NODE_ENV === 'production'?'redux-store-mixin.min.js':'redux-store-mixin.js'),
	format: 'umd',
	moduleName: 'redux-store-mixin',
	plugins: [
		babel({
			exclude: 'node_modules/**',
		}),
		progress({
		}),
		(process.env.NODE_ENV === 'production' && uglify()),
	]
};