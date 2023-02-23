// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production'

const stylesHandler = MiniCssExtractPlugin.loader

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: isProduction ? 'main.min.js' : 'main.js',
		assetModuleFilename: `images/[name][ext]`,
	},
	optimization: {
		minimizer: [
			`...`,
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

			new ImageMinimizerPlugin({
				minimizer: [
					{
						implementation: ImageMinimizerPlugin.squooshMinify,
						options: {
							encodeOptions: {
								mozjpeg: {
									// That setting might be close to lossless, but it’s not guaranteed
									// https://github.com/GoogleChromeLabs/squoosh/issues/85
									quality: 100,
								},
								webp: {
									lossless: 1,
								},
								avif: {
									// https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
									cqLevel: 0,
								},
							},
						},
					},
					{
						implementation: ImageMinimizerPlugin.svgoMinify,
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
					},
				],
			}),
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: isProduction ? 'main.min.css' : 'main.css',
		}),

		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
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
}

module.exports = () => {
	if (isProduction) {
		config.mode = 'production'
	} else {
		config.mode = 'development'
	}
	return config
}
