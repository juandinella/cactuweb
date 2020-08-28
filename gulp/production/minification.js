const gulp = require('gulp')
const htmlmin = require("gulp-htmlmin");
const config = require('../config')

const markup = config.directories.dist.markup

gulp.task('minification', () =>
  gulp.src(markup + '/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .on('error', config.onError)
    .pipe(gulp.dest(markup))
)
