const path = require('path');

module.exports = {
    mode: 'none',
    watch: true,
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            indentWidth: 4,
                            includePaths: ['./src/app.scss', './dist/css/app.css'],
                        },
                    },
                ],
            },
        ],
    },
};