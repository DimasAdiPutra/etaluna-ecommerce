// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production'

const stylesHandler = MiniCssExtractPlugin.loader

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: isProduction ? 'main.min.js' : 'main.js',
		assetModuleFilename: 'images/[name][ext]',
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
							discardUnused: true,
							discardDuplicates: true,
							minifyFontValues: { removeQuotes: false },
							minifyGradients: true,
							minifySelectors: true,
							discardEmpty: true,
						},
					],
				},
				minify: [CssMinimizerPlugin.cssnanoMinify],
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
