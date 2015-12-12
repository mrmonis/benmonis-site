var gulp = require('gulp');
var bower = require('gulp-bower');
var mainBowerFiles = require('main-bower-files');

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('lib/'))
});

gulp.task("bower-files", function(){
    return gulp.src(mainBowerFiles({debugging: true}), { base: './bower_components' })
    	.pipe(gulp.dest("./lib"));
});

gulp.task('install', ['bower']);

gulp.task('default', function() {
	
});