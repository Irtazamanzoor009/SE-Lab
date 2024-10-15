const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Task to compile SASS to CSS
gulp.task('sass', function () {
    return gulp.src('style.scss')  // Source: style.scss in the same directory
        .pipe(sass().on('error', sass.logError))  // Compile SASS
        .pipe(gulp.dest('./'));  // Output to the same directory as style.css
});

// Watch task to automatically compile SASS on file changes
gulp.task('watch', function () {
    gulp.watch('style.scss', gulp.series('sass'));  // Watch style.scss for changes
});
