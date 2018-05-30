var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: false,
      port: 8080
   },
   module: {
      rules: [
      {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         use: {
            loader: 'babel-loader'
         },
      }]
   },
   resolve: {
    extensions: [ '.js', '.jsx']
   }
}
module.exports = config;