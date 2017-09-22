var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var csswring = require('csswring')


gulp.task('styles',function(){
	var mypostcss=[
		csswring,
		autoprefixer({browsers: ['last 4 version']})
	];
	return gulp.src('./assets/Styles/main.scss')
		.pipe(sass())
		.pipe(postcss(mypostcss))
		.pipe(browserSync.reload({stream: true})
		.pipe(gulp.dest('./assets/Styles/'))
		
	);
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