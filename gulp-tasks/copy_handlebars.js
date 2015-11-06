module.exports = function(gulp, $) {
  return function () {
    return gulp.src($.folders.src_root + '/handlebars/*.handlebars')
      .pipe(gulp.dest($.folders.build_root + '/handlebars'));
  }
}
