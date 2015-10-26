module.exports = function(gulp, $) {
  return function () {
    return gulp.src($.src_root + '/images')
      .pipe(gulp.dest($.build_root + '/images'));
  }
}
