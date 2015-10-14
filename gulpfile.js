"use strict";

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// path
var path = {
  css: 'assets/css/',
  sass: 'assets/sass/**/*.scss'
};

// sass
gulp.task('sass', function () {
  return gulp.src(path.sass)
    .pipe($.plumber())
    .pipe($.sass.sync().on('error', $.sass.logError))
    .pipe($.csscomb())
    .pipe($.pleeease({
      'autoprefixer': {
        'browsers': ['last 4 versions', 'Android 2.3', 'ios 6']
      },
      'rem': false,
      'minifier': false,
      'mqpacker': true
    }))
    .pipe(gulp.dest(path.css))
});

// Watch
gulp.task('watch', function () {
  gulp.watch(path.sass, ['sass']);
});

//task
gulp.task('default', ['watch']);
gulp.task('build', ['sass']);
