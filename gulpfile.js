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
gulp.task('sass', ['clean'], get_task('sass'));
gulp.task('js', ['clean'], get_task('js'));
gulp.task('copy_fonts', ['clean'], get_task('copy_fonts'));
gulp.task('copy_images', ['clean'], get_task('copy_images'));
gulp.task('svgmin', ['clean'], get_task('svgmin'));
gulp.task('zetzer', ['clean'], get_task('zetzer'));

gulp.task('default', ['clean', 'sass', 'js', 'copy_fonts', 'copy_images', 'svgmin', 'zetzer'], function () {
  gulp.watch($.folders.src_root + '/javascript/**/*.js', ['js']);
  gulp.watch($.folders.src_root + '/stylesheets/**/*.sass', ['sass']);
  gulp.watch($.folders.src_root + '/images/**/*', ['copy_images', 'svgmin']);
});
