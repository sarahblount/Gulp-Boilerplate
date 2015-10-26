module.exports = function(gulp, $) {
  return function () {
    return $.sass($.folders.src_root + '/stylesheets/**/*.sass', { sourcemap: true })
      .pipe($.sourcemaps.write('maps', {
        includeContent: false,
        sourceRoot: 'source'
      }))
      .pipe($.plumber())
      .pipe(gulp.dest($.folders.build_root + '/stylesheets'));
  }
}
