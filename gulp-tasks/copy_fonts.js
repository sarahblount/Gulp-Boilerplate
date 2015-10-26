module.exports = function(gulp, $) {
  return function () {
    return gulp.src($.src_root + '/fonts')
      .pipe(gulp.dest($.build_root + '/fonts'));
  }
}
