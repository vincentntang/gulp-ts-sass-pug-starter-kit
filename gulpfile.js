"use strict";

/* IMPORTS */

var gulp = require("gulp");
var pug = require("gulp-pug");
var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();

/* SCSS COMPILATION WATCH AND SAVE */

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
  // .pipe(browserSync.stream());
});

gulp.task("default", function() {
  gulp.watch("./src/scss/**/*.scss", ["workflow"]);
});

/* PUG COMPILATION WATCH AND SAVE*/

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
  // .pipe(browserSync.stream());
});

gulp.task("default", function() {
  gulp.watch("./src/pug/**/*.pug", ["views"]);
});

/* BROWSER SYNC */

// gulp.task("serve", function() {
//   browserSync.init({
//     server: {
//       baseDir: "./dist"
//     }
//   });
//   gulp.watch("./src/pug/**/*.pug").on("change", browserSync.reload);
//   gulp.watch("./src/scss/**/*.scss").on("change", browserSync.reload);
//   gulp.watch("./src/ts/*.ts").on("change", browserSync.reload);
// });

// /* SERVE */

// gulp.task("default", ["serve"]);
