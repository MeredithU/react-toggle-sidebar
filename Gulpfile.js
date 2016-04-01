"use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bourbon = require('node-bourbon').includePaths,
    neat = require('node-neat').includePaths;

// Compiles all gulp tasks
gulp.task('default', ['sass']);

// Compil SASS files
gulp.task('sass', function() {
  gulp.src('src/scss/**/*.scss')
      /*.pipe(sass({
        includePaths: bourbon,
        includePaths: neat
      }))*/
      .pipe(gulp.dest('dist/css'))
});