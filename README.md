# Minimum Framework



## Description
**"Minimum Framework"** は、最新のコーディング事情をを反映してるBootstrap4をベースに、小規模な案件でもスピーディーにコーディングできるように調整したミニマムなフレームワークです。


**Bootstrap4からの主な変更点は下記になります。**

- [SCSS] Webpackでビルド
- [SCSS] WebpackとPostCSSでプレフィックス反映 
- [SCSS] 日本語に変更
- [SCSS] 1remを16pxから10pxに変更
- [SCSS] 汎用クラスの強化
- [SCSS] 学習コストが高いコンポーネント系を削除

- [JS] Webpackで1ファイルにビルド
- [JS] ES6で記述
- [JS] ローディングJS追加
- [JS] ハンバーガーメニューJS追加
- [JS] スクロールトップJS追加
- [JS] アンカーリンクアニメーションJS追加
- [JS] Animate.CSS用のパララックスアニメーションJS追加
- [JS] Bootstrap4のJSを削除

- [ライブラリ] Bootstrap・jQuery・Animate.cssをpackage.jsonで管理

- [管理] 初期設定が必要な箇所にコメントアウト「TODO」を追加（エディタのプラグインで管理）
- [管理] 多彩な案件でも使いまわせそうなgitignoreを追加

### Supported browsers
サポート範囲は **Bootstrap4** に準じます。
ベンダープレフィックスの設定は、 **postcss.config.js** で管理してます。

#### Mobile devices
| |Chrome|Firefox|Safari|Android Browser & WebView|Microsoft Edge|
|:--|:--|:--|:--|:--|:--|
|Android|サポート|サポート|該当なし|Android v5.0以上サポート|該当なし|
|iOS|サポート|サポート|サポート|該当なし|該当なし|
|Windows 10 Mobile|該当なし|該当なし|該当なし|該当なし|サポート|
※Bootstrap4はAndroid4.x.xはサポート対象外です

#### Desktop browsers
| |Chrome|Firefox|Internet Explorer|Microsoft Edge|Opera|Safari|
|:--|:--|:--|:--|:--|:--|:--|
|Mac|サポート|サポート|該当なし|該当なし|サポート|サポート|
|Windows|サポート|サポート|IE10以上サポート|サポート|サポート|非サポート|
※Bootstrap4はIE8,IE9はサポート対象外です
※Mini Booはwindow.matchMediaを使ってるためIE8,IE9はサポート対象外です

