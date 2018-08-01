

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('prefix', () =>
    gulp.src('style/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions' , 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('watch', function () {
    gulp.watch('style/style.css', ['prefix']);
});

gulp.task('look', ['watch', 'prefix']);