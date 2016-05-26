var gulp = require('gulp'),
    git = require('gulp-git'),
    gitHubPages = require('gulp-gh-pages'),
    filter = require('gulp-filter'),
    tagVersion = require('gulp-tag-version'),
    webpack = require('webpack-stream'),
    typedoc = require('gulp-typedoc'),
    bump = require('gulp-bump'),
    connect = require('gulp-connect');

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

gulp.task('publish-docs', ['generate-docs'], function () {
    return gulp.src('./dist/docs/**/*')
        .pipe(gitHubPages());
});

gulp.task('server', ['compile-typescript'], function () {
    connect.server({
        root: './'
    });
});

gulp.task('default', ['server']);

gulp.task('patch', ['publish-docs'], function () {
    return bumpVersion('patch');
});

gulp.task('minor', ['publish-docs'], function () {
    return bumpVersion('minor');
});

gulp.task('major', ['publish-docs'], function () {
    return bumpVersion('major');
});
