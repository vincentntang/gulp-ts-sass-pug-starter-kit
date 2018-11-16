"use strict";

var gulp = require("gulp");
var pug = require("gulp-pug");
var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var watch = require("gulp-watch");

gulp.task("workflow", function() {
  gulp
    .src("./src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(cssnano())
    .pipe(sourcemaps.write("./"))

    .pipe(gulp.dest("./dist/css"));
});

//Watch task
gulp.task("default", function() {
  gulp.watch("./src/scss/**/*.scss", ["workflow"]);
});

// gulp.task("pug", function buildHTML() {
//   gulp
//     .src(["src/pug/**/*.pug"], {
//       base: "src/pug"
//     })
//     .pipe(pug())
//     .pipe(gulp.dest("./dist/"));
// });

// gulp.task("templates", function() {
//   gulp
//     .src("./*.pug")
//     .pipe(plumber({ errorHandler: onError }))
//     .pipe(pug())
//     .pipe(gulp.dest("build/"));
// });

gulp.task("views", function() {
  return gulp
    .src("./src/pug/**/*.pug")
    .pipe(
      pug({
        doctype: "html",
        pretty: true
      })
    )
    .pipe(gulp.dest("./dist/"));
});
// gulp.task("workflow", function buildHTML() {
//   return gulp.src("./src/pug/**/*.pug").pipe(
//     pug({
//       doctype: "html",
//       pretty: false
//     }).pipe(gulp.dest("./dist/"))
//   );
// });

// gulp.task("pug", function() {
//   return gulp
//     .src("./src/pug/**/*.pug")
//     .pipe(
//       pug({
//         doctype: "html",
//         pretty: false
//       })
//     )
//     .pipe(gulp.dest("./dist/"));
// });

gulp.task("default", function() {
  gulp.watch("./src/pug/**/*.pug", ["views"]);
});

// gulp.task("watch", function() {
//   return watch("./src/pug/**/*.pug", { ignoreInitial: false }).pipe(
//     gulp.dest("pug")
//   );
// });
