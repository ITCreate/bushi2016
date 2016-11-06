exports.make_article = function(){
	var fs = require('fs')
	var path = require('path')

	var articl_dir = fs.readdirSync('./src/articles')
	var pugs = articl_dir.filter(function(file_path){
		return path.extname(file_path) == '.html'
	})

	var dir = "./src/pug/articles/"
	
	pugs.forEach(function(pug){
		var data = `html
	head
		link(rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css")
		link(rel="stylesheet" type="text/css" href="../src/css/page.css")
		link(rel="stylesheet" type="text/css" href="../src/css/style.css")
		link(rel="stylesheet" type="text/css" href="../src/css/thema.css")
		link(rel="stylesheet" type="text/css" href="../src/css/top.css")
	body
		include ../../articles/${pug}
		script(src='https://code.jquery.com/jquery-2.2.4.min.js', type='text/javascript')
		script(src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', type='text/javascript')
		script(src='../src/js/pagenation.js', type='text/javascript')`
		//console.log(dir + pug)
		fs.writeFileSync(dir + pug.split('.')[0] + '.pug', data)
	})
	
}
