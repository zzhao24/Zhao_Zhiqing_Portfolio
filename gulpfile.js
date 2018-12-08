let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
    return gulp.src('sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles'));
});

gulp.task('minify', () => {
    return gulp.src('sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('styles'));
});

gulp.task('watch', () =>  {
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('sass/*.scss', ['minify']);
});


