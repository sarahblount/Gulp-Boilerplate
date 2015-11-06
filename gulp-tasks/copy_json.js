module.exports = function(gulp, $) {
  return function () {
    return gulp.src($.folders.src_root + '/json/*.json')
      .pipe(gulp.dest($.folders.compile_root + '/javascript/babel'));
  }
}

