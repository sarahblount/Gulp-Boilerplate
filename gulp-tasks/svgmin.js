module.exports = function(gulp, $) {
  return function () {
    return gulp.src($.folders.src_root + '/images/**/*.svg')
      .pipe($.svgmin({
        plugins: [{
            removeViewBox: false
        }, {
          removeUselessStrokeAndFill: false
        }]
      }))
      .pipe(gulp.dest($.folders.build_root + '/images'));
    }
}
