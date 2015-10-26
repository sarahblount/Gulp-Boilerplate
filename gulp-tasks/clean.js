module.exports = function(gulp, $) {
  return function () {
    return $.del([
      $.build_root
    ]);
  }
}
