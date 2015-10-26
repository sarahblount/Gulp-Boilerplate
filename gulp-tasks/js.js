module.exports = function(gulp, $) {
  return function () {
    gulp.src($.src_root + '/javascript/**/*.js')
      .pipe($.babel())
      .pipe(gulp.dest($.compile_root + '/javascript'))
      .pipe($.browserify())
      .pipe($.filter('application.js'))
      .pipe($.uglify())
      .pipe(gulp.dest($.build_root + '/javascript'));
  }
}
