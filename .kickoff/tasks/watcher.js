/**
 * gulp watcher
 */

const config = require('../config');
const gulp = require('gulp');

gulp.task('watcher', ['css'], () => {
	gulp.watch([`${config.css.scssDir}/**/*.scss`], ['css']);
});

