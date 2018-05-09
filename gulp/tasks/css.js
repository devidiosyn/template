module.exports = function () {
    $.gulp.task('css', function () {
        return $.gulp.src('src/static/css/main.css')
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.autoprefixer({
            browsers: ['last 2 versions']
        }))
        .on(-"error", $.gp.notify.onError({
            message: "Error: <%= error.message %>",
            title: "css error"
        }))
        .pipe($.gp.csso())
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest('build/static/css/'))
        .pipe($.bs.reload({
            stream:true
        }));
    })
}