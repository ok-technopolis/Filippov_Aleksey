var gulp = require('gulp'),
	pug = require('gulp-pug'),
	image = require('gulp-image'),
	autoprefixer = require('gulp-autoprefixer'),
	wiredep = require('gulp-wiredep'),
	mainBowerFiles = require('main-bower-files'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass');

gulp.task('css', function(){
	return gulp.src('./app/sass/main.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer({
				browsers: '> 0%'
			}))
			.pipe(gulp.dest('./dist/css'))
			.pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function () {
	gulp.src('./app/js/*.js')
		.pipe(gulp.dest('./dist/js'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('image', function () {
	gulp.src('./app/images/*')
		.pipe(image())
		.pipe(gulp.dest('./dist/images'));
});

gulp.task('pug', function(){
	return gulp.src('./app/pug/*.pug')
		.pipe(pug({
			pretty: true
		}))
		// .pipe(wiredep({
		// 	// directory: './dist/js/bower',
		// 	ignorePath: '../../dist/'
		// }))
		.pipe(gulp.dest('./dist'))
		.pipe(browserSync.reload({stream: true}));
})

gulp.task('bower', function(){
	return gulp.src(mainBowerFiles())
		.pipe(gulp.dest('./dist/js/bower'));
});

gulp.task('serve', function(){
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
		browser: 'google chrome'
	});

	gulp.watch('./app/sass/**.scss', ['css']);
	gulp.watch('./app/pug/**/**.pug', ['pug']);
	gulp.watch('./app/js/**.js', ['js']);
})

gulp.task('default', ['css', 'bower', 'pug', 'image', 'js']);