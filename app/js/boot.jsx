
var React = require('react');

(function(){
	console.log('start');
	var MainApp = React.createFactory(require('../views/MainApp.jsx'));
	
	React.render(MainApp(),document.body);

})();
