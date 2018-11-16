"use strict";

/* IMPORTS */

var gulp = require("gulp");
var pug = require("gulp-pug");
var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var browserSync = require("browser-sync").create();

/* SCSS to CSS */

gulp.task("sass-pipe", function() {
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

    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
});

/* PUG to HTML */

gulp.task("pug-pipe", function() {
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

/* TYPESCRIPT to JS */

gulp.task("ts-pipe", function() {
  return gulp
    .src("src/ts/**/*.ts")
    .pipe(
      ts({
        noImplicitAny: true,
        outFile: "bundle.js"
      })
    )
    .pipe(gulp.dest("./dist/js"));
});

/* BROWSER SYNC */

gulp.task("serve", function() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch("./src/scss/**/*.scss", ["sass-pipe"]);
  gulp.watch("./src/ts/*.ts", ["ts-pipe"]).on("change", browserSync.reload);
  gulp
    .watch("./src/pug/**/*.pug", ["pug-pipe"])
    .on("change", browserSync.reload);
});

/* SERVE */

gulp.task("default", ["serve"]);
