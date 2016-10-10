/**
 * Global Gulp vars
 * Many of the Gulp tasks use these vars. Change as much as you like :)
 */
var pkg = require('../package.json');


const ConfigOptions = function() {
	const config = this;

	// CSS-related vars
	config.css = {
		browsers: ['> 5%', 'last 2 versions', 'ie > 8'], // config.css.browsers
		// We are supporting the last 2 browsers, any browsers with >5% market share,
		// and ensuring we support IE9+ with prefixes
	};


	// Banners and info
	config.misc = {
		banner: `/**
   ██╗  ██╗██╗ ██████╗██╗  ██╗ ██████╗ ███████╗███████╗
   ██║ ██╔╝██║██╔════╝██║ ██╔╝██╔═══██╗██╔════╝██╔════╝
   █████╔╝ ██║██║     █████╔╝ ██║   ██║█████╗  █████╗
   ██╔═██╗ ██║██║     ██╔═██╗ ██║   ██║██╔══╝  ██╔══╝
   ██║  ██╗██║╚██████╗██║  ██╗╚██████╔╝██║     ██║
   ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝
 * <%= pkg.title %> v<%= pkg.version %>
 * <%= pkg.repo %>
 * <%= pkg.homepage %>
 */
`,
	};
};

module.exports = new ConfigOptions();
