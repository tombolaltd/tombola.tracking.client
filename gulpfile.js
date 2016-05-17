var gulp = require('gulp'),
    git = require('gulp-git'),
    filter = require('gulp-filter'),
    tagVersion = require('gulp-tag-version'),
    webpack = require('webpack-stream'),
    typedoc = require('gulp-typedoc'),
    bump = require('gulp-bump');

function bumpVersion(bumpType) {
    return gulp.src(['./package.json', './bower.json'])
        .pipe(bump({
            type: bumpType
        }))
        .pipe(gulp.dest('./'))
        .pipe(git.commit('bumps package version'))
        .pipe(filter('package.json'))
        .pipe(tagVersion());
}

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

gulp.task('default', ['compile-typescript']);

gulp.task('patch', ['generate-docs'], function () {
    return bumpVersion('patch');
});

gulp.task('feature', ['generate-docs'], function () {
    return bumpVersion('minor');
});

gulp.task('release', ['generate-docs'], function () {
    return bumpVersion('major');
});