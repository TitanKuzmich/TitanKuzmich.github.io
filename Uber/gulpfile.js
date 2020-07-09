const gulp = require('gulp');
const browserSync = require('browser-sync').create;
const sass = require('gulp-sass');

gulp.task('server', function(){
    browserSync.init({
        server:{
            baseDir:"./"
        }
    })
})

gulp.task('styles', function () {
    return gulp.src("css/sass/*.+(scss|sass)")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
})

gulp.task('watch', function () {
    gulp.watch("css/sass/*.+(scss|sass)", gulp.parallel("styles"))
    gulp.watch("*.html").on("change", browserSync.reload);
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));