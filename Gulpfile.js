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

  browserSync.init({
    server: "."
  });

  gulp.watch("scss/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch("*.js").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  gulp.src(['scss/*.scss'])
  .pipe(sass())
  .on('error', util.log)
  .pipe(autoprefixer())
  .pipe(minifyCss())
  .pipe(gulp.dest('css/'))
  .pipe(filter('**/*.css'))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('uglify', function() {
  gulp.src(['js/rrssb.js'])
  .on('error', util.log)
  .pipe(gulp.dest('js'));
});

gulp.task('svg', function() {
  gulp.src(['icons/*.svg', '!icons/*.min.svg'])
  .pipe(imagemin())
  .on('error', util.log)
  .pipe(rename({
    extname: '.min.svg'
  }))
  .pipe(gulp.dest('icons/'));
});

gulp.task('default', ['serve']);
