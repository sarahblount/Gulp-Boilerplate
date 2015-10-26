/* ===== SETUP ====== */
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
      pattern: ['gulp-*', 'gulp.*', 'del'],
      replaceString: /\bgulp[\-.]/,
      scope: ['dependencies', 'devDependencies', 'peerDependencies'],
      lazy: false,
      rename: {
        'gulp-ruby-sass': 'sass'
      }
    }),
    tasks = ['clean', 'sass', 'copy_fonts', 'copy_images', 'svgmin', 'js', 'zetzer'];

$.src_root = './src/app';
$.build_root = './build/app';
$.compile_root = './compile/app';

function get_task(task) {
  return require('./gulp-tasks/' + task)(gulp, $);
}

function load_tasks(tasks) {
  tasks.map(function (task) {
    gulp.task(task, get_task(task));
  });
}


/* ===== TASKS ====== */

load_tasks(tasks);

gulp.task('default', ['clean', 'sass', 'js', 'copy_fonts', 'copy_images', 'svgmin', 'zetzer'], function () {
  gulp.watch($.src_root + '/javascript/**', ['js']);
  gulp.watch($.src_root + '/stylesheets/**', ['sass']);
  gulp.watch($.src_root + '/images/**', ['copy_images', 'svgmin']);
});
