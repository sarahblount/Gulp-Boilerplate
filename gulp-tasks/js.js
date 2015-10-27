module.exports = function(gulp, $) {
  return function () {
    gulp.src($.folders.src_root + '/javascript/**/*.js')
      .pipe($.babel())
      .pipe(gulp.dest($.folders.compile_root + '/javascript'))
      .pipe($.browserify())
      .pipe($.filter('application.js'))
      .pipe($.uglify())
      .pipe(gulp.dest($.folders.build_root + '/javascript'));
  }
}
