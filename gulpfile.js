var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles',function(){
	gulp.src('./assets/Styles/main.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('./assets/Styles/'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function(){
	browserSync.init({
		server:{
			baseDir: './'
		}
	});

	gulp.watch(['./assets/Styles/*.scss','./assets/Styles/**/*.scss'],['styles']);
	gulp.watch('./**/*.html').on('change',browserSync.reload);
});

gulp.task('default', ['styles','serve']);