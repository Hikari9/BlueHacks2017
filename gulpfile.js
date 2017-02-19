/**
 * This script watches for changes made to the
 * program during development and compiles them
 * in the background, through the Gulp library.
 * All injections and compilations will run during
 * `ionic serve`. To run tasks manually in the
 * terminal, type `gulp <task>` or simply `gulp`.
 *
 * Tasks include injection of HTML templates into
 * the Angular UI router (task: 'html'), the
 * injection of SCSS imports into Global.scss (task:
 * 'scss'), the compilation of SCSS files into a
 * minified CSS file (task: 'sass'), and the
 * compilation of javascript files (task: 'js').
 *
 * You can specify specific tasks to run on
 * 'ionic serve' by adding to 'default' (first run)
 * and 'watch' (during run). Alternatively, you can
 * specify them in the 'ionic.project' file using
 * the "gulpStartupTasks" and "watchPatterns"
 * properties.
 *
 * @author  Rico Tiongson
 * @package BlueHacks
 * @since   1.01
 */

// filesystem libraries
var sh         = require('shelljs');
var path       = require('path');
var fileExists = require('file-exists');

// gulp libraries
var gulp       = require('gulp');
var gutil      = require('gulp-util');
var concat     = require('gulp-concat');
var sass       = require('gulp-sass');
var iife       = require('gulp-iife');
var minifyCss  = require('gulp-clean-css');
var inject     = require('gulp-inject');
var rename     = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify     = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var gutil      = require('gulp-util');
var shell      = require('gulp-shell');

gulp.task('serve:before', ['default']);

// paths for injecting/watching
var paths = {
  sass: ['./www/scss/**/*.scss'],
  javascript: ['./www/app/**/*.js']
};

/**
 * The default tasks on first run of 'ionic serve'.
 * There is no need to set 'scss' or 'html' because
 * 'sass' and 'javascript' will already run both
 * respectively.
 */
gulp.task('default', ['watch', 'sass', 'javascript']);

/**
 * Watch for changes in files during 'ionic serve'.
 * @return {undefined}
 */
gulp.task('watch', function() {

  // watch for all SCSS files
  gulp.watch(gulp.sass, ['sass']);
  // no need to watch for 'scss' because
  // 'sass' already depends on 'scss'

  // watch for all js file changes
  gulp.watch(paths.javascript, ['javascript']);

});

/**
 * Compiles all the SCSS files in scss folder
 * into a minified CSS bundle at www/app.min.css
 * along with sourcemaps. Logs errors from
 * compilation into the console during 'ionic serve'.
 */
gulp.task('sass', [], function(done) {
  return gulp.src('./www/scss/ionic.app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename('app-compiled-scss.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./www/css'));
});

/**
 * Compiles all javascript files in the www/js folder
 * into a minified JS bundle at www/app.min.js,
 * along with sourcemaps. Logs errors from compilation
 * (particularly from ngAnnotate) into the console
 *  during 'ionic serve'. Compiles using UglifyJS.
 *
 * All javascript files will be wrapped with an IIFE,
 * so that variables won't be leaked to the global
 * scope.
 */
gulp.task('javascript', [], function(done) {
  return gulp.src(paths.javascript)
    .pipe(sourcemaps.init())
    .pipe(ngAnnotate()) // need to annotate AngularJS injections
    .on('error', done)
    .pipe(iife({        // wrap all files to avoid scope leak
      useStrict: true,
      trimCode: true,
    }))
    .pipe(concat('app-bundle.min.js', {newLine: ';'}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./www/js/'));
});
