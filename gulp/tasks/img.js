module.exports = function () {
    $.gulp.task('img:dev', function(){
        return $.gulp.src('src/static/img/*.{png,jpg,gif}')
        .pipe($.gulp.dest('build/static/img/'))
    });

    $.gulp.task('img:build', function(){
        return $.gulp.src('src/static/img/*.{png,jpg,gif}')
        .pipe($.gp.tinypng('8aAsvl-t6IjYJcsC-pHCtu156Jisp5uA'))
        .pipe($.gulp.dest('build/static/img/'))
    });
}
