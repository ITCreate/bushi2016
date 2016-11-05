class PageDecorator {
	constructor() {
		this.pages = [];
		$('.page').each( (idx, page) => {
			this.pages.push(new Page(idx, page))
		})
		console.log(this.pages)
	}
	decoration() {
		this.createHeader()
		this.createPageNum()
		this.createIndex()
	}
	createHeader() {
		let cache_title = ""
		this.pages.forEach( (page) => {	
			if( page.isNoDecoration() ) return

			let $header = $('<div>').addClass('page-header')
			cache_title = page.title != ""? page.title : cache_title   
		
			if( page.isLeft() ) { $header.text('ITCreate部 部誌2016') } 
			else if( page.isRight() ) { $header.text(cache_title) }

			page.$page.prepend($header)
		})
	}
	createPageNum() {
		this.pages.forEach( (page) => {
			if( page.isNoDecoration() ) return

			let $div  = $('<div>');
			$div.text(page.num);
			$div.addClass('page-num');

			page.$page.append($div)
		})
	}
	createIndex() {
		this.pages.forEach( (page) => {
			if( page.title != '' ) $('.article-list').append(`<li>${page.title}</li>`)
		})
	}
}

class Page {
	constructor(idx, page) {
		this.$page = $(page)
		this.title = this.getTitle()
		this.num = idx
		if( !this.isNoDecoration() ) {
			if( this.isLeft() ) this.$page.addClass('left')
			if( this.isRight() ) this.$page.addClass('right')
		}
	}
	getTitle() {
		return this.$page.find('.article-title').text();
	}
	isRight() {
		return this.num % 2 == 0
	}
	isLeft() {
		return this.num % 2 == 1
	}
	isNoDecoration() {
		return this.$page.attr('class').split(" ").indexOf('none-decration') != -1
	}
}

let decorater = new PageDecorator()
decorater.decoration()
