var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    filter = require('gulp-filter'),
    util = require('gulp-util'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();

gulp.task('build', ['sass', 'uglify', 'svg']);

gulp.task('serve', ['sass', 'uglify', 'svg'], function() {

  browserSync.init(['**/*.html', '**/*.css', '**/*.js'], {
    server: "."
  });

  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('js/rrssb.js', ['uglify']);

});

gulp.task('sass', function() {
  gulp.src(['scss/**/*.scss'])
  .pipe(sass())
  .on('error', util.log)
  .pipe(autoprefixer())
  .pipe(minifyCss())
  .pipe(gulp.dest('css/'));
});

gulp.task('uglify', function() {
  gulp.src(['js/rrssb.js'])
  .pipe(uglify())
  .on('error', util.log)
  .pipe(rename({
    extname: '.min.js'
  }))
  .pipe(gulp.dest('js'));
});

gulp.task('svg', function() {
  gulp.src(['icons/**/*.svg', '!icons/**/*.min.svg'])
  .pipe(imagemin())
  .on('error', util.log)
  .pipe(rename({
    extname: '.min.svg'
  }))
  .pipe(gulp.dest('icons/'));
});

gulp.task('default', ['serve']);
