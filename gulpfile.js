/* ===== SETUP ====== */
var gulp = require('gulp'),
    fs = require('fs'),
    config = require('./gulpconfig.js'),
    $ = require('gulp-load-plugins')(config.gulp_load_plugins);

$.folders = config.folders;

function get_task(task) {
  return require('./gulp-tasks/' + task)(gulp, $);
}

function load_tasks(tasks) {
  tasks.map(function (task) {
    gulp.task(task, get_task(task));
  });
}


/* ===== TASKS ====== */

load_tasks(config.tasks);

gulp.task('default', ['clean', 'sass', 'js', 'copy_fonts', 'copy_images', 'svgmin', 'zetzer'], function () {
  gulp.watch($.src_root + '/javascript/**', ['js']);
  gulp.watch($.src_root + '/stylesheets/**', ['sass']);
  gulp.watch($.src_root + '/images/**', ['copy_images', 'svgmin']);
});
