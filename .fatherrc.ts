export default {
	cjs: 'babel',
	esm: 'babel',
	umd: false,
	nodeResolveOpts: {
		mainFields: ['module', 'browser', 'main']
	},
	// yarn build order
	pkgs: ['math']
};
