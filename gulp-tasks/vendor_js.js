module.exports = function(gulp, $) {
  return function () {
    gulp.src($.folders.src_root + '/javascript/vendor/*.js')
      .pipe($.concat('app.vendor.js'))
      .pipe($.uglify())
      .pipe(gulp.dest($.folders.build_root + '/javascript'));
  }
}
