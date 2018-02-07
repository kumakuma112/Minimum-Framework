# Minimum Framework



## Description
**"Minimum Framework"** は、最新のコーディング事情をを反映してるBootstrap4をベースに、小規模な案件でもスピーディーにコーディングできるように調整したミニマムなフレームワークです。


**Bootstrap4からの主な変更点は下記になります。**

- [SCSS] Webpackでビルド
- [SCSS] WebpackとPostCSSでプレフィックス反映 
- [SCSS] BootstrapのSCSSを日本語に変更
- [SCSS] BootstrapのSCSSを1remを16pxから10pxに変更
- [SCSS] Bootstrapの汎用クラスを短縮&強化
- [SCSS] Bootstrapのレスポンシブのクラスを短縮（s,m,l,xl）
- [SCSS] Bootstrapの学習コストが高いコンポーネント系を削除

- [JS] Webpackで1ファイルにビルド
- [JS] ES6で記述
- [JS] ローディングJS追加
- [JS] ハンバーガーメニューJS追加
- [JS] アンカーリンクJS追加
- [JS] Animate.CSS用のパララックスアニメーションJS追加
- [JS] Bootstrap4のJSを削除

- [ライブラリ] Bootstrap・jQuery・Animate.cssをpackage.jsonで管理

- [管理] 初期設定が必要な箇所にコメントアウト「TODO」を追加（エディタのプラグインで管理）
- [管理] 多彩な案件でも使いまわせそうなgitignoreを追加


### DEMO

