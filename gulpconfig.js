module.exports = {
  gulp_load_plugins: {
    pattern: ["gulp-*", "gulp.*", "del"],
    replaceString: /\bgulp[\-.]/,
    scope: ["dependencies", "devDependencies", "peerDependencies"],
    lazy: false,
    rename: {
      "gulp-ruby-sass": "sass"
    }
  },
  tasks: [
    "clean",
    "sass",
    "js",
    "copy_fonts",
    "copy_images",
    "svgmin",
    "zetzer"
  ],
  folders: {
    src_root: "./src/app",
    build_root: "./build/app",
    compile_root: "./compile/app"
  }
}
