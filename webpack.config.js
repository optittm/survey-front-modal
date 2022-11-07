const path = require('path')

var config = {
    entry: ['regenerator-runtime/runtime.js', './src/index.js'],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env',
                                {
                                    targets: 'defaults'
                                }
                            ]
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js',
        library: {
            type: 'umd',
            name: 'ottm-modal-feedback',
            export: 'default'
        },
        clean: true,
        // prevent error: `Uncaught ReferenceError: self is not define`
        globalObject: 'this'
    }
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.mode = 'development'
    }
  
    if (argv.mode === 'production') {
        config.mode = 'production'
    }
  
    return config;
}
