// UglifyJsPluginなどのプラグインを利用するためにwebpackを読み込んでおく必要がある。
import webpack from 'webpack';

// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
import path    from 'path';

//ファイルのエントリー用
import glob    from 'glob';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

//プレフィックス用
import autoprefixer from 'autoprefixer';
import precss from 'precss';

//scssファイルのエントリー設定
const scssBasePath = path.resolve(__dirname, 'src/scss/');
const scssTargets = glob.sync(`${scssBasePath}/[^_*]*.scss`);
const scssEntries = {};
scssTargets.forEach(value => {
  const re = new RegExp(`${scssBasePath}/`);
  const key = value.replace(re, '').replace('.scss', '');;
  scssEntries[key] = value;
});

//JSファイルのエントリー設定
const jsBasePath = path.resolve(__dirname, 'src/js/');
const jsTargets = glob.sync(`${jsBasePath}/[^_*]*.js`);
const jsEntries = {};
jsTargets.forEach(value => {
  const re = new RegExp(`${jsBasePath}/`);
  const key = value.replace(re, '').replace('.js', '');
  jsEntries[key] = value;
});


export default [
  {
  // ========================================================
  // CSS
  // ========================================================
    // エントリーポイントの設定
    entry: scssEntries,
    // 出力の設定
    output: {
      // 出力するファイル名
      filename: '[name].bundle.css',
      // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
      path: path.resolve(__dirname, 'public/dist/css')
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use:[
              'css-loader?sourceMap',
              'postcss-loader?sourceMap',
              'sass-loader?sourceMap'
            ]
          })
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '../../img/[name].[ext]',
                emitFile: false
              }
            }
          ]
        },
        // {
          // 10KB以下の画像をBase64で出力
        //   test: /\.(jpe?g|png|gif|svg|ico)(\?.+)?$/,
        //   use: {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 10240,
        //       name: '../../img/[name].[ext]',
        //       emitFile: false
        //     }
        //   }
        // },
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '../../font/[name].[ext]',
                emitFile: false
              }
            }
          ]
        }

      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].bundle.css')
    ],
    resolve: {
      // style-loader の中で、.jsファイルを拡張子なしで requireしているところがあるため、'.js'が必要
      extensions: ['.css', '.js']
    }
  },
  {
  // ========================================================
  // JS用モジュール
  // ========================================================
    // エントリーポイントの設定
    entry: jsEntries,
    // 出力の設定
    output: {
      // 出力するファイル名
      filename: '[name].bundle.js',
      // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
      path: path.resolve(__dirname, 'public/dist/js'),
      publicPath: '/js/'
    },
    // ローダーの設定
    module: {
      rules: [
        {
          // enforce: 'pre'を指定することによって
          // enforce: 'pre'がついていないローダーより早く処理が実行される
          // 今回はbabel-loaderで変換する前にコードを検証したいため、指定が必要
          enforce: 'pre',
          // ローダーの処理対象ファイル
          test: /\.js$/,
          // ローダーの処理対象から外すディレクトリ
          exclude: /node_modules/,
          // 利用するローダー
          loader: 'eslint-loader'
        },
        {
          // ローダーの処理対象ファイル
          test: /\.js$/,
          // ローダーの処理対象から外すディレクトリ
          exclude: /node_modules/,
          // 利用するローダー
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      /* use jQuery as Global */
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      })
    ],
    resolve: {
      extensions: ['.js']
    }
  }
];
