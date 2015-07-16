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


//---------------------------------------------

// var CssDestination = './theme/frontend/uezo/style/uezo/css/',
//     sass_layout    = './sass/layout.scss',
//     sass_comn      = './sass/common.scss',
//     sass_comment   = './sass/comment.scss',
//     sass_prof      = './sass/profile.scss',
//     sass_fancy     = './sass/fancybox.scss',
//     sass_mail      = './sass/mail.scss',
//     sass_jquery    = './sass/jquery.scss';

// // SASS (layout)
// gulp.task('sass-layout', function () {

//     console.log('[sass]'.bold.magenta + ' Compiling Sass');

//     return gulp.src(sass_layout)
//     // .on('error', function (err) {
//     //   console.error('Error', err.message);
//     // })
//         .pipe(plumber(function () {
//             beep();
//             console.log('[sass]'.bold.magenta + ' There was an issue compiling Sass\n'.bold.red);
//             this.emit('end');
//         }))
//         // .pipe(sourcemaps.init())
//         .pipe(newer(CssDestination))
//         .pipe(sass())
//         .pipe(minifyCSS({advanced:false}))
//         .pipe(autoprefixer({ browsers: ['last 2 version', 'IE 9'], cascade: false }))
//         // .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest(CssDestination))
//         .pipe(livereload());
// });

// // SASS (common)
// gulp.task('sass-comn', function () {

//     console.log('[sass]'.bold.magenta + ' Compiling Sass');

//     return gulp.src(sass_comn)
//    //  .on('error', function (err) {
//    //    console.error('Error', err.message);
//    // })
//         .pipe(plumber(function () {
//             beep();
//             console.log('[sass]'.bold.magenta + ' There was an issue compiling Sass\n'.bold.red);
//             this.emit('end');
//         }))
//         // .pipe(sourcemaps.init())
//         .pipe(newer(CssDestination))
//         .pipe(sass())
//         .pipe(minifyCSS({advanced:false}))
//         .pipe(autoprefixer({ browsers: ['last 2 version', 'IE 9'], cascade: false }))
//         // .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest(CssDestination))
//         .pipe(livereload());
// });

// // SASS (comment)
// gulp.task('sass-comment', function () {

//     console.log('[sass]'.bold.magenta + ' Compiling Sass');

//     return gulp.src(sass_comment)
//    //  .on('error', function (err) {
//    //    console.error('Error', err.message);
//    // })
//         .pipe(plumber(function () {
//             beep();
//             console.log('[sass]'.bold.magenta + ' There was an issue compiling Sass\n'.bold.red);
//             this.emit('end');
//         }))
//         // .pipe(sourcemaps.init())
//         .pipe(newer(CssDestination))
//         .pipe(sass())
//         .pipe(minifyCSS({advanced:false}))
//         .pipe(autoprefixer({ browsers: ['last 2 version', 'IE 9'], cascade: false }))
//         // .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest(CssDestination))
//         .pipe(livereload());
// });

// // SASS (profile)
// gulp.task('sass-prof', function () {

//     console.log('[sass]'.bold.magenta + ' Compiling Sass');

//     return gulp.src(sass_prof)
//    //  .on('error', function (err) {
//    //    console.error('Error', err.message);
//    // })
//         .pipe(plumber(function () {
//             beep();
//             console.log('[sass]'.bold.magenta + ' There was an issue compiling Sass\n'.bold.red);
//             this.emit('end');
//         }))
//         // .pipe(sourcemaps.init())
//         .pipe(newer(CssDestination))
//         .pipe(sass())
//         .pipe(minifyCSS({advanced:false}))
//         .pipe(autoprefixer({ browsers: ['last 2 version', 'IE 9'], cascade: false }))
//         // .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest(CssDestination))
//         .pipe(livereload());
// });

// // SASS (fancybox)
// gulp.task('sass-fancy', function () {

//     console.log('[sass]'.bold.magenta + ' Compiling Sass');

//     return gulp.src(sass_fancy)
//    //  .on('error', function (err) {
//    //    console.error('Error', err.message);
//    // })
//         .pipe(plumber(function () {
//             beep();
//             console.log('[sass]'.bold.magenta + ' There was an issue compiling Sass\n'.bold.red);
//             this.emit('end');
//         }))
//         // .pipe(sourcemaps.init())
//         .pipe(newer(CssDestination))
//         .pipe(sass())
//         .pipe(minifyCSS({advanced:false}))
//         .pipe(autoprefixer({ browsers: ['last 2 version', 'IE 9'], cascade: false }))
//         // .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest(CssDestination))
//         .pipe(livereload());
// });

// // SASS (mail)
// gulp.task('sass-mail', function () {

//     console.log('[sass]'.bold.magenta + ' Compiling Sass');

//     return gulp.src(sass_mail)
//    //  .on('error', function (err) {
//    //    console.error('Error', err.message);
//    // })
//         .pipe(plumber(function () {
//             beep();
//             console.log('[sass]'.bold.magenta + ' There was an issue compiling Sass\n'.bold.red);
//             this.emit('end');
//         }))
//         // .pipe(sourcemaps.init())
//         .pipe(newer('./module/mail/static/css/default/default/'))
//         .pipe(sass())
//         .pipe(minifyCSS({advanced:false}))
//         .pipe(autoprefixer({ browsers: ['last 2 version', 'IE 9'], cascade: false }))
//         // .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('./module/mail/static/css/default/default/'))
//         .pipe(livereload());
// });

// // SASS (jquery)
// gulp.task('sass-jquery', function () {

//     console.log('[sass]'.bold.magenta + ' Compiling Sass');

//     return gulp.src(sass_jquery)
//    //  .on('error', function (err) {
//    //    console.error('Error', err.message);
//    // })
//         .pipe(plumber(function () {
//             beep();
//             console.log('[sass]'.bold.magenta + ' There was an issue compiling Sass\n'.bold.red);
//             this.emit('end');
//         }))
//         // .pipe(sourcemaps.init())
//         .pipe(newer(CssDestination))
//         .pipe(sass())
//         .pipe(minifyCSS({advanced:false}))
//         .pipe(autoprefixer({ browsers: ['last 2 version', 'IE 9'], cascade: false }))
//         // .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest(CssDestination))
//         .pipe(livereload());
// });

// // DEFAULT
// gulp.task('default', ['watch', 'sass-jquery', 'sass-comn', 'sass-comment', 'sass-prof', 'sass-fancy', 'sass-mail', 'sass-layout']);

// // WATCH
// gulp.task('watch', function() {
//     livereload.listen();

//     gulp.watch('./sass/modules/**/*.scss',  ['sass-layout']   );
//     gulp.watch('./sass/common.scss',        ['sass-comn']     );
//     gulp.watch('./sass/comment.scss',       ['sass-comment']  );
//     gulp.watch('./sass/profile.scss',       ['sass-prof']     );
//     gulp.watch('./sass/fancybox.scss',      ['sass-fancy']    );
//     gulp.watch('./sass/mail.scss',          ['sass-mail']     );
//     gulp.watch('./sass/jquery.scss',        ['sass-jquery']   );
// });