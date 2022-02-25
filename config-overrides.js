const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }

    config.plugins.push(new NodePolyfillPlugin({
	      excludeAliases: ["console"]
		})
    );

    if(!config.resolve) {
    	config.resolve = {
    		fallback: {}
    	}
    }

    config.resolve.fallback = {
    	assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        stream: require.resolve('stream-browserify'),
    }

    return config;
}


