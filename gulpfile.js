const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefixer = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");

function compilescss() {
  return src("src/styles/*.scss")
    .pipe(sass())
    .pipe(prefixer())
    .pipe(minify())
    .pipe(dest("src/"));
}

function watchTask() {
  watch(["src/styles/*.scss", "src/styles/**/*.scss"], compilescss);
}

exports.default = series(compilescss, watchTask);
