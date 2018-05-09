module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/pug/**/*.pug',$.gulp.series('pug'))
        $.gulp.watch('src/static/css/**/*.css',$.gulp.series('css'))
    })
}