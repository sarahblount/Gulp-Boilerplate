module.exports = function(gulp, $) {
  return function () {
    return $.sass($.folders.src_root + '/stylesheets/application.sass', { sourcemap: true })
      .pipe($.plumber())
      .pipe($.sourcemaps.write())
      .pipe($.plumber())
      .pipe(gulp.dest($.folders.build_root + '/stylesheets'));
  }
}

