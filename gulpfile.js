var gulp = require('gulp'),
	del = require('del'),
	sass = require('gulp-ruby-sass'),
 	sourcemaps = require('gulp-sourcemaps'),
 	svgmin = require('gulp-svgmin'),
 	connect = require('gulp-connect'),
  browserify = require('gulp-browserify'),
  filter = require('gulp-filter'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  plumber = require('gulp-plumber'),

 	src_root = './src/app',
	build_root = './build/app',
  compile_root = './compile/app';


// Clean
gulp.task('clean', function () {
  return del([
    build_root
  ]);
});

// Styles
gulp.task('sass', ['clean'], function () {
  return sass(src_root + '/stylesheets/**/*.sass', { sourcemap: true })
    .pipe(sourcemaps.write('maps', {
      includeContent: false,
      sourceRoot: 'source'
    }))
    .pipe(plumber())
    .pipe(gulp.dest(build_root + '/stylesheets'));
});


// Copy fonts
gulp.task('copy_fonts', ['clean'], function() {
	return gulp.src(src_root + '/fonts')
		.pipe(gulp.dest(build_root + '/fonts'));
});


// Copy images
gulp.task('copy_images', ['clean'], function() {
	return gulp.src(src_root + '/images')
		.pipe(gulp.dest(build_root + '/images'));
});


// Minify svgs
gulp.task('svgmin', ['clean'], function () {
  return gulp.src(src_root + '/images/**/*.svg')
    .pipe(svgmin({
      plugins: [{
          removeViewBox: false
      }, {
        removeUselessStrokeAndFill: false
      }]
    }))
    .pipe(gulp.dest(build_root + '/images'));
});

// Javascript
gulp.task('js', ['clean'], function() {
  gulp.src(src_root + '/javascript/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest(compile_root + '/javascript'))
    .pipe(browserify())
    .pipe(filter('application.js'))
    .pipe(uglify())
    .pipe(gulp.dest(build_root + '/javascript'));
});

// Connect
gulp.task('connect', function() {
  connect.server({
		root: 'build',
    port: 3000,
  });
});

gulp.task('default', ['clean', 'sass', 'js', 'copy_fonts', 'copy_images', 'svgmin'], function () {
  gulp.watch(src_root + '/javascript/**', ['js']);
  gulp.watch(src_root + '/stylesheets/**', ['sass']);
  gulp.watch(src_root + '/images/**', ['copy_images', 'svgmin']);
});
