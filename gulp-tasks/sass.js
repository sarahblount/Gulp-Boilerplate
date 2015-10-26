module.exports = function(gulp, $) {
  return function () {
    return $.sass($.src_root + '/stylesheets/**/*.sass', { sourcemap: true })
      .pipe($.sourcemaps.write('maps', {
        includeContent: false,
        sourceRoot: 'source'
      }))
      .pipe($.plumber())
      .pipe(gulp.dest($.build_root + '/stylesheets'));
  }
}
