var gulp = require('gulp'),
    webpack = require('webpack-stream'),
    typedoc = require('gulp-typedoc'),
    bump = require('gulp-bump');

gulp.task('compile-typescript', function () {
    return gulp
        .src('./src/index.js')
        .pipe(webpack(require('./config/webpack.config.dev')))
        .pipe(gulp.dest('./'));
});

gulp.task('compile-and-minify-typescript', ['compile-typescript'], function () {
    return gulp
        .src('./src/index.js')
        .pipe(webpack(require('./config/webpack.config.release')))
        .pipe(gulp.dest('./'));
});

gulp.task('generate-docs', ['compile-and-minify-typescript'], function () {
    return gulp
        .src('./src/**/*.ts')
        .pipe(typedoc({
            module: 'commonjs',
            target: 'es5',
            includeDeclarations: true,
            mode: 'file',
            out: './dist/docs/'
        }));
});

gulp.task('bump-version', ['generate-docs'], function () {
    return gulp
        .src(['./bower.json', './package.json'])
        .pipe(bump())
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['compile-typescript']);
gulp.task('deploy', ['bump-version']);