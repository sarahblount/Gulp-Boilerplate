module.exports = function(gulp, $) {
  return function () {
    return $.browserify({ entries: [$.folders.compile_root + "/javascript/babel/application.js"] })
      .bundle()
      .pipe($.source('application.bundled.js'))
      .pipe(gulp.dest($.folders.compile_root + '/javascript/babel'));
  }
}