[Minimum Framework](http://kumakumakuma.jp/Minimum-Framework/)


### Supported browsers
基本的なサポート範囲は **Bootstrap4** に準じます。
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
│         │  ├─ _grid-framework.scss   グリッドmixin
│         │  ├─ _reset-button.scss  buttonスタイルをリセットするmixin
│         │
│         ├─ utilities/
│         │  ├─ _*****.scss       オリジナルの汎用クラスに変更
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
Bootstrap4の汎用クラスは長すぎるので、省略形の汎用クラスに変更してます。
また入力補完で選びやすくするためにレスポンシブ用のワードは最後尾に移動。

※ 不要な汎用クラスがある場合は_utilities.scssで調整できます



**グリッド**

| |全て ≧0px|小以上 ≧576px|中以上 ≧768px|大以上 ≧992px|特大 ≧1200px|
|:--|:--:|:--:|:--:|:--:|:--:|
|グリッド親タグ|.row|なし|なし|なし|なし|
|カラム分の幅|.col{size}|.col{size}-s|.col{size}-m|.col{size}-l|.col{size}-xl|
|余白の調整|.gutter{size}|.gutter{size}-s|.gutter{size}-m|.gutter{size}-l|.gutter{size}-xl|

.col-{size}に入るワード

1~12カラムです

※ 設定は_variables.scssで変更できます



**余白クラス（カスタマイズ）**

| |全て ≧0px|小以上 ≧576px|中以上 ≧768px|大以上 ≧992px|特大 ≧1200px|
|:--|:--:|:--:|:--:|:--:|:--:|
|余白|.{property}{size}|.{property}{size}-s|.{property}{size}-m|.{property}{size}-l|.{property}{size}-xl|
|左右 中央揃え|.myauto|.myauto-s|.myauto-m|.myauto-l|.myauto-xl|

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



**文字揃え**

| | 全て ≧0px | 小以上 ≧576px | 中以上 ≧768px | 大以上 ≧992px | 特大 ≧1200px |
|:--|:--:|:--:|:--:|:--:|:--:|
|左寄せ        |.al |.al-s|.al-m|.al-l|.al-xl|
|右寄せ        |.ar|.ar-s|.ar-m|.ar-l|.ar-xl|
|中央揃え       |.ac|.ac-s|.ac-m|.ac-l|.ac-xl|
|ベースライン揃え|.vabl|.vabl-s|.vabl-m|.vabl-l|.vabl-xl|
|上端揃え       |.vat|.vat-s|.vat-m|.vat-l|.vat-xl|
|中央揃え       |.vam|.vam-s|.vam-m|.vam-l|.vam-xl|
|下端揃え       |.vab|.vab-s|.vab-m|.vab-l|.vab-xl|
|テキストの上端揃え|.vatt|.vatt-s|.vatt-m|.vatt-l|.vatt-xl|
|テキストの下端揃え|.vatb|.vatb-s|.vatb-m|.vatb-l|.vatb-xl|



**フォントサイズクラス（カスタマイズ）**

| |全て ≧0px|小以上 ≧576px|中以上 ≧768px|大以上 ≧992px|特大 ≧1200px|
|:--|:--:|:--:|:--:|:--:|:--:|
|フォントサイズ|.fs{size}|.fs{size}-s|.fs{size}-m|.fs{size}-l|.fs{size}-xl|

{size}に入るワード

※ 設定は_variables.scssで変更できます


**文字装飾**

| | 全て ≧0px | 小以上 ≧576px | 中以上 ≧768px | 大以上 ≧992px | 特大 ≧1200px |
|:--|:--:|:--:|:--:|:--:|:--:|
|太字|.bold|.bold-s|.bold-m|.bold-l|.bold-xl|
|通常|.normal|.normal-s|.normal-m|.normal-l|.normal-xl|
|webフォントの反映|.webfont|なし|なし|なし|なし|



**文字カラー**

| | 全て ≧0px | 小以上 ≧576px | 中以上 ≧768px | 大以上 ≧992px | 特大 ≧1200px |
|:--|:--:|:--:|:--:|:--:|:--:|
|白|.white|なし|なし|なし|なし|
|メインカラー|.primary|なし|なし|なし|なし|
|セカンドカラー|.secondary|なし|なし|なし|なし|
|成功|.success|なし|なし|なし|なし|
|情報|.info|なし|なし|なし|なし|
|警告|.warning|なし|なし|なし|なし|
|エラー|.danger|なし|なし|なし|なし|
|明るいグレー|.light|なし|なし|なし|なし|
|暗いグレー|.dark|なし|なし|なし|なし|



**背景色カラー**

| | 全て ≧0px | 小以上 ≧576px | 中以上 ≧768px | 大以上 ≧992px | 特大 ≧1200px |
|:--|:--:|:--:|:--:|:--:|:--:|
|白|.bg-white|なし|なし|なし|なし|
|メインカラー|.bg-primary|なし|なし|なし|なし|
|セカンドカラー|.bg-secondary|なし|なし|なし|なし|
|成功|.bg-success|なし|なし|なし|なし|
|情報|.bg-info|なし|なし|なし|なし|
|警告|.bg-warning|なし|なし|なし|なし|
|エラー|.bg-danger|なし|なし|なし|なし|
|明るいグレー|.bg-light|なし|なし|なし|なし|
|暗いグレー|.bg-dark|なし|なし|なし|なし|
|透明|.bg-transparent|なし|なし|なし|なし|



**ディスプレイ**

| | 全て ≧0px | 小以上 ≧576px | 中以上 ≧768px | 大以上 ≧992px | 特大 ≧1200px |
|:--|:--:|:--:|:--:|:--:|:--:|
|非表示            |.none|.none-s|.none-m|.none-l|.none-xl|
|インライン         |.inline|.inline-s|.inline-m|.inline-l|.inline-xl|
|インラインブロック  |.ib|.ib-s|.ib-m|.ib-l|.ib-xl|
|ブロック          |.block|.block-s|.block-m|.block-l|.block-xl|
|テーブル          |.table|.table-s|.table-m|.table-l|.table-xl|
|テーブル tr       |.table-row|.table-row-s|.table-row-m|.table-row-l|.table-row-xl|
|テーブル td       |.table-cell|.table-cell-s|.table-cell-m|.table-cell-l|.table-cell-xl|
|フレックス         |.flex|.flex-s|.flex-m|.flex-l|.flex-xl|
|インラインフレックス |.iflex|.iflex-s|.iflex-m|.iflex-l|.iflex-xl|



**ポジション**

| | 全て ≧0px | 小以上 ≧576px | 中以上 ≧768px | 大以上 ≧992px | 特大 ≧1200px |
|:--|:--:|:--:|:--:|:--:|:--:|
|デフォルト   |.static|.static-s|.static-m|.static-l|.static-xl|
|relative   |.rel|.rel-s|.rel-m|.rel-l|.rel-xl|
|absolute   |.abs|.abs-s|.abs-m|.abs-l|.abs-xl|
|fixed       |.fix|.fix-s|.fix-m|.fix-l|.fix-xl|
|fixed top   |.fix-top|.fix-top-s|.fix-top-m|.fix-top-l|.fix-top-xl|
|fixed bottom   |.fix-bottom|.fix-bottom-s|.fix-bottom-m|.fix-bottom-l|.fix-bottom-xl|



**フレックス 方向**

| | 全て ≧0px | 小以上 ≧576px | 中以上 ≧768px | 大以上 ≧992px | 特大 ≧1200px |
|:--|:--:|:--:|:--:|:--:|:--:|
|左から右へ（ltr）水平方向      |.flex-row|.flex-row-s|.flex-row-m|.flex-row-l|.flex-row-xl|
|上から下へ垂直方向             |.flex-col|.flex-col-s|.flex-col-m|.flex-col-l|.flex-col-xl|


**フレックス 折り返し**

| | 全て ≧0px | 小以上 ≧576px | 中以上 ≧768px | 大以上 ≧992px | 特大 ≧1200px |
|:--|:--:|:--:|:--:|:--:|:--:|
|横一行      |.flex-nowrap|.flex-nowrap-s|.flex-nowrap-m|.flex-nowrap-l|.flex-nowrap-xl|
|折り返し     |.flex-wrap|.flex-wrap-s|.flex-wrap-m|.flex-wrap-l|.flex-wrap-xl|


**フレックス 水平方向の配置方法**

| | 全て ≧0px | 小以上 ≧576px | 中以上 ≧768px | 大以上 ≧992px | 特大 ≧1200px |
|:--|:--:|:--:|:--:|:--:|:--:|
|左側に配置      |.jc-start|.jc-start-s|.jc-start-m|.jc-start-l|.jc-start-xl|
|右側に配置      |.jc-end|.jc-end-s|.jc-end-m|.jc-end-l|.jc-end-xl|
|中央に配置      |.jc-center|.jc-center-s|.jc-center-m|.jc-center-l|.jc-center-xl|


**フレックス 垂直方向の配置方法**

| | 全て ≧0px | 小以上 ≧576px | 中以上 ≧768px | 大以上 ≧992px | 特大 ≧1200px |
|:--|:--:|:--:|:--:|:--:|:--:|
|上側に配置      |.ai-start|.ai-start-s|.ai-start-m|.ai-start-l|.ai-start-xl|
|下側に配置      |.ai-end|.ai-end-s|.ai-end-m|.ai-end-l|.ai-end-xl|
|中央に配置      |.ai-center|.ai-center-s|.ai-center-m|.ai-center-l|.ai-center-xl|
|ベースライン    |.ai-baseline|.ai-baseline-s|.ai-baseline-m|.ai-baseline-l|.ai-baseline-xl|


**フレックス 垂直方向 複数行の配置方法**

| | 全て ≧0px | 小以上 ≧576px | 中以上 ≧768px | 大以上 ≧992px | 特大 ≧1200px |
|:--|:--:|:--:|:--:|:--:|:--:|
|上側に詰める     |.ac-start|.ac-start-s|.ac-start-m|.ac-start-l|.ac-start-xl|
|下側に詰める      |.ac-end|.ac-end-s|.ac-end-m|.ac-end-l|.ac-end-xl|
|中央に詰める      |.ac-center|.ac-center-s|.ac-center-m|.ac-center-l|.ac-center-xl|



**フロート**

| |全て ≧0px|小以上 ≧576px|中以上 ≧768px|大以上 ≧992px|特大 ≧1200px|
|:--|:--:|:--:|:--:|:--:|:--:|
|左     |.fl|.fl-s|.fl-m|.fl-l|.fl-xl|
|右     |.fr|.fr-s|.fr-m|.fr-l|.fr-xl|
|解除    |.fnone|.fnone-s|.fnone-m|.fnone-l|.fnone-xl|
|Clearfix|.cf|なし|なし|なし|なし|



**幅**

| | 全て ≧0px | 小以上 ≧576px | 中以上 ≧768px | 大以上 ≧992px | 特大 ≧1200px |
|:--|:--:|:--:|:--:|:--:|:--:|
|横幅  |.w{size}|なし|なし|なし|なし|
|縦幅  |.h{size}|なし|なし|なし|なし|
|横幅MAX 100%  |.wmax100|なし|なし|なし|なし|
|縦幅MAX 100%  |.hmax100|なし|なし|なし|なし|

{size}に入るワード

※ 設定は_variables.scssで変更できます



**動画**

| | 全て ≧0px | 小以上 ≧576px | 中以上 ≧768px | 大以上 ≧992px | 特大 ≧1200px |
|:--|:--:|:--:|:--:|:--:|:--:|
|レスポンシブ動画  |.video|なし|なし|なし|なし|
|動画 21:9       |.video-21by9|なし|なし|なし|なし|
|動画 16:9       |.video-16by9|なし|なし|なし|なし|
|動画 4:3       |.video-4by3|なし|なし|なし|なし|
|動画 1:1       |.video-1by1|なし|なし|なし|なし|
|動画の子要素      |.videoItem|なし|なし|なし|なし|


**スクリーンリーダー**

| | 全て ≧0px | 小以上 ≧576px | 中以上 ≧768px | 大以上 ≧992px | 特大 ≧1200px |
|:--|:--:|:--:|:--:|:--:|:--:|
|  |.sr-only|なし|なし|なし|なし|
|  |.sr-only-focusable|なし|なし|なし|なし|



## Licence
[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)



## Author
[kumakuma112](https://github.com/kumakuma112)
