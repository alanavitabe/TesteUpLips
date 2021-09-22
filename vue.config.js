module.exports = {
    publicPath: process.env.NODE_ENV == 'production' ? 'https://www.uplips.com.br/tema/uplips-vue/dist' : '/',
    devServer: {
        port: 8080,
    }
}
