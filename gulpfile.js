

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('prefix', () =>
    gulp.src('style/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('watch', function () {
    gulp.watch('style/style.css', ['prefix']);
});

gulp.task('look', ['watch', 'prefix']);