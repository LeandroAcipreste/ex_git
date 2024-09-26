const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function compilaSass(){
    return gulp.src('./source/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build'))
};

exports.default = function(){
    gulp.watch('./source/*scss',{ ignoreInitial:false}, gulp.series(compilaSass));
};