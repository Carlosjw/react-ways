module.exports = {
    module: {
        rules: [
            // adicionando regra CSS
            {
                test: /\.css$/,
                // usando o CSS: na mesma orgem abaixo
                use: ['style-loader', 'css-loader']
            },
            // adicionando regra Javascript
            {
                test: /\.js$/,
                // excluindo arquivos da node_modules
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },            
        ],
    },
}