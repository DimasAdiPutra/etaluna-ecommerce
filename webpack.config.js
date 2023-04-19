// Generated using webpack-cli https://github.com/webpack/webpack-cli

/**
 * @import mini-css-extract-plugin
 * @import css-minimizer-webpack-plugin
 * @import image-minimizer-webpack-plugin
 * import semua plugin yang dibutuhkan untuk webpack
 */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

// pengecekan mode env
const isProduction = process.env.NODE_ENV == 'production'

/**
 * penggunakan loader dari plugin mini-css-extract-plugin
 * yang digunakan untuk mengextract kode css dari file javascript
 * sehingga membuat file css tersendiri
 */
const stylesHandler = MiniCssExtractPlugin.loader

/**
 * file utama yang me-require semua file adalah file index.js di folder src
 */
const config = {
	entry: './src/index.js',

	/**
	 * @output public - simpan file di folder public
	 * @output filename - nama file javascript yang akan di generate
	 * @output assetModuleFilename - simpan di folder public di folder image dengan format nama.ext
	 */
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: isProduction ? 'main.min.js' : 'main.js',
		assetModuleFilename: `images/[name][ext]`,
	},

	// Optimize webpack
	optimization: {
		minimizer: [
			`...`,

			/**
			 * Menggunakan css-minimizer-plugin untuk minimize css dengan preset cssnano-preset-advanced
			 */
			new CssMinimizerPlugin({
				minimizerOptions: {
					preset: [
						require.resolve('cssnano-preset-advanced'),
						{
							discardComments: { removeAll: true },
							discardUnused: { removeAll: true },
							discardDuplicates: { removeAll: true },
							discardEmpty: true,
							minifyFontValues: { removeQuotes: false },
							minifyGradients: true,
							minifySelectors: true,
						},
					],
				},
			}),

			/**
			 * Menggunakan sharp dan svgo untuk minimize image dan svg
			 */
			new ImageMinimizerPlugin({
				// start - minimizer
				minimizer: [
					// start - sharp
					{
						implementation: ImageMinimizerPlugin.sharpMinify,
						// start - option sharp
						options: {
							encodeOptions: {
								// Your options for `sharp`
								// https://sharp.pixelplumbing.com/api-output
							},
						},
						// end - option sharp
					},
					// end - sharp

					// start - svgo
					{
						implementation: ImageMinimizerPlugin.svgoMinify,
						// start - option svgo
						options: {
							encodeOptions: {
								// Pass over SVGs multiple times to ensure all optimizations are applied. False by default
								multipass: true,
								plugins: [
									// set of built-in plugins enabled by default
									// see: https://github.com/svg/svgo#default-preset
									'preset-default',
								],
							},
						},
						// end - svgo
					},
					// end - svgo
				],
				// end - minimizer
			}),
		],
	},

	// start - plugin
	plugins: [
		new MiniCssExtractPlugin({
			filename: isProduction ? 'main.min.css' : 'main.css',
		}),

		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	// end - plugin

	// start - module
	module: {
		rules: [
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, 'src'),
				use: [stylesHandler, 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpe?g|gif)$/i,
				type: 'asset/resource',
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
	// end - module
}

module.exports = () => {
	if (isProduction) {
		config.mode = 'production'
	} else {
		config.mode = 'development'
	}
	return config
}
