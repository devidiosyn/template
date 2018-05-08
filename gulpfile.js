'use strict'

var gulp = require('gulp'),
    gp = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    browserSync.watch('build',browserSync.reload());
})

gulp.task('pug', function(){
    return gulp.src('src/pug/pages/*.pug')
    .pipe(gp.pug({
        pretty : true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('css', function () {
    return gulp.src('src/static/css/main.css')
    .pipe(gp.sourcemaps.init())
    .pipe(gp.autoprefixer({
        browsers: ['last 2 versions']
    }))
    .on("error", gp.notify.onError({
        message: "Error: <%= error.message %>",
        title: "css error"
    }))
    .pipe(gp.csso())
    .pipe(gp.sourcemaps.write())
    .pipe(gulp.dest('build/static/css/'));
})

gulp.task('watch', function () {
    gulp.watch('src/pug/**/*.pug',gulp.series('pug'))
    gulp.watch('src/static/css/**/*.css',gulp.series('css'))
})

gulp.task('default', gulp.series(
    gulp.parallel('pug','css'),
    'watch'
))