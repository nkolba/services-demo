const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
    Object.assign({}, 
        {
            entry: path.resolve("main.js"),
            output: {
                path: path.resolve('./build'),
                filename: 'main-bundle.js'
            },
            resolve: {
                extensions: ['.js']
            },
            plugins: [
                new CopyWebpackPlugin([
                    { from: '*.html' },
                    { from: '*.css' },
                    { from: 'apps.js' },
                    { from: 'apps.json' }
                ])
            ]
        }
    )
];
