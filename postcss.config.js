// ========================================================
// TODO 00. 対応ブラウザ CSS
// ========================================================
// ブラウザシェア
//http://browserl.ist/?q=%3E+1%25+in+JP
//
//書き方
//https://github.com/ai/browserslist#queries
//
module.exports = {
  plugins: {
    autoprefixer: {
      "browsers": [
        "last 2 versions",
        "ie >= 10",
        "iOS >= 10",
        "Android >= 4.4"
      ]
    }
  }
}
