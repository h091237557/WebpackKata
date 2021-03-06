#WebPack Kata
這是一個簡單的WebPack使用範例，主要是運用webpack將react自動打包成一個檔案。

---
Webpack是一個前端資源加載/打包工具，只需要簡單的配置就可以提供前端工程化需要的各種功能，並且有需要可以整合到grunt/gulp的工作流。


WebPack核心功能如下

*	可同時整合CommonJs和AMD模組
* 	轉換JSX、Coffee Script、TypeScript等
*  分散封裝專案使用的程式碼，使載入頁面時只需載入當頁所需的程式碼以加速載入速度
*  整合樣式表(css、sass、less)
*  處理圖片與字型
*  建置production-ready的程式碼

---

###Step1 Webpack Install

首先先將webpack安裝在全域

	npm install -g webpack
	
###Step2 配置webpack.config.js文字

首先在terminal執行下面指令，建立webpack.config.js。

	touch webpack.config.js
並在裡面撰寫下列程式碼。

`entry` : 代表要被打包的檔案boot.jsx

`output` : 打包後所產生的檔案bundle.js

`resolve` : 指定可以被`require`的文字后綴。比如test.jsx的文字可以直接用`require(./test)`所引用。

`module` : 依檔案來決定使用的loaders，下面程式碼就是指.jsx都使用jsx loader。


	module.exports = {
		entry:{
			app:[
				'./app/js/boot.jsx'
			]
		},
		output:{
			filename:'bundle.js'
		},
		resolve:{
			extensions:['','.js','.jsx']
		},
		module:{
			loaders:[
				{test:/\.jsx$/,loaders:['jsx?harmony']}
			]
		}
	};
	
### Step3 建立範例

`app/js` 建立`boot.jsx`。

	var React = require('react');

	(function(){
		console.log('start');
		var MainApp = React.createFactory(require('../views/MainApp.jsx'));
	
		React.render(MainApp(),document.body);

	})();

	
 `app/views`建立`MainApp.jsx`。
 
	var React = require('react');
	var Header = require('./Header');

	var MainApp = React.createClass({

		render:function(){
			return(
				<div>
					<Header/>
					bla.bla.bla.bla
				</div>
			);
		}
	});

	module.exports = MainApp;

`app/views`建立`Header.jsx`。

	var React = require('react');

	var Header = React.createClass({
	
		render:function(){
			return (
				<h2>Header</h2>
			);
		}

	});

	module.exports = Header;
	
建立`index.html`。

	<!DOCTYPE html>
	<html class='no-js'>
		<head>
			<title></title>
		</head>
		<body>
			<script src="bundle.js"></script>
		</body>
	</html>

###Step4 執行webpack產生bundle.js
執行下列指令，webpack會自動將jsx轉換生js，最後產生出`bundle.js`。

	webpack
