module.exports = function(gulp, $) {
  return function () {
    return gulp.src($.folders.src_root + '/images')
      .pipe(gulp.dest($.folders.build_root + '/images'));
  }
}
