module.exports = function(gulp, $) {
  return function () {
    gulp.src($.folders.compile_root + '/javascript/babel/application.bundled.js')
      .pipe($.uglify())
      .pipe($.rename('application.js'))
      .pipe(gulp.dest($.folders.build_root + '/javascript'));
  }
}
