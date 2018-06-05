var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   mode: 'production',
   devServer: {
      inline: true,
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
      },
      {
         test: /\.css$/,
         use: [
         {
            loader: 'style-loader'
         },
         { 
            loader: 'css-loader',
            options: {
               modules: true,
               importLoaders: 1
            }
         }
         ]
      }]
   },
   resolve: {
    extensions: [ '.js', '.jsx']
   }
}
module.exports = config;