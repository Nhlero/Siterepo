const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
    //1.where is my css file
    return gulp.src('./scss/**/*.scss')
    //2.pass that file through sass compilerst
    .pipe(sass().on('error', sass.logError))
    //3.where do i save the compliled CSS?
    .pipe(gulp.dest('./css'))
    //4.Stream changes to all browsers
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);

}

exports.style = style;
exports.style = watch;