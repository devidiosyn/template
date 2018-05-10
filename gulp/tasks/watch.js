module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/pug/**/*.pug',$.gulp.series('pug'))
        $.gulp.watch('src/static/css/**/*.css',$.gulp.series('css'))
        $.gulp.watch('src/static/js/main.js',$.gulp.series('scripts'))
        $.gulp.watch('src/static/img/*',$.gulp.series('img:dev'))
    })
}