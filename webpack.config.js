
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
