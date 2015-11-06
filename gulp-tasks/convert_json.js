module.exports = function(gulp, $) {
  return function () {
    return gulp.src([$.folders.src_root + '/json/*.json', $.folders.src_root + '/json/*.sass'])
      .pipe($.jsonSass({
        sass: true
      }))
      .pipe(gulp.dest($.folders.src_root + '/stylesheets/settings'));
  }
}