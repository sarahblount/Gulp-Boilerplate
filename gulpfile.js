/* ===== SETUP ====== */
var gulp = require('gulp'),
    fs = require('fs'),
    config = require('./gulpconfig.js'),
    $ = require('gulp-load-plugins')(config.gulp_load_plugins);

$.folders = config.folders;

function get_task(task) {
  return require('./gulp-tasks/' + task)(gulp, $);
}

/* ===== TASKS ====== */

gulp.task('clean', get_task('clean'));
gulp.task('convert_json', ['clean'], get_task('convert_json'));
gulp.task('sass', ['convert_json', 'clean'], get_task('sass'));
gulp.task('js', ['clean'], get_task('js'));
gulp.task('browserify', ['clean', 'js', 'copy_json'], get_task('browserify'));
gulp.task('uglify_js', ['clean', 'js', 'browserify'], get_task('uglify_js'));
gulp.task('vendor_js', ['clean', 'uglify_js'], get_task('vendor_js'));
gulp.task('copy_fonts', ['clean'], get_task('copy_fonts'));
gulp.task('copy_handlebars', ['clean'], get_task('copy_handlebars'));
gulp.task('copy_json', ['clean'], get_task('copy_json'));
gulp.task('imagemin', ['clean'], get_task('imagemin'));
gulp.task('svgmin', ['clean', 'imagemin'], get_task('svgmin'));
gulp.task('zetzer', ['clean'], get_task('zetzer'));

gulp.task('dev', ['clean', 'convert_json', 'copy_json', 'sass', 'js', 'browserify', 'uglify_js', 'vendor_js', 'copy_fonts', 'copy_handlebars', 'imagemin', 'svgmin', 'zetzer']);

gulp.task('default', ['dev'], function () {
  gulp.watch($.folders.src_root + '/javascript/**/*.js', ['dev']);
  gulp.watch($.folders.src_root + '/handlebars/*.handlebars', ['dev']);
  gulp.watch($.folders.src_root + '/stylesheets/**/*', ['dev']);
  gulp.watch($.folders.src_root + '/images/**/*', ['dev']);
  gulp.watch($.folders.src_root + '/json/*', ['dev']);
});

