module.exports = function(gulp, $) {
  return function () {
    return gulp.src($.src_root + '/images/**/*.svg')
      .pipe($.svgmin({
        plugins: [{
            removeViewBox: false
        }, {
          removeUselessStrokeAndFill: false
        }]
      }))
      .pipe(gulp.dest($.build_root + '/images'));
    }
}
