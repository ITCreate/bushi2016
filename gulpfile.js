var gulp = require('gulp')
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();

gulp.task('pug', () => {
  return gulp.src(['./src/index.pug', './src/pug/articles/*.pug'])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

gulp.task('articles-concat', require('./src/js/article-concat').article_concat)
gulp.task('make-article', require('./src/js/make-article').make_article)

gulp.task('make', ['articles-concat', 'make-article', 'pug']);

gulp.task('watch', ['make'], function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  return gulp.watch('src/**/*', ['make']);
});
