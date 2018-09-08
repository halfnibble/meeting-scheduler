let gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('connect', () => {
    connect.server({
        root: ['./example', './dist'],
        livereload: true
    });
});

// Prevent gulp from crashing over sass errors
gulp.task('sass', (done) => {
    gulp.src('./sass/*.sass')
        .pipe(sass({ errLogToConsole: true }))
        .pipe(gulp.dest('./dist/css'));
    done();
});

gulp.task('livereload', (done) => {
    gulp.src('./example')
        .pipe(connect.reload());
    done();
});

const watchSass = (done) => {
    gulp.watch('./sass/*.sass', gulp.parallel('sass'));
    done();
};
const watchHtml = (done) => {
    gulp.watch('./example/*.html', gulp.parallel('livereload'));
    done();
};
const watchDist = (done) => {
    gulp.watch('./dist/**/*', gulp.parallel('livereload'));
    done();
};

gulp.task('watch', gulp.parallel(watchSass, watchHtml, watchDist));


gulp.task('default', gulp.parallel('connect', 'watch', 'sass'));


