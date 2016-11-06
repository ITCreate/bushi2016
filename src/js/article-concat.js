exports.article_concat = function(){
	var fs = require('fs')
	var path = require('path')

	var articl_dir = fs.readdirSync('./src/articles')
	var pugs = articl_dir.filter(function(file_path){
		return path.extname(file_path) == '.html'
	})

	var write_file = './src/_article-concat.pug'
	if(fs.existsSync(write_file)) fs.unlinkSync(write_file)
	fs.appendFileSync(write_file, 'include ./pug/components/_top.pug\r\n')
	pugs.forEach(function(pug){
		fs.appendFileSync(write_file, 'include ./articles/' + pug + '\r\n')
	})
	fs.appendFileSync(write_file, 'include ./pug/components/_back.pug\r\n')
}
