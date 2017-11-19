// npm install gulp  gulp-sass gulp-autoprefixer gulp-minify-css gulp-concat gulp-newer gulp-livereload  gulp-plumber beepbeep colors --save

var postcss = require('gulp-postcss');
var gulp = require('gulp');
var uncss = require('gulp-uncss');
var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

gulp.task('default', function () {
    var processors = [
        autoprefixer({browsers: ['last 1 version']}),
        mqpacker
        // csswring
    ];
    return gulp.src('./dest/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./out'));
});

gulp.task('uncss', function() {
    return gulp.src('./dest/*.css')
        .pipe(uncss({
            html: ['index.html', 'posts/**/*.html', 'http://localhost:5757/']
        }))
        .pipe(gulp.dest('./out'));
});
