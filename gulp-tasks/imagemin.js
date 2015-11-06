module.exports = function(gulp, $) {
  return function () {
    return gulp.src([$.folders.src_root + '/images/**/*', $.folders.src_root + '!/images/**/*.svg'])
      .pipe($.imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}]
      }))
      .pipe(gulp.dest($.folders.build_root + '/images'));
  }
}

