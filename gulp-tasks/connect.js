module.exports = function(gulp, $) {
  return function () {
    $.connect.server({
      root: 'build',
      port: 3000,
    });
  }
}
