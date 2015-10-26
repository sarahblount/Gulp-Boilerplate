module.exports = function(gulp, $) {
  return function () {
    return $.del([
      $.folders.build_root
    ]);
  }
}
