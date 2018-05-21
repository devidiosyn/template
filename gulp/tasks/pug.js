module.exports = function () {
    $.gulp.task('pug', function(){
        return $.gulp.src('src/pug/pages/*.pug')
        .pipe($.gp.pug({
            pretty : true
        }))
        .pipe($.gp.plumber())
        .pipe($.gp.notify())
        .pipe($.gulp.dest('build'))
        .on('end', $.bs.reload);
    });
}
