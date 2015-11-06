module.exports = {
  gulp_load_plugins: {
    pattern: ["gulp-*", "gulp.*", "del", "browserify", "vinyl-source-stream"],
    replaceString: /\bgulp[\-.]/,
    scope: ["dependencies", "devDependencies", "peerDependencies"],
    lazy: false,
    rename: {
      "gulp-ruby-sass": "sass",
      "vinyl-source-stream": "source",
      "gulp-json-sass": "jsonSass"
    }
  },
  folders: {
    src_root: "./src/app",
    build_root: "./build/app",
    compile_root: "./compile/app"
  }
}
