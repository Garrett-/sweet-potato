var gulp = require('gulp');
var to5 = require('gulp-6to5');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var addStream = require('add-stream');

/**
 * Run with `gulp scripts`
 */
gulp.task('scripts', function() {
  gulp.src([
    'bower_components/jquery/dist/jquery.js',
    'public/javascripts/src/*.js'
  ])

  // add files to one
  .pipe( concat('app.js') )

  // make ES5 compliant
  .pipe( to5() )

  // minify
  .pipe( uglify() )

  // place newly created file into dist directory
  .pipe( gulp.dest('public/javascripts/dist/') );
});

gulp.task('watch', function(){
  var watcher = gulp.watch('public/javascripts/src/*.js', ['scripts']);
  watcher.on('change', function(event){
    console.log('File ' + event.path + ' was ' + event.type + ', running \'scripts\' task...');
  });
});
