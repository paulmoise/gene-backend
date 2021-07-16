// on peut utiliser path pour indiquer le chemin vers le fichier index.js
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/, use: 'babel-loader'
            }
        ]
    },
    externals: [nodeExternals()],
    externalsPresets: {
        node: true
    },
    plugins: [
        new NodemonPlugin()
    ]
}