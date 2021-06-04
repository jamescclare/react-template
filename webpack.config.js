const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const dist = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: dist,
        filename: 'index.bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader", 
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: '[local]__[hash:base64:6]'
                            }
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset"
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.css', '.svg'],
    },
    devServer: {
        contentBase: dist,
        compress: true,
        port: 8000,
    },
}