- [Bootstrap4 Browsers and devices](https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/)
- [Bootstrap4移行ガイド](http://cccabinet.jpn.org/bootstrap4/getting-started/browsers-devices)




## Requirement
SCSS,JSのビルドにNode.jsとWebpackを使用してます。
使用する前にNode.js環境を構築してください。
エディタの設定を合わせるためにEditorConfigを使用してます。
エディタにプラグインを入れてない方は入れてください。

また各種初期設定が必要な箇所は、各ファイルのコメントアウト（TODO）に記載しております。
TODOリストはエディタにプラグインを入れとくと表示できるのでおすすめです。


- [Node.js](https://nodejs.org/ja/)
- [EditorConfig](http://editorconfig.org/#download)
- [Atom Todo-Show](https://atom.io/packages/todo-show)
- [Brackets Todo](https://github.com/mikaeljorhult/brackets-todo)
- [Sublime Text TodoReview](https://packagecontrol.io/packages/TodoReview)



## Download
[Releases](https://github.com/kumakuma112/Minimum-Framework/releases)から最新版をダウンロードしてください。



## Usage
**1. 準備ができたら必要なモジュールをインストール**
ターミナルやコマンドラインでフォルダの階層に移動してインストールしてください。
```
$ cd xxxxxxxx（フォルダの階層へ移動）
$ npm install
```

**2. gitignoreファイルの設定確認**
distフォルダは対象外にしてます。不要なら下記行を削除してください。
またGitを使わない場合はファイル自体不要ですので削除してください。
```
### dist ###
docs/dist/
```

**3. autoprefixerの設定確認**
ベンダープレフィックスの設定です。
Bootstrap4に基本合わせてます。postcss.config.jsで管理してます。

**4. EditorConfigファイルの設定**
インデントや改行コードの設定を行ってください。

**5. スクリプト実行**
開発用
BrowserSyncでローカルサーバーを立てて、
SCSSやJS、HTMLの変更を監視します。
```
npm run dev
```

リリース用
ソースマップを削除し、JSやSCSSを圧縮して書き出します
```
npm run release
```




## Package
ファイルの構成は以下のとおりです。

```
Minimum-Framework/
├─ public/
│   ├─ index.html                 トップページ
│   ├─ dist/                      ビルド後のファイルが書き出される場所
│   ├─ img/                       画像
│
├─ node_modules/
│   ├─ Animate.custom.css/        アニメーションライブラリのカスタマイズ版
│   ├─ bootstrap/                 BootstrapのSCSS・JSファイル
│   ├─ jquery/                    jQuery
│
├─ src/
│   │
│   ├─ js/
│   │  ├─ common.js               すべてのJSをまとめてるファイル
│   │  ├─ _anchor.js              アンカーリンク用JS
│   │  ├─ _animatecss.js          AnimateCSS用JS
│   │  ├─ _globalnavbtn.js        グローバルナビ用JS
│   │  ├─ _loader.js              ローディング用JS
│   │  ├─ _nojs.js                no-jsの管理JS
│   │  └─ _scrolltop.js           スクロールトップボタン用JS
│   │
│   ├─ scss/
│      ├─ common.scss             すべてのscssファイルをまとめてるファイル
│      ├─ _mixins.scss            Mixin設定をまとめたファイル
│      ├─ _variables.scss         変数設定をまとめたファイル
│      ├─ _utilities.scss         汎用クラスをまとめたファイル
│      ├─ _component.scss         コンポーネントをまとめたファイル
│      ├─ _animate.scss           アニメーション設定をまとめたファイル
│      │
│      ├─ _footer.scss            フッター用のファイル
│      ├─ _header.scss            ヘッダー用のファイル
│      ├─ _main.scss              メインコンテンツ用のファイル
│      ├─ _nav.scss               グローバルナビ用のファイル
│      ├─ _parts.scss             パーツ用のファイル
│      │
│      ├─ override/
│         ├─ _reboot.scss         Bootstrap上書き用のリセットファイル
│         ├─ _variables.scss      Bootstrap上書き用の変数設定ファイル
│         │
│         ├─ mixin/
│         │  ├─ _breakpoints.scss   メディアクエリの記述を簡略化するmixin
│         │  ├─ _reset-button.scss  buttonスタイルをリセットするmixin
│         │
│         ├─ utilities/
│         │  ├─ _font.scss        font-sizeの汎用クラス
│         │  ├─ _grid.scss        Bootstrap4のgridの拡張　汎用クラス
│         │
│         ├─ component/
│         │  ├─ _buttons.scss     buttonのクラスを拡張
│         │  ├─ _cover.scss       縦100%のフルサイズボックス
│         │  ├─ _loader01.scss    ローディング画面 パターン1
│         │  ├─ _loader02.scss    ローディング画面 パターン2
│         │  ├─ _noscript-message.scss      JSが動いてないときのエラーメッセージ
│         │  ├─ _scrolltop.scss   スクロールトップ
│
├─ .babelrc                       ES6をES5に変換するための設定
├─ .editorconfig                  エディタの設定を合わせるファイル
├─ .eslintrc
├─ .gitignore                     Gitの除外設定
├─ package.json
├─ README.md
├─ webpack.config.babel.js        SCSSとJSのビルド設定
```



## Class
クラスについて
### utilities
Bootstrap4をベースにした汎用的に使えるユーティリティクラスを用意してます。

**テキストの装飾**

| | 全て ≧0px | 小以上 ≧576px | 中以上 ≧768px | 大以上 ≧992px | 特大 ≧1200px |
|:--|:--:|:--:|:--:|:--:|:--:|
|文字の左寄せ|.text-left|.text-sm-left|.text-md-left|.text-lg-left|.text-xl-left|
|文字の右寄せ|.text-right|.text-sm-right|.text-md-right|.text-lg-right|.text-xl-right|
|文字の中央揃え|.text-center|.text-sm-center|.text-md-center|.text-lg-center|.text-xl-center|
|太文字|.font-weight-bold|なし|なし|なし|なし|
|通常の文字|.font-weight-normal|なし|なし|なし|なし|



**余白クラス（カスタマイズ）**

| |全て ≧0px|小以上 ≧576px|中以上 ≧768px|大以上 ≧992px|特大 ≧1200px|
|:--|:--:|:--:|:--:|:--:|:--:|
|余白|.{property}-{size}|.{property}-sm-{size}|.{property}-md-{size}|.{property}-lg-{size}|.{property}-xl-{size}|

{property}に入るワード

- mt または pt（上） - margin-top または padding-top を設定するクラス
- mb または pb（下） - margin-bottom または padding-bottom を設定するクラス
- ml または pl（左） - margin-left または padding-left を設定するクラス
- mr または pr（右） - margin-right または padding-right を設定するクラス
- mx または px（左右）   - -left と -right の両方を設定するクラス
- my または py（上下）   - -top と -bottom の両方を設定するクラス
- m または p（上下左右）  - 要素の4方向すべてに margin または padding を設定するクラス

{size}に入るワード

※ 設定は_variables.scssで変更できます



**フォントサイズクラス（カスタマイズ）**

※フォントサイズクラスを追加してます

| |全て ≧0px|小以上 ≧576px|中以上 ≧768px|大以上 ≧992px|特大 ≧1200px|
|:--|:--:|:--:|:--:|:--:|:--:|
|フォントサイズ|.fs-{size}|.fs-sm-{size}|.fs-md-{size}|.fs-lg-{size}|.fs-xl-{size}|

{size}に入るワード

※ 設定は_variables.scssで変更できます


**グリッド**

| |全て ≧0px|小以上 ≧576px|中以上 ≧768px|大以上 ≧992px|特大 ≧1200px|
|:--|:--:|:--:|:--:|:--:|:--:|
|グリッド親タグ|.row|なし|なし|なし|なし|
|カラム分の幅|.col-{size}|.col-sm-{size}|.col-md-{size}|.col-lg-{size}|.col-xl-{size}|
|余白の調整|.gutter-{size}|.gutter-sm-{size}|.gutter-md-{size}|.gutter-lg-{size}|.gutter-xl-{size}|

.col-{size}に入るワード

1~12カラムです



その他のユーティリティクラスが知りたい方は下記を参考にしてください。
- [Bootstrap4 > ユーティリティ](https://v4-alpha.getbootstrap.com/utilities/borders/)
- [Bootstrap4移行ガイド > ユーティリティ](http://cccabinet.jpn.org/bootstrap4/utilities/borders)



## Licence
[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)



## Author
[kumakuma112](https://github.com/kumakuma112)
