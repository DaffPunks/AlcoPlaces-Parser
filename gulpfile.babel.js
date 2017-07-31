const gulp          = require('gulp');
const sass          = require('gulp-sass');
const babel         = require('gulp-babel');
const autoprefixer  = require('gulp-autoprefixer');
const livereload    = require('gulp-livereload');
const cleanCSS      = require('gulp-clean-css');
const minify        = require('gulp-minify');
const plumber       = require('gulp-plumber');
const lrPort        = 35729;


var paths = {
    style: 'src/sass/**/*.scss',
    styleIndex: 'src/sass/*.scss',
    script: 'src/app/*.js',
    src: 'src/',
    out: 'public/',
    libs: 'src/libs/',
    npmJS: [],
    npmCSS: []
};


gulp.task('sass', function () {
    gulp.src(paths.styleIndex)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer(
            {
                browsers: [
                    '> 1%',
                    'last 2 versions',
                    'firefox >= 4',
                    'safari 7',
                    'safari 8',
                    'IE 8',
                    'IE 9',
                    'IE 10',
                    'IE 11'
                ],
                cascade: false
            }
        ))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.out + 'css'))
        .on('error',function () {});
});


gulp.task('js', () => {
    gulp.src(paths.script)
    .pipe(plumber())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest(paths.out + 'js'));
});

gulp.task('watch', function () {
    //livereload.listen();
    gulp.watch([paths.style, paths.script], ['sass', 'js']);
});

/*gulp.task('lr', ['watch'], function () {
 livereload.listen();
 gulp.watch([paths.src + "*", paths.src + "**!/!*"], function () {
 livereload.reload();
 });
 });*/

gulp.task('libs', function() {
    gulp.src(paths.libs + "**/*")
        .pipe(gulp.dest(paths.out));
});

/*gulp.task('images', function() {
 gulp.src(paths.src + "images/!**!/!*.{svg,png,gif,jpg}")
 .pipe(gulp.dest(paths.out + "images"));
 });*/


gulp.task('build', ['js', 'sass', 'libs']);
gulp.task('dev', ['build', 'watch']);
gulp.task('default', ['build','watch']);