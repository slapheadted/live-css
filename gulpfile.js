var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function () {
    gulp.src('less/styles.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist'));
});

gulp.task('less-watch', function() {
	watch('./less/**/*.less', function(files, cb) {
		gulp.start('less', cb)
	});
})
