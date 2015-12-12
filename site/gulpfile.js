var gulp = require('gulp');
var bower = require('gulp-bower');
var del = require('del');
var mainBowerFiles = require('main-bower-files');

gulp.task('clean:lib', function() {
	return del([
			'lib'
		]);
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('bower_components/'))
});

gulp.task("bower-files", ['clean:lib', 'bower'], function(){
    return gulp.src(mainBowerFiles({debugging: true}), { base: './bower_components' })
    	.pipe(gulp.dest("./lib"));
});

gulp.task('default', function() {
	
});