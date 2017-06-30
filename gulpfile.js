'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    minify = require('gulp-minify');
 
gulp.task('sass', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(clean({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('./js/*.js'),
        uglify(),
        gulp.dest('./js')
    ],
    cb
  );
});