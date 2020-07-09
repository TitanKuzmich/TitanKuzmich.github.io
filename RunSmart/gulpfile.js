const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
// const postcss      = require('gulp-postcss');
// const autoprefixer = require('autoprefixer');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

gulp.task('server', function(){
    browserSync.init({
        server:{
            baseDir:"./"
        }
    })
})

gulp.task('styles', function () {
    return gulp.src("sass/**/*.+(scss|sass)")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
})

gulp.task('watch', function () {
    gulp.watch("sass/**/*.+(scss|sass|css)", gulp.parallel('styles'))
    gulp.watch("*.html").on("change", browserSync.reload);
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));