# LightningRouter
================

Lightning Component でルーティングするサンプル実装です。

デプロイ方法
--------
[前提条件] Node、Node Foreman をインストールされた環境であること

1. npmで必要なライブラリをインストールする

 $ npm install

1. .envファイルにデプロイ先のユーザ名、パスワード

 $ vi .env

 ```
 SF_USERNAME=(username)
 SF_PASSWORD=(password)
 ```

1. Node Foremanでgulpを実行する

 $ nf run gulp

ライセンス
--------
Copyright &copy; 2015 Akira.Kuratani.

[MIT License](http://www.opensource.org/licenses/mit-license.php)
