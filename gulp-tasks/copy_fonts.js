module.exports = function(gulp, $) {
  return function () {
    return gulp.src($.folders.src_root + '/fonts/*')
      .pipe(gulp.dest($.folders.build_root + '/fonts'));
  }
}
