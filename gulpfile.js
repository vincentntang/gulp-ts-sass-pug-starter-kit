"use strict";

var gulp = require("gulp");
var pug = require("gulp-pug");
var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");

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

gulp.task("workflow", function buildHTML() {
  gulp.src("./src/pug/**/*.pug").pipe(
    pug({
      doctype: "html",
      pretty: false
    }).pipe(gulp.dest("./dist/"))
  );
});

//Watch task
gulp.task("default", function() {
  gulp.watch("./src/scss/**/*.scss", ["workflow"]);
});

gulp.task("default", function() {
  gulp.watch("./src/pug/**/*.pug", ["workflow"]);
});
