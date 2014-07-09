'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();
var dir = 'src/';

gulp.task('clean', function () { 
    return gulp.src(['dist'], { read: false }).pipe($.clean());
}); 

gulp.task('scripts', ['clean'], function() {
  return gulp.src('src/*')
             .pipe($.uglify())
             .pipe(gulp.dest('dist/js'));
});

gulp.task('connect', function () {
    var connect = require('connect');
    var app = connect()
        .use(connect.static('src'))
        .use(connect.static('demo'))
        .use(connect.directory('demo'));
 
    require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        }); 
});

gulp.task('serve', ['connect'], function () {
    require('opn')('http://localhost:9000');
});

gulp.task('default', ['scripts'], function () { 
    //gulp.start('scripts');
}); 
