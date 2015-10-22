var gulp = require('gulp'),
	del = require('del'),
	sass = require('gulp-ruby-sass'),
 	sourcemaps = require('gulp-sourcemaps'),
 	svgmin = require('gulp-svgmin'),
 	connect = require('gulp-connect'),

 	src_root = 'user_interface/app',
	build_root = 'themes/rawnet/app';


// Clean
gulp.task('clean', function () {
  return del([
    build_root
  ]);
});


// Styles
gulp.task('sass', function () {
  return sass(src_root + '/stylesheets', { sourcemap: true })
    .on('error', sass.logError)
    .pipe(sourcemaps.write('maps', {
      includeContent: false,
      sourceRoot: 'source'
    }))
    .pipe(gulp.dest(build_root + '/stylesheets'));
});


// Copy fonts
gulp.task('copy_fonts', function() {
	return gulp.src(src_root + '/fonts')
		.pipe(gulp.dest(build_root + '/fonts'));
});


// Copy images
gulp.task('copy_images', function() {
	return gulp.src(src_root + '/images')
		.pipe(gulp.dest(build_root + '/images'));
});


// Minify svgs
gulp.task('svgmin', function () {
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

// Connect
gulp.task('connect', function() {
  connect.server({
		root: 'build',
    port: 3000,
  });
});

gulp.task('default', ['clean'], function() {
    gulp.start('sass', 'copy_fonts', 'copy_images', 'svgmin', 'connect');
});