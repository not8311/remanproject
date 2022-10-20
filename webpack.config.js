const path = require('path');

module.exports = {
  entry: './src/index.js',// 進入點檔案位置
  output: {
    path: path.resolve(__dirname, 'dist'),// 輸出點位置
    filename: 'bundle.js',// 輸出檔案名稱
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // inject CSS to page
            loader: 'style-loader'
          }, {
            // translates CSS into CommonJS modules
            loader: 'css-loader'
          }, {
            // Run postcss actions
            loader: 'postcss-loader',
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          }, {
            // compiles Sass to CSS
            loader: 'sass-loader'
          }
        ]
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // public輸出的資料夾
    },
    compress: true,
    port: 5500,
		open: true // 自動開啟瀏覽器
  },
};