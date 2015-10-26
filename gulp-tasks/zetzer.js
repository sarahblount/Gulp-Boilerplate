module.exports = function(gulp, $) {
  return function () {
    gulp.src('./src/pages/*.html')
      .pipe($.zetzer({
        partials: './src/partials',
        templates: './src/layouts',
        dot_template_settings: {
          strip: false
        }
      }))
      .pipe(gulp.dest('build'));
  }
}
