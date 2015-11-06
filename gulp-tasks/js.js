module.exports = function(gulp, $) {
  return function () {
    gulp.src([$.folders.src_root + '/javascript/application.js', $.folders.src_root + '/javascript/modules/*.js'])
      .pipe($.babel())
      .pipe(gulp.dest($.folders.compile_root + '/javascript/babel'));
  }
}